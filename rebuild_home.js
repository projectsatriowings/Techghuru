const fs = require('fs');

let html = fs.readFileSync('stitch_design/code.html', 'utf8');

// Extract the main content
const mainMatch = html.match(/<main[^>]*>(.*?)<\/main>/s);
if (!mainMatch) {
  console.log('Main not found');
  process.exit(1);
}

let mainContent = mainMatch[1];

// Convert HTML to JSX
mainContent = mainContent.replace(/class=/g, 'className=');
mainContent = mainContent.replace(/<!--.*?-->/gs, '');

// Self-close tags
mainContent = mainContent.replace(/<img([^>]*)>/g, '<img$1/>');
mainContent = mainContent.replace(/<br([^>]*)>/g, '<br$1/>');
mainContent = mainContent.replace(/<input([^>]*)>/g, '<input$1/>');
mainContent = mainContent.replace(/<hr([^>]*)>/g, '<hr$1/>');
mainContent = mainContent.replace(/<path([^>]*)><\/path>/g, '<path$1/>'); // SVG paths
mainContent = mainContent.replace(/<svg([^>]*)>/g, (match) => {
  return match.replace(/viewbox=/g, 'viewBox=');
});

// Fix style tags
mainContent = mainContent.replace(/style="([^"]*)"/g, (match, p1) => {
  const rules = p1.split(';').filter(r => r.trim());
  const styleObj = {};
  for (let rule of rules) {
    let [key, val] = rule.split(':');
    if (!key || !val) continue;
    key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    styleObj[key] = val.trim();
  }
  return 'style={{' + Object.entries(styleObj).map(([k,v]) => k + ':"' + v + '"').join(',') + '}}';
});

// Remove <script> tags from inside mainContent
mainContent = mainContent.replace(/<script.*?>.*?<\/script>/gs, '');

const componentCode = `
export function HomePage() {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      ${mainContent}
    </main>
  );
}
`;

let pagesTsx = fs.readFileSync('components/pages.tsx', 'utf8');

if (pagesTsx.includes('export function HomePage')) {
  pagesTsx = pagesTsx.replace(/export function HomePage[^{]*\{.*?^\}/sm, componentCode);
} else {
  pagesTsx += '\n' + componentCode;
}

fs.writeFileSync('components/pages.tsx', pagesTsx);
console.log('Rebuilt HomePage successfully.');
