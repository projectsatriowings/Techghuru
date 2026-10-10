const fs = require('fs');
let pagesTsx = fs.readFileSync('components/pages.tsx', 'utf8');

// Fix required="" -> required={true}
pagesTsx = pagesTsx.replace(/required=""/g, 'required={true}');

// Fix duplicate HomePage. Keep the last one, remove the first one if it exists.
// Actually, let's just remove the first one.
let homePageMatches = [...pagesTsx.matchAll(/export function HomePage\(\) \{/g)];
if (homePageMatches.length > 1) {
  let firstMatchIdx = homePageMatches[0].index;
  let nextExportIdx = pagesTsx.indexOf('export function', firstMatchIdx + 10);
  if (nextExportIdx !== -1) {
    pagesTsx = pagesTsx.substring(0, firstMatchIdx) + pagesTsx.substring(nextExportIdx);
  }
}

fs.writeFileSync('components/pages.tsx', pagesTsx);
console.log('Fixed pages.tsx duplicate HomePage and required attributes');
