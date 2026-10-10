const fs = require('fs');

let code = fs.readFileSync('components/pages.tsx', 'utf8');

const newServices = `const services = [
  {
    id: "01",
    eyebrow: "MOBILE SYSTEMS",
    title: "App Designing & Developing",
    desc: "Native iOS & Android, Flutter, React Native, human-centered UI/UX and high-performance mobile apps built for seamless gesture flow and instant synchronization.",
    features: [
      "Native Swift & Kotlin Core",
      "Multiplatform React Native / Flutter",
      "Micro-interactions & Zero-lag UIs"
    ],
    icon: "smartphone",
    slug: "app-development"
  },
  {
    id: "02",
    eyebrow: "WEB ARCHITECTURE",
    title: "Web Development",
    desc: "Dynamic & static websites driven by Next.js, React, robust backends, headless CMS, and ultra-fast dynamic web portals delivering top-percentile Core Web Vitals.",
    features: [
      "SSR & Static Next.js Engines",
      "Headless CMS Architecture",
      "Sub-second Global Edge Delivery"
    ],
    icon: "web",
    slug: "web-development"
  },
  {
    id: "03",
    eyebrow: "ENTERPRISE CORE",
    title: "Software Development",
    desc: "Custom enterprise ERPs, cloud-native SaaS platforms, high-throughput API integrations, and bespoke automation software that eliminate manual overheads.",
    features: [
      "Scalable SaaS Multi-tenancy",
      "Enterprise ERP & CRM Modules",
      "Automated Event-Driven Pipelines"
    ],
    icon: "code",
    slug: "software-development"
  },
  {
    id: "04",
    eyebrow: "VISUAL IDENTITY",
    title: "Graphic Designing",
    desc: "Brand design systems, geometric vector illustrations, marketing collateral, pitch decks, and visual guidelines structured for timeless digital coherence.",
    features: [
      "Comprehensive Design Systems",
      "High-Impact Executive Pitch Decks",
      "Scalable Vector Asset Libraries"
    ],
    icon: "palette",
    slug: "graphic-designing"
  },
  {
    id: "05",
    eyebrow: "SOCIAL ECOSYSTEMS",
    title: "Social Media Management",
    desc: "Content calendars, active audience engagement, data-backed viral campaign strategies, and loyal community building across enterprise-relevant channels.",
    features: [
      "Multi-Channel Editorial Calendars",
      "Audience Growth & Moderation",
      "Sentiment & Reach Analytics"
    ],
    icon: "share",
    slug: "social-media-management"
  },
  {
    id: "06",
    eyebrow: "STRATEGIC EDITORIAL",
    title: "Content Writing",
    desc: "SEO-optimized blog posts, rigorous technical copywriting, conversion-focused landing page copy, and authoritative industry whitepapers that establish authority.",
    features: [
      "B2B Technical Whitepapers",
      "Semantic Search Optimized Articles",
      "High-Conversion Sales Copy"
    ],
    icon: "article",
    slug: "content-writing"
  },
  {
    id: "07",
    eyebrow: "GROWTH & ACQUISITION",
    title: "Digital Marketing & SEO",
    desc: "Organic search dominance, comprehensive technical SEO audits, Google Ads, targeted PPC campaigns designed for measurable multi-channel ROAS.",
    features: [
      "Technical & Semantic SEO",
      "Performance-driven PPC & Ads",
      "Multi-Channel Campaign Attribution"
    ],
    icon: "trending_up",
    slug: "digital-marketing"
  },
  {
    id: "08",
    eyebrow: "MARKET POSITIONING",
    title: "Branding & Promotion",
    desc: "End-to-end corporate identity, unique brand voice, definitive positioning, market launch campaigns, and creative strategies that make you undeniable.",
    features: [
      "Corporate Identity Frameworks",
      "Voice & Tone Archetyping",
      "Go-to-Market Launch Strategies"
    ],
    icon: "campaign",
    slug: "branding"
  },
  {
    id: "09",
    eyebrow: "VISUAL PRODUCTION",
    title: "Video Ads & Photography",
    desc: "High-definition motion graphics, commercial video productions, photorealistic 3D product renders, and cinematic brand stories that captivate.",
    features: [
      "Commercial Video Production",
      "Photorealistic 3D Rendering",
      "Motion Graphics & Animation"
    ],
    icon: "videocam",
    slug: "video-ads"
  }
];`;

const servicesPattern = /const services = \[\s*\["01",[\s\S]*?\];\n/;
code = code.replace(servicesPattern, newServices + '\n');

const newServicesGrid = `function ServicesGrid(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
      {services.map((s, i) => (
        <Reveal key={s.id} delay={(i % 3) * 50}>
          <Link href={\`/services/\${s.slug}\`} className="group relative flex flex-col w-full p-8 rounded-3xl bg-surface-container-lowest shadow-sm hover:shadow-xl border border-outline-variant/30 transition-all duration-500 hover:-translate-y-1 h-full">
             <div className="w-14 h-14 rounded-full bg-primary-container/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500 mb-8 shrink-0">
               <span className="material-symbols-outlined text-[24px]">{s.icon}</span>
             </div>
             <div className="flex flex-col flex-1">
               <div className="font-label-sm text-[11px] font-bold tracking-wider uppercase text-primary mb-2">
                 {s.id} / {s.eyebrow}
               </div>
               <h3 className="font-headline-sm text-[22px] font-bold text-on-surface mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                 {s.title}
               </h3>
               <p className="font-body-md text-[14px] leading-relaxed text-on-surface-variant mb-6 flex-1 min-h-[80px]">
                 {s.desc}
               </p>
               <ul className="space-y-3 mb-8">
                 {s.features.map(f => (
                   <li key={f} className="flex items-start gap-2.5 font-body-sm text-[13px] text-on-surface-variant">
                     <span className="material-symbols-outlined text-primary text-[16px] mt-0.5">check_circle</span>
                     <span>{f}</span>
                   </li>
                 ))}
               </ul>
               <div className="mt-auto pt-6 border-t border-outline-variant/30 font-label-md text-[14px] font-semibold text-primary flex items-center gap-1.5 group-hover:translate-x-1 transition-transform duration-300">
                 Explore Service <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
               </div>
             </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}`;

const gridPattern = /function ServicesGrid\(\)\{[\s\S]*?\}\s*\}\s*function/;
code = code.replace(gridPattern, newServicesGrid + '\nfunction');

const newServiceInfo = `const serviceInfo: Record<string, any> = {};
services.forEach(s => {
  serviceInfo[s.slug] = {
    title: s.title,
    name: s.title,
    headline: "Transformative " + s.title + " Built for Growth",
    overview: s.desc,
    services: [
      {title: "Strategy", desc: "Custom roadmap"},
      {title: "Execution", desc: "Expert delivery"}
    ],
    features: s.features.map(f => [f, "Details"]),
    workflow: ["Discovery", "Execution", "Launch"],
    metrics: [{label: "Growth", value: "2x"}],
    trendingFeatures: ["AI", "Cloud"],
    technologies: ["React", "Next.js"],
    pills: ["Scalable", "Secure"]
  };
});`;

const infoPattern = /const serviceInfo: Record<string, any> = \{\};\s*services\.forEach\(s => \{[\s\S]*?\}\);/;
code = code.replace(infoPattern, newServiceInfo);

const newRouteServices = `if(key==="services") return (
  <>
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden relative bg-surface-container-lowest">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-primary-container/10 rounded-full blur-3xl -z-10"></div>
      <div className="max-w-[1280px] mx-auto px-gutter text-center space-y-6 relative z-10">
        <h1 className="font-headline-lg text-4xl md:text-5xl lg:text-[56px] font-bold text-on-surface tracking-tight leading-[1.15] text-balance mx-auto">
          Our Services — Custom IT Solutions for<br/>Your Successful Business
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
          Our 360-degree digital expertise blends human-centered architectural engineering, conversion-focused creative intelligence, and resilient enterprise cloud solutions tailored for aggressive, compounding growth.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 font-label-md text-label-md font-semibold text-on-surface">
          <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> 99.98% SLA Guaranteed</span>
          <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
          <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-primary text-[18px]">hub</span> Full Spectrum Stack</span>
          <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
          <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-primary text-[18px]">security</span> Enterprise Scalability</span>
        </div>
      </div>
    </section>

    <section className="py-24 relative z-10 bg-surface">
      <div className="max-w-[1280px] mx-auto px-gutter">
        <ServicesGrid />
      </div>
    </section>
    
    <section className="py-16 relative z-10 bg-surface">
      <div className="max-w-[1280px] mx-auto px-gutter">
        <div className="bg-[#4a2411] text-white rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 blur-3xl rounded-full -z-0"></div>
          <div className="w-full md:w-2/3 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 font-label-sm text-[11px] font-bold tracking-widest uppercase border border-white/20">
              <span className="material-symbols-outlined text-[14px]">rocket_launch</span> READY FOR ELEVATION
            </div>
            <h2 className="font-headline-lg text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-balance">
              Have a Custom Project in Mind?<br/>Let's engineer your digital<br/>roadmap together.
            </h2>
            <p className="font-body-md text-lg text-white/80 max-w-xl">
              From technical discovery through sprint-zero deployment, our seasoned engineering and growth directors partner directly with your internal leadership.
            </p>
          </div>
          <div className="w-full md:w-auto relative z-10 flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-label-lg font-bold transition-colors whitespace-nowrap text-center">
              Request Free Consultation
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-label-lg font-bold transition-colors whitespace-nowrap text-center">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>;`;

const routeServicesPattern = /if\(key==="services"\)return\s*<><PageHero[\s\S]*?<CTA\/><\/>;/;
code = code.replace(routeServicesPattern, newRouteServices);

fs.writeFileSync('components/pages.tsx', code);
console.log('Successfully rebuilt Services page and ServicesGrid');
