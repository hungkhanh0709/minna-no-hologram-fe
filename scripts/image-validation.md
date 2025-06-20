# Hologram Website Image Validation

This document provides information about the image validation system implemented for the hologram website.

## Overview

The website uses Unsplash images for visual content. To ensure the reliability and relevance of these images, we've implemented two validation tools:

1. **Image Validator** (`validate-images.js`) - Checks if all Unsplash images exist and are relevant to hologram/technology themes
2. **Image Fixer** (`fix-images.js`) - Validates images and automatically replaces any problematic ones with verified alternatives
3. **Convenience Script** (`check-images.sh`) - Provides an easy CLI to run either tool

## Verified Image Categories

All images used in the website are categorized into one of three thematic groups:

- **hologram** - Direct hologram technology, projections, and 3D visualizations
- **tech** - Digital interfaces, futuristic displays, and technology concepts
- **science** - Scientific visualizations, quantum computing, and physics concepts

## How to Use the Tools

### Validating Images

To check if all images in the codebase are valid and topically relevant:

```bash
./scripts/check-images.sh
```

### Fixing Images

To automatically replace any broken or irrelevant images:

```bash
./scripts/check-images.sh --fix
```

### Direct Script Usage

You can also run the scripts directly:

```bash
node scripts/validate-images.js  # Validation only
node scripts/fix-images.js       # Validation and fixing
```

## How the Tools Work

1. **Image Extraction** - Both tools scan all `.tsx` files in the app directory and extract Unsplash image URLs using regex
2. **Validation** - Each URL is checked via an HTTP request to confirm it exists and returns a 200 status code
3. **Relevance Check** - Images are checked for relevance to hologram/tech topics using a combination of URL analysis and a pre-verified list
4. **Replacement** (fixer only) - Problematic images are replaced with verified alternatives that match the appropriate category

## Verified Image List

The `fix-images.js` tool contains a curated list of high-quality, hologram-related Unsplash images that have been:

1. Manually verified to exist
2. Confirmed to be relevant to the hologram/tech theme
3. Categorized by appropriate subtopic
4. Given descriptive labels

When replacement is needed, the tool selects an appropriate image based on the context of where it's being used (e.g., history page gets history-related images).

## Best Practices

When adding new images to the website:

1. Use only Unsplash images with stable URLs
2. Verify the image exists and is related to hologram technology
3. Include proper dimensions in the URL query parameters (e.g., `?auto=format&fit=crop&w=400&h=240`)
4. Run the validation tools after making changes

## Troubleshooting

If you encounter issues with images not displaying:

1. Run `./scripts/check-images.sh` to identify problematic images
2. Use `./scripts/check-images.sh --fix` to automatically resolve issues
3. Restart the Next.js server to apply changes

## Contact

For questions about the image validation system, contact the development team.
