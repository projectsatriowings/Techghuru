const fs = require('fs');
let code = fs.readFileSync('components/pages.tsx', 'utf8');
code = code.replace(/<br\/\/>/g, '<br/>');
code = code.replace(/\/\/>/g, '/>');
fs.writeFileSync('components/pages.tsx', code);
console.log('Fixed double slashes');
