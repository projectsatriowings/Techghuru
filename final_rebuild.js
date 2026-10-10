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
mainContent = mainContent.replace(/<path([^>]*)><\/path>/g, '<path$1/>');
mainContent = mainContent.replace(/<svg([^>]*)>/g, (match) => {
  return match.replace(/viewbox=/g, 'viewBox=').replace(/stroke-linecap=/g, 'strokeLinecap=').replace(/stroke-linejoin=/g, 'strokeLinejoin=').replace(/stroke-width=/g, 'strokeWidth=').replace(/fill-opacity=/g, 'fillOpacity=');
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

// Fix inline { and }
mainContent = mainContent.replace(/initializeMesh<\/span>\(\{<\/p>/g, 'initializeMesh</span>({"{{"}}</p>');
mainContent = mainContent.replace(/<p>\}\);<\/p>/g, '<p>{"});"}</p>');
mainContent = mainContent.replace(/>99\.98%</g, '>{"99.98%"}<');
mainContent = mainContent.replace(/>6\+ Years</g, '>{"6+ Years"}<');

// Replace Hero Right Column block
mainContent = mainContent.replace(
  /<div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">.*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/s,
  `<div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center"><img src="/Technology.svg" alt="Tech Ghuru Cloud Architecture" className="w-full h-auto drop-shadow-2xl" /></div></div></section>`
);

// Replace About Us Snapshot image
mainContent = mainContent.replace(
  /<img className="w-full h-\[480px\] object-cover" data-alt="A modern collaborative engineering team[^>]*\/>/s,
  `<img src="/webdev-animation.svg" alt="Web Development" className="w-full h-[480px] object-cover drop-shadow-xl" />`
);

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

// Overwrite the existing HomePage or append it
if (pagesTsx.includes('export function HomePage')) {
  pagesTsx = pagesTsx.replace(/export function HomePage[^{]*\{.*?^\}/sm, componentCode);
} else {
  pagesTsx += '\n' + componentCode;
}

fs.writeFileSync('components/pages.tsx', pagesTsx);
console.log('Rebuilt HomePage successfully.');
