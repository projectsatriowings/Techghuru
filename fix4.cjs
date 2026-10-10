const fs = require('fs');
let p = fs.readFileSync('components/pages.tsx', 'utf8');

p = p.replace(/<h1-display-xl[^>]*>/g, '<h1 className="font-display-xl text-display-xl">');
p = p.replace(/<\/h1-display-xl[^>]*>/g, '</h1>');

// Just in case I did it for anything else (h2, h3, h4)
p = p.replace(/<h[1-6]-[a-z\-]+[^>]*>/g, function(match) {
    if (match.startsWith('<h1-')) return '<h1 className="font-display-xl text-display-xl">';
    if (match.startsWith('<h2-')) return '<h2 className="font-headline-lg text-headline-lg">';
    if (match.startsWith('<h3-')) return '<h3 className="font-headline-md text-headline-md">';
    return match;
});

p = p.replace(/<\/h[1-6]-[a-z\-]+[^>]*>/g, function(match) {
    if (match.startsWith('</h1-')) return '</h1>';
    if (match.startsWith('</h2-')) return '</h2>';
    if (match.startsWith('</h3-')) return '</h3>';
    return match;
});

fs.writeFileSync('components/pages.tsx', p);
console.log('Fixed h1-display-xl and related tags');
