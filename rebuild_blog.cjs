const fs = require('fs');

let html = fs.readFileSync('stitch_tech_ghuru_digital_solutions_website/blog_tech_ghuru_digital_solutions/code.html', 'utf8');

const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/s);
if (!mainMatch) {
  console.log('Main not found');
  process.exit(1);
}

let mainContent = mainMatch[1];
mainContent = mainContent.replace(/class=/g, 'className=');
mainContent = mainContent.replace(/<!--.*?-->/gs, '');
mainContent = mainContent.replace(/<img([^>]*)>/g, '<img$1/>');
mainContent = mainContent.replace(/<br([^>]*)>/g, '<br$1/>');
mainContent = mainContent.replace(/<input([^>]*)>/g, '<input$1/>');
mainContent = mainContent.replace(/<hr([^>]*)>/g, '<hr$1/>');
mainContent = mainContent.replace(/<path([^>]*)><\/path>/g, '<path$1/>');
mainContent = mainContent.replace(/<svg([^>]*)>/g, (match) => {
  return match.replace(/viewbox=/g, 'viewBox=').replace(/stroke-linecap=/g, 'strokeLinecap=').replace(/stroke-linejoin=/g, 'strokeLinejoin=').replace(/stroke-width=/g, 'strokeWidth=').replace(/fill-opacity=/g, 'fillOpacity=').replace(/fill-rule=/g, 'fillRule=').replace(/clip-rule=/g, 'clipRule=');
});

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

// React handlers
mainContent = mainContent.replace(/onclick=/gi, 'onClick=');
mainContent = mainContent.replace(/onClick="[^"]*"/g, 'onClick={(e) => {}}');
mainContent = mainContent.replace(/onsubmit=/gi, 'onSubmit=');
mainContent = mainContent.replace(/onSubmit="[^"]*"/g, 'onSubmit={(e) => { e.preventDefault(); }}');
mainContent = mainContent.replace(/ for=/g, ' htmlFor=');
mainContent = mainContent.replace(/required=""/g, 'required={true}');
mainContent = mainContent.replace(/\/\/>/g, '/>');

mainContent = mainContent.replace(/<script.*?>.*?<\/script>/gs, '');

const componentCode = `
export function BlogPage() {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      ${mainContent}
    </main>
  );
}
`;

let pagesTsx = fs.readFileSync('components/pages.tsx', 'utf8');

if (pagesTsx.includes('export function BlogPage')) {
  pagesTsx = pagesTsx.replace(/export function BlogPage[^{]*\{.*?^\}/sm, componentCode);
} else {
  pagesTsx += '\n' + componentCode;
}

fs.writeFileSync('components/pages.tsx', pagesTsx);
console.log('Rebuilt BlogPage successfully.');
