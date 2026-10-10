const fs = require('fs');

let pagesTsx = fs.readFileSync('components/pages.tsx', 'utf8');

let startIndex = pagesTsx.indexOf('export function ContactPage');
if (startIndex !== -1) {
  let contactPageContent = pagesTsx.substring(startIndex);
  
  // Fix React syntax issues
  contactPageContent = contactPageContent.replace(/onClick="[^"]*"/g, 'onClick={(e) => {}}');
  contactPageContent = contactPageContent.replace(/onSubmit="[^"]*"/g, 'onSubmit={(e) => { e.preventDefault(); document.getElementById("formSuccess")?.classList.remove("hidden"); }}');
  
  // Replace the entire thing
  pagesTsx = pagesTsx.substring(0, startIndex) + contactPageContent;
  
  fs.writeFileSync('components/pages.tsx', pagesTsx);
  console.log('Fixed ContactPage React handlers');
} else {
  console.log('ContactPage not found');
}
