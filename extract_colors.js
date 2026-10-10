const fs = require('fs');

function extractColors(file) {
  const content = fs.readFileSync(file, 'utf8');
  const fills = new Set([...content.matchAll(/fill="(#[a-fA-F0-9]{3,6})"/g)].map(m => m[1].toLowerCase()));
  const strokes = new Set([...content.matchAll(/stroke="(#[a-fA-F0-9]{3,6})"/g)].map(m => m[1].toLowerCase()));
  console.log('Colors in', file);
  console.log('Fills:', Array.from(fills));
  console.log('Strokes:', Array.from(strokes));
}

extractColors('public/Technology.svg');
extractColors('public/webdev-animation.svg');
