const fs = require('fs');
let code = fs.readFileSync('components/pages.tsx', 'utf8');

const injection = \
const blogInfo: Record<string, string[]> = Object.fromEntries(articles.map(a => [a[3], [a[0], a[1], ""]]));
\;

code = code.replace(/function BlogPost\(\{slug\}: \{slug: string\}\)\{/, injection + '\nfunction BlogPost({slug}: {slug: string}){');

fs.writeFileSync('components/pages.tsx', code);
console.log('Injected blogInfo');
