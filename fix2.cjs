const fs = require('fs');
let p = fs.readFileSync('components/pages.tsx', 'utf8');
p = p.replace(/<h3-headline-md text-headline-md>/g, '<h3 className="font-headline-md text-headline-md">');
p = p.replace(/<h2-headline-lg text-headline-lg>/g, '<h2 className="font-headline-lg text-headline-lg">');
p = p.replace(/<\/h3-headline-md text-headline-md>/g, '</h3>');
p = p.replace(/<\/h2-headline-lg text-headline-lg>/g, '</h2>');

// I also see from the error there is a missing `}`. Let's see if there is any other comment.
p = p.replace(/\/\/\s*Step 01: Discover<\/div>/g, '{/* Step 01: Discover */}</div>');

fs.writeFileSync('components/pages.tsx', p);
console.log('Fixed syntax tags');
