const fs = require('fs');
let pagesTsx = fs.readFileSync('components/pages.tsx', 'utf8');

// Replace all instances of `//>` with `/>`
pagesTsx = pagesTsx.replace(/\/\/>/g, '/>');

fs.writeFileSync('components/pages.tsx', pagesTsx);
console.log('Fixed double slash tags');
