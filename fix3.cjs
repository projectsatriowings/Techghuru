const fs = require('fs');
let p = fs.readFileSync('components/pages.tsx', 'utf8');

p = p.replace(/\/\/\s*@ts-ignore/g, '/* @ts-ignore */');

fs.writeFileSync('components/pages.tsx', p);
console.log('Fixed ts-ignore comment');
