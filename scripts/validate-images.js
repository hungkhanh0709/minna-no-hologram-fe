/**
 * Script to validate if the Unsplash images used in the site exist and are relevant to hologram topics
 */
const fs = require('fs');
const path = require('path');
const https = require('https');

// Function to extract image URLs from a file
function extractImageUrls(content) {
  const regex = /https:\/\/images\.unsplash\.com\/[^\s"')]+/g;
  return content.match(regex) || [];
}

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

// Function to check if image is likely related to holograms or tech
async function checkImageRelevance(url) {
  // Extract the photo ID from the URL
  const photoIdMatch = url.match(/photo-([a-zA-Z0-9-]+)/);
  if (!photoIdMatch) {
    return {
      url,
      relevant: "Unknown - couldn't extract photo ID"
    };
  }
  
  // Unsplash doesn't provide a direct API to check keywords without authentication
  // We'll check based on common visual features in the URLs
  const relevantTerms = [
    'hologram', 'tech', 'digital', 'future', 'light', 'laser', 
    'projection', '3d', 'virtual', 'science', 'neon', 'glow'
  ];
  
  // A simple heuristic - not as accurate as actually calling the Unsplash API
  let isRelevant = false;
  const photoId = photoIdMatch[1];
  
  // Some photo IDs we know are relevant from our manual selection
  const knownRelevantIds = [
    '1621075160523-b936ad96132a', // Hologram tech
    '1633876729760-0b979fb6876f', // Digital display
    '1581092795360-fd1ca04f0952', // Tech visualization
    '1626544827763-d516dce335e2', // Virtual/holographic
    '1558494949-ef010cbdcc31', // Tech/quantum
    '1567722681579-c671cabd2810', // Museum/display
    '1579547621113-e4bb2a19bdd6', // Digital performer
    '1506399558188-acca6f8cbf41', // Tech projection
    '1544027993-37dbfe43562a'  // Holographic interface
  ];
  
  if (knownRelevantIds.includes(photoId)) {
    isRelevant = true;
  }
  
  return {
    url,
    relevant: isRelevant ? "Yes" : "Possibly not relevant - manual review recommended"
  };
}

// Main function
async function validateImages() {
  console.log('Starting image validation...');
  
  const rootDir = path.resolve(__dirname, '..');
  const appDir = path.join(rootDir, 'app');
  
  const results = {
    validImages: [],
    invalidImages: [],
    potentiallyIrrelevantImages: []
  };
  
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
  
  let allImageUrls = new Set();
  
  // Extract image URLs from all files
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const imageUrls = extractImageUrls(content);
    
    imageUrls.forEach(url => allImageUrls.add(url));
  }
  
  console.log(`Found ${allImageUrls.size} unique Unsplash image URLs`);
  
  // Check if each image exists and is relevant
  for (const url of allImageUrls) {
    const imageStatus = await checkImageExists(url);
    const relevanceCheck = await checkImageRelevance(url);
    
    if (imageStatus.exists) {
      results.validImages.push({
        url,
        status: imageStatus.status
      });
      
      if (relevanceCheck.relevant !== "Yes") {
        results.potentiallyIrrelevantImages.push({
          url,
          reason: relevanceCheck.relevant
        });
      }
    } else {
      results.invalidImages.push({
        url,
        status: imageStatus.status
      });
    }
  }
  
  // Print results
  console.log('\nResults:');
  console.log(`Valid images: ${results.validImages.length}`);
  console.log(`Invalid images: ${results.invalidImages.length}`);
  console.log(`Potentially irrelevant images: ${results.potentiallyIrrelevantImages.length}`);
  
  if (results.invalidImages.length > 0) {
    console.log('\nInvalid Images:');
    results.invalidImages.forEach(item => {
      console.log(`- ${item.url} (Status: ${item.status})`);
    });
  }
  
  if (results.potentiallyIrrelevantImages.length > 0) {
    console.log('\nPotentially Irrelevant Images:');
    results.potentiallyIrrelevantImages.forEach(item => {
      console.log(`- ${item.url}`);
      console.log(`  Reason: ${item.reason}`);
    });
  }
  
  return results;
}

// Run the validation
validateImages().then(results => {
  console.log('Image validation completed.');
  
  if (results.invalidImages.length === 0 && results.potentiallyIrrelevantImages.length === 0) {
    console.log('All images are valid and relevant to hologram/tech topics!');
  }
});
