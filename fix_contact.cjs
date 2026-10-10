const fs = require('fs');

let pagesTsx = fs.readFileSync('components/pages.tsx', 'utf8');

let startIndex = pagesTsx.indexOf('export function ContactPage');
if (startIndex !== -1) {
  let contactPageContent = pagesTsx.substring(startIndex);
  
  // Fix React syntax issues
  contactPageContent = contactPageContent.replace(/onclick=/g, 'onClick=');
  contactPageContent = contactPageContent.replace(/onsubmit=/g, 'onSubmit=');
  contactPageContent = contactPageContent.replace(/ for=/g, ' htmlFor=');
  
  // Replace the entire thing
  pagesTsx = pagesTsx.substring(0, startIndex) + contactPageContent;
  
  fs.writeFileSync('components/pages.tsx', pagesTsx);
  console.log('Fixed ContactPage React syntax');
} else {
  console.log('ContactPage not found');
}
