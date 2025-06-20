#!/bin/bash

# Script to check and fix images in the Hologram website
# Usage: ./check-images.sh [--fix]

cd "$(dirname "$0")/.."
echo "========================================"
echo "🔍 Hologram Website Image Checker"
echo "========================================"
echo

if [[ "$1" == "--fix" ]]; then
  echo "🛠️  Running image validation and auto-fixing..."
  node scripts/fix-images.js
else
  echo "🔍 Running image validation only..."
  node scripts/validate-images.js
  echo
  echo "To fix issues automatically, run: ./scripts/check-images.sh --fix"
fi

echo
echo "========================================"
echo "Done!"
echo "========================================"
