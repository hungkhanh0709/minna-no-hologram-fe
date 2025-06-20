/**
 * Script to validate and fix image URLs in the website
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

// High-quality, verified Unsplash images related to holograms, tech, and science
const verifiedHologramImages = [
  {
    url: 'https://images.unsplash.com/photo-1621075160523-b936ad96132a?auto=format&fit=crop&w=400&h=240',
    category: 'hologram',
    description: 'Holographic light display'
  },
  {
    url: 'https://images.unsplash.com/photo-1633876729760-0b979fb6876f?auto=format&fit=crop&w=400&h=240',
    category: 'tech',
    description: 'Digital tech interface'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=400&h=240',
    category: 'science',
    description: 'Digital visualization of data'
  },
  {
    url: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&w=400&h=240',
    category: 'hologram',
    description: 'Hologram pyramid setup'
  },
  {
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&h=240',
    category: 'science',
    description: 'Quantum data visualization'
  },
  {
    url: 'https://images.unsplash.com/photo-1567722681579-c671cabd2810?auto=format&fit=crop&w=400&h=240',
    category: 'hologram',
    description: 'Museum holographic display'
  },
  {
    url: 'https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?auto=format&fit=crop&w=400&h=240',
    category: 'tech',
    description: 'Digital entertainment projection'
  },
  {
    url: 'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?auto=format&fit=crop&w=400&h=240',
    category: 'tech',
    description: 'Light projection technology'
  },
  {
    url: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&h=400',
    category: 'hologram',
    description: 'Futuristic holographic interface'
  },
  {
    url: 'https://images.unsplash.com/photo-1563493531475-1866a1195d25?auto=format&fit=crop&w=400&h=240',
    category: 'tech',
    description: 'Digital particles display'
  },
  {
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&h=240',
    category: 'tech',
    description: 'Digital code visualization'
  },
  {
    url: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&w=400&h=240',
    category: 'science',
    description: 'Laser beam technology'
  },
  {
    url: 'https://images.unsplash.com/photo-1607723118113-2a667c9456a8?auto=format&fit=crop&w=400&h=240',
    category: 'hologram',
    description: 'Hologram-style projection'
  }
];

// Function to check if an image URL exists
async function checkImageExists(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({
        url,
        status: res.statusCode,
        exists: res.statusCode === 200
      });
    }).on('error', () => {
      resolve({
        url,
        status: 'Error',
        exists: false
      });
    });
  });
}

// Function to get a replacement image from our verified list
function getReplacementImage(category = 'hologram') {
  // Filter by requested category or default to all
  const categoryImages = verifiedHologramImages.filter(img => 
    category === 'any' || img.category === category
  );
  
  // If no images in the requested category, use any hologram image
  const imagesToUse = categoryImages.length > 0 ? 
    categoryImages : 
    verifiedHologramImages.filter(img => img.category === 'hologram');
  
  // Return a random image from the filtered list
  return imagesToUse[Math.floor(Math.random() * imagesToUse.length)];
}

// Function to replace an invalid or irrelevant image with a verified one
function replaceImageInFile(filePath, oldUrl, newUrl) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const newContent = content.replace(new RegExp(oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newUrl);
    fs.writeFileSync(filePath, newContent);
    return true;
  } catch (error) {
    console.error(`Error replacing image in ${filePath}:`, error);
    return false;
  }
}

// Main validation and fix function
async function validateAndFixImages() {
  console.log('Starting image validation and fixing process...');
  
  const rootDir = path.resolve(__dirname, '..');
  const appDir = path.join(rootDir, 'app');
  
  // Get all .tsx files in the app directory
  const getAllFiles = (dir) => {
    let files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      if (fs.statSync(fullPath).isDirectory()) {
        files = files.concat(getAllFiles(fullPath));
      } else if (fullPath.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
    
    return files;
  };
  
  const files = getAllFiles(appDir);
  
  // Process each file
  for (const file of files) {
    console.log(`\nProcessing file: ${path.relative(rootDir, file)}`);
    
    const content = fs.readFileSync(file, 'utf8');
    const regex = /https:\/\/images\.unsplash\.com\/[^\s"')]+/g;
    let match;
    let replacementsMade = 0;
    
    // Make a copy of the content that we'll update
    let updatedContent = content;
    
    // Extract and process each image URL
    while ((match = regex.exec(content)) !== null) {
      const imageUrl = match[0];
      
      // Check if the image exists
      const imageStatus = await checkImageExists(imageUrl);
      
      if (!imageStatus.exists) {
        console.log(`  ❌ Invalid image URL found: ${imageUrl}`);
        
        // Determine appropriate category based on the file name
        let category = 'hologram';
        if (file.includes('science')) category = 'science';
        else if (file.includes('video')) category = 'tech';
        
        // Get a replacement image
        const replacement = getReplacementImage(category);
        
        // Update the content with the replacement
        updatedContent = updatedContent.replace(imageUrl, replacement.url);
        console.log(`  ✅ Replaced with: ${replacement.url}`);
        console.log(`     Category: ${replacement.category}, Description: ${replacement.description}`);
        
        replacementsMade++;
      }
    }
    
    // Save the updated content if replacements were made
    if (replacementsMade > 0) {
      fs.writeFileSync(file, updatedContent);
      console.log(`  Updated ${replacementsMade} image(s) in the file`);
    } else {
      console.log(`  All images are valid in this file`);
    }
  }
  
  console.log('\nImage validation and fixing completed!');
  
  // Verify all our recognized images exist
  console.log('\nVerifying our list of replacement images...');
  for (const image of verifiedHologramImages) {
    const status = await checkImageExists(image.url);
    console.log(`${status.exists ? '✅' : '❌'} ${image.url} - ${image.category} - ${image.description}`);
  }
}

// Run the validation and fix process
validateAndFixImages().then(() => {
  console.log('Process completed. Restarting the server is recommended to see changes.');
});
