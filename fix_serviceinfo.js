const fs = require('fs');
let code = fs.readFileSync('components/pages.tsx', 'utf8');

const injection = \
const serviceInfo: Record<string, any> = {};
services.forEach(s => {
  serviceInfo[s[4].split('/').pop()] = {
    title: s[1],
    headline: "Transformative " + s[1] + " Built for Growth",
    overview: s[2],
    services: [
      {title: "Strategy", desc: "Custom roadmap"},
      {title: "Execution", desc: "Expert delivery"}
    ],
    features: [
      {title: "Feature 1", desc: "Details", icon: "star"}
    ]
  };
});
\;

code = code.replace(/export function RoutePage/, injection + '\nexport function RoutePage');

fs.writeFileSync('components/pages.tsx', code);
console.log('Injected serviceInfo');
