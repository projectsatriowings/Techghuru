const fs = require('fs');

let code = fs.readFileSync('components/pages.tsx', 'utf8');

// There are TWO "CareersPage" functions and maybe some dangling code.
// Let's find the FIRST occurrence of `export function CareersPage() {`
const firstCareersIndex = code.indexOf('export function CareersPage() {');
if (firstCareersIndex !== -1) {
  // Truncate the file at this point
  code = code.slice(0, firstCareersIndex);
}

// Now append the new jobs data and CareersPage
const newCareersPage = `
const jobs = [
  {
    id: "frontend-dev",
    title: "Frontend Developer",
    department: "Engineering",
    experience: "1-3 Yrs Exp",
    type: "Full-time - Remote / Hybrid",
    description: "Build fast, responsive and scalable web applications for Tech Ghuru clients using React.js, Next.js and modern JavaScript technologies.",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind", "REST APIs"],
    salary: "Competitive / yr"
  },
  {
    id: "backend-dev",
    title: "Backend Developer",
    department: "Engineering",
    experience: "2-4 Yrs Exp",
    type: "Full-time - Remote / Hybrid",
    description: "Design and build robust REST APIs, server-side logic and database integrations using Node.js, Express and PostgreSQL for client projects.",
    skills: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "JWT", "SQL Optimization"],
    salary: "Competitive / yr"
  },
  {
    id: "video-editor",
    title: "Video Editor & Motion Designer",
    department: "Product Design",
    experience: "1-3 Yrs Exp",
    type: "Full-time - On-site",
    description: "Create eye-catching video ads, reels and promotional content for clients using Premiere Pro, After Effects and DaVinci Resolve.",
    skills: ["Premiere Pro", "After Effects", "Motion Graphics", "Color Grading", "Sound Design"],
    salary: "Competitive / yr"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Executive",
    department: "Growth",
    experience: "1-2 Yrs Exp",
    type: "Full-time - Remote / Hybrid",
    description: "Plan and execute result-driven digital marketing campaigns including SEO, SEM, social media and paid ads to grow client brand presence.",
    skills: ["Meta Ads", "Google Ads", "SMM", "Copywriting", "GA4", "Content Strategy"],
    salary: "Competitive / yr"
  },
  {
    id: "content-writer",
    title: "Content Writer",
    department: "Growth",
    experience: "1-2 Yrs Exp",
    type: "Full-time - Remote",
    description: "Craft compelling blog posts, website copy, social media content and marketing materials for diverse Tech Ghuru client industries.",
    skills: ["Content Writing", "SEO Copywriting", "Proofreading", "Research"],
    salary: "Competitive / yr"
  },
  {
    id: "bde",
    title: "Business Development Executive",
    department: "Sales",
    experience: "1-3 Yrs Exp",
    type: "Full-time - On-site",
    description: "Identify and onboard new clients, manage consultations and build long-term relationships to grow Tech Ghuru portfolio.",
    skills: ["B2B Sales", "Client Consulting", "Negotiation", "CRM Management", "Service Scoping"],
    salary: "Competitive / yr"
  }
];

export function CareersPage() {
  const [selectedJob, setSelectedJob] = React.useState<any>(null);
  const [activeFilter, setActiveFilter] = React.useState("All Roles");
  
  const filters = ["All Roles", "Engineering", "Product Design", "Growth", "Sales"];
  
  const filteredJobs = activeFilter === "All Roles" 
    ? jobs 
    : jobs.filter(j => j.department === activeFilter);

  return (
    <main className="w-full bg-[#fdfcf7] min-h-screen pb-24 font-['Inter',sans-serif]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Soft Background Gradient Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#fff3ec] rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#fff3ec] rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fff0e6] text-[#eb5d1e] text-[11px] font-bold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#eb5d1e]"></span>
            JOIN OUR ENGINEERING EXPEDITION
          </div>
          
          <h1 className="text-[44px] md:text-[56px] lg:text-[72px] font-extrabold text-[#1a1a1a] tracking-tight leading-[1.05] max-w-4xl mx-auto font-sans">
            Shape the Future of Enterprise Tech — Build With <span className="text-[#eb5d1e] relative inline-block">Tech Ghuru
            <svg className="absolute -bottom-3 left-0 w-full text-[#eb5d1e]/40 h-[12px]" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,10 Q10,0 20,10 T40,10 T60,10 T80,10 T100,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg>
            </span>
          </h1>
          
          <p className="text-[17px] md:text-[19px] text-[#555] max-w-3xl mx-auto leading-relaxed">
            We are assembling world-class architects, product designers, and growth engineers to craft mission-critical digital systems for trailblazing global enterprises.
          </p>

          {/* Stats Pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto">
             <div className="bg-white py-5 px-6 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center border border-[#f0f0f0]">
               <strong className="text-[28px] font-extrabold text-[#eb5d1e] mb-1">50+</strong>
               <span className="text-[13px] text-[#666] font-medium">Team Members</span>
             </div>
             <div className="bg-white py-5 px-6 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center border border-[#f0f0f0]">
               <strong className="text-[28px] font-extrabold text-[#eb5d1e] mb-1">25+</strong>
               <span className="text-[13px] text-[#666] font-medium">Projects Delivered</span>
             </div>
             <div className="bg-white py-5 px-6 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center border border-[#f0f0f0]">
               <strong className="text-[28px] font-extrabold text-[#eb5d1e] mb-1">5+</strong>
               <span className="text-[13px] text-[#666] font-medium">Countries Served</span>
             </div>
             <div className="bg-white py-5 px-6 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center border border-[#f0f0f0]">
               <strong className="text-[28px] font-extrabold text-[#eb5d1e] mb-1">100%</strong>
               <span className="text-[13px] text-[#666] font-medium">Passion & Dedication</span>
             </div>
          </div>
          
          {/* Images Row */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 mt-16 max-w-6xl mx-auto text-left">
             <div className="rounded-[32px] overflow-hidden relative h-[380px] shadow-lg group">
                <img src="/blog-web-developing.jpg" alt="Collaboration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <span className="bg-[#eb5d1e] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md mb-3 inline-block">COLLABORATION SPACES</span>
                  <h3 className="text-white font-bold text-2xl max-w-[300px] leading-tight">Autonomous squads tackling multi-region scale</h3>
                </div>
             </div>
             <div className="flex flex-col gap-6 h-[380px]">
               <div className="rounded-[32px] overflow-hidden relative flex-1 shadow-lg group">
                  <img src="/blog-product-design.jpg" alt="Focus" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white font-bold text-lg">Asynchronous flow & uninterrupted focus</h3>
                  </div>
               </div>
               <div className="bg-[#f2f0e6] rounded-[32px] p-8 flex flex-col justify-center relative">
                 <div className="flex justify-between items-center mb-4 text-[11px] font-bold uppercase tracking-wider">
                   <span className="text-[#666]">TEAM PULSE</span>
                   <span className="text-[#eb5d1e] flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#eb5d1e]"></span> 98% Retention</span>
                 </div>
                 <p className="text-[#1a1a1a] italic text-[15px] leading-relaxed font-medium">
                   "Here, engineering solutions are judged strictly on technical rigor and real user impact, not corporate theatrics."
                 </p>
                 <p className="text-[#666] text-xs font-bold mt-4">— Principal Cloud Architect</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-24 max-w-[1200px] mx-auto px-6 lg:px-8">
         <div className="flex flex-col md:flex-row md:justify-between items-end mb-16 gap-8">
            <div>
              <div className="text-[#eb5d1e] text-[11px] font-bold uppercase tracking-widest mb-3">THE TECH GHURU CREED</div>
              <h2 className="text-[36px] md:text-[42px] font-extrabold text-[#1a1a1a] tracking-tight">Our Foundational Principles</h2>
            </div>
            <p className="text-[#555] text-[16px] max-w-md leading-relaxed">
              We don't build software via top-down dictates. We foster high-density talent communities where great ideas outshine hierarchy.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {icon: "hub", title: "Radical Engineering Autonomy", desc: "Ownership over architectural decisions, zero micromanagement, and empowered cross-functional squads with direct client impact.", label: "Decentralized Execution"},
              {icon: "school", title: "Continuous Mastery & Upskilling", desc: "$2,500/year personal learning stipend, fully sponsored cloud certs (AWS/GCP), and fully covered global conference trips.", label: "Never Stop Leveling Up"},
              {icon: "all_inclusive", title: "Real Work-Life Harmony", desc: "Async-first communication, core collaborating hours flexibility, and company-wide quarterly wellness recharge pauses.", label: "Burnout Is Never a KPI"},
              {icon: "candlestick_chart", title: "Transparent Progression & Equity", desc: "Public internal compensation bands, predictable biannual performance rubrics, and meaningful ESOP pool allocations for key roles.", label: "Shared Company Upside"}
            ].map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#f0f0f0] flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
                 <div className="w-12 h-12 bg-[#fff0e6] rounded-[14px] flex items-center justify-center mb-6">
                   <span className="material-symbols-outlined text-[#eb5d1e] text-[22px]">{p.icon}</span>
                 </div>
                 <h3 className="font-bold text-[19px] text-[#1a1a1a] leading-snug mb-3">{p.title}</h3>
                 <p className="text-[#666] text-[14px] leading-relaxed flex-1">{p.desc}</p>
                 <div className="mt-8 pt-4 border-t border-[#f0f0f0] flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-[#eb5d1e]"></span>
                   <span className="text-[#eb5d1e] text-[11px] font-bold uppercase tracking-wider">{p.label}</span>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#fdfcf7]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-[#eb5d1e] text-[11px] font-bold uppercase tracking-widest mb-3">REWARDS DESIGNED FOR PEAK IMPACT</div>
            <h2 className="text-[36px] md:text-[42px] font-extrabold text-[#1a1a1a] tracking-tight">Enterprise-Class Benefits</h2>
            <p className="text-[#555] text-[16px] max-w-2xl mx-auto mt-4 leading-relaxed">We treat our technical talent as high-performance athletes—equipping you with every tool, protection, and comfort to thrive.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {icon: "health_and_safety", title: "Comprehensive Healthcare", desc: "₹10,00,000 baseline cover for you and dependents with 100% cashless claims, mental health tele-therapy, and dental coverage.", bg: "bg-[#eb5d1e]"},
              {icon: "laptop_mac", title: "Top-Tier Hardware", desc: "Brand-new Apple M3 Max MacBook Pro (36GB RAM) or custom high-spec Linux machine plus dual 4K monitor allowances.", bg: "bg-[#1a1a1a]"},
              {icon: "flight_takeoff", title: "Annual Global Retreats", desc: "All-expenses-paid quarterly team summits and an annual worldwide offsite (past spots: Goa, Bali, and Dubai).", bg: "bg-[#eb5d1e]"},
              {icon: "beach_access", title: "Unlimited Paid Time Off", desc: "Guaranteed minimum 25 annual recharge days, 16 weeks fully paid parental leave, and generous compassionate absence.", bg: "bg-[#1a1a1a]"},
              {icon: "desk", title: "Home Office Setup Grant", desc: "₹75,000 one-time stipend for ergonomic chair (Herman Miller / Steelcase), motorized standing desk, and noise-cancelling gear.", bg: "bg-[#eb5d1e]"},
              {icon: "self_improvement", title: "Wellness Reimbursement", desc: "₹5,000 monthly flexible health card for local gym passes, yoga studios, mental health apps, or sports club memberships.", bg: "bg-[#1a1a1a]"}
            ].map((b, i) => (
              <div key={i} className="bg-[#f8f6f0] p-8 rounded-[24px] flex items-start gap-5 hover:bg-[#f2efe6] transition-colors cursor-default">
                 <div className={\`w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0 \${b.bg}\`}>
                   <span className="material-symbols-outlined text-white text-[22px]">{b.icon}</span>
                 </div>
                 <div>
                   <h3 className="font-bold text-[17px] text-[#1a1a1a] mb-2">{b.title}</h3>
                   <p className="text-[#666] text-[14px] leading-relaxed">{b.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-24 max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-[#eaeaea] pb-6">
            <div>
              <div className="text-[#eb5d1e] text-[11px] font-bold uppercase tracking-widest mb-3">CURRENT ACTIVE EXPEDITIONS</div>
              <h2 className="text-[36px] md:text-[46px] font-extrabold text-[#1a1a1a] tracking-tight">Open Positions</h2>
            </div>
            <p className="text-[#666] text-[15px] font-medium mb-2">Showing <strong className="text-[#eb5d1e]">{filteredJobs.length}</strong> opportunities worldwide</p>
          </div>

          <div className="bg-white p-2 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#f0f0f0] inline-flex overflow-x-auto mb-10 max-w-full no-scrollbar">
             {filters.map(f => (
               <button 
                 key={f}
                 onClick={() => setActiveFilter(f)}
                 className={\`px-6 py-3 rounded-full text-[14px] font-bold whitespace-nowrap transition-all \${activeFilter === f ? 'bg-[#eb5d1e] text-white shadow-md' : 'bg-transparent text-[#666] hover:bg-[#f8f6f0] hover:text-[#1a1a1a]'}\`}
               >
                 {f} {f === "All Roles" && \`(\${jobs.length})\`}
               </button>
             ))}
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-[24px] p-8 border border-[#f0f0f0] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#eb5d1e]/30 transition-all duration-300 relative group">
                 <div className="flex flex-col md:flex-row justify-between gap-8">
                   <div className="flex-1">
                     <div className="flex flex-wrap gap-2 mb-5">
                       <span className="text-[11px] font-bold text-[#eb5d1e] bg-[#fff0e6] px-3 py-1.5 rounded-full">{job.department}</span>
                       <span className="text-[11px] font-bold text-[#555] bg-[#f0f0f0] px-3 py-1.5 rounded-full">{job.type}</span>
                       <span className="text-[11px] font-bold text-[#555] bg-[#f0f0f0] px-3 py-1.5 rounded-full">{job.experience}</span>
                     </div>
                     <h3 className="text-[24px] md:text-[28px] font-extrabold text-[#1a1a1a] mb-3 tracking-tight group-hover:text-[#eb5d1e] transition-colors">{job.title}</h3>
                     <p className="text-[15px] text-[#666] leading-relaxed mb-8 max-w-3xl">{job.description}</p>
                     <div className="flex items-center gap-2 flex-wrap">
                       <span className="text-[11px] font-bold text-[#888] tracking-widest mr-2 uppercase">CORE STACK:</span>
                       {job.skills.map(skill => (
                         <span key={skill} className="text-[12px] font-semibold bg-[#f8f6f0] text-[#444] px-3 py-1.5 rounded-md border border-[#eaeaea]">{skill}</span>
                       ))}
                     </div>
                   </div>
                   <div className="flex flex-col items-start md:items-end justify-start gap-4 pt-2">
                     <div className="bg-[#fff0e6] text-[#cc4910] font-extrabold text-[15px] px-5 py-2.5 rounded-full whitespace-nowrap tracking-wide">
                       {job.salary}
                     </div>
                     <button onClick={() => setSelectedJob(job)} className="px-8 py-3.5 bg-[#eb5d1e] text-white font-bold text-[15px] rounded-[12px] shadow-[0_4px_15px_rgba(235,93,30,0.3)] hover:bg-[#d64d14] hover:-translate-y-0.5 transition-all whitespace-nowrap w-full md:w-auto">
                       View & Apply
                     </button>
                   </div>
                 </div>
              </div>
            ))}
          </div>
      </section>

      {/* Application Form Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1a1a1a]/80 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-[32px] w-full max-w-[800px] shadow-2xl relative my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <button onClick={() => setSelectedJob(null)} className="absolute top-6 right-6 w-10 h-10 bg-[#f0f0f0] rounded-full flex items-center justify-center text-[#555] hover:bg-[#e0e0e0] transition-colors z-10">
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="p-8 md:p-12">
               <div className="mb-10">
                 <span className="text-[11px] font-bold text-[#eb5d1e] uppercase tracking-widest mb-2 block">APPLYING FOR</span>
                 <h2 className="text-[32px] font-extrabold text-[#1a1a1a] tracking-tight">{selectedJob.title}</h2>
               </div>
               <form className="space-y-6" id="apply-now" onSubmit={(e) => { e.preventDefault(); alert('Application Submitted!'); setSelectedJob(null); }}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                     <label className="block text-[13px] font-bold text-[#1a1a1a] mb-2 uppercase tracking-wide">Full Name *</label>
                     <input type="text" required className="w-full bg-[#fdfcf7] border border-[#eaeaea] rounded-[12px] px-5 py-3.5 text-[#1a1a1a] font-medium focus:outline-none focus:border-[#eb5d1e] focus:ring-1 focus:ring-[#eb5d1e] transition-all" placeholder="John Doe" />
                   </div>
                   <div>
                     <label className="block text-[13px] font-bold text-[#1a1a1a] mb-2 uppercase tracking-wide">Email Address *</label>
                     <input type="email" required className="w-full bg-[#fdfcf7] border border-[#eaeaea] rounded-[12px] px-5 py-3.5 text-[#1a1a1a] font-medium focus:outline-none focus:border-[#eb5d1e] focus:ring-1 focus:ring-[#eb5d1e] transition-all" placeholder="john@example.com" />
                   </div>
                   <div>
                     <label className="block text-[13px] font-bold text-[#1a1a1a] mb-2 uppercase tracking-wide">Phone Number *</label>
                     <input type="tel" required className="w-full bg-[#fdfcf7] border border-[#eaeaea] rounded-[12px] px-5 py-3.5 text-[#1a1a1a] font-medium focus:outline-none focus:border-[#eb5d1e] focus:ring-1 focus:ring-[#eb5d1e] transition-all" placeholder="+1 234 567 890" />
                   </div>
                   <div>
                     <label className="block text-[13px] font-bold text-[#1a1a1a] mb-2 uppercase tracking-wide">Years of Experience *</label>
                     <select required className="w-full bg-[#fdfcf7] border border-[#eaeaea] rounded-[12px] px-5 py-3.5 text-[#1a1a1a] font-medium focus:outline-none focus:border-[#eb5d1e] focus:ring-1 focus:ring-[#eb5d1e] transition-all appearance-none">
                       <option value="">Select experience</option>
                       <option value="0-1">0 - 1 Years</option>
                       <option value="1-3">1 - 3 Years</option>
                       <option value="3-5">3 - 5 Years</option>
                       <option value="5+">5+ Years</option>
                     </select>
                   </div>
                   <div>
                     <label className="block text-[13px] font-bold text-[#1a1a1a] mb-2 uppercase tracking-wide">LinkedIn Profile URL *</label>
                     <input type="url" required className="w-full bg-[#fdfcf7] border border-[#eaeaea] rounded-[12px] px-5 py-3.5 text-[#1a1a1a] font-medium focus:outline-none focus:border-[#eb5d1e] focus:ring-1 focus:ring-[#eb5d1e] transition-all" placeholder="https://linkedin.com/in/..." />
                   </div>
                   <div>
                     <label className="block text-[13px] font-bold text-[#1a1a1a] mb-2 uppercase tracking-wide">Portfolio/Website URL</label>
                     <input type="url" className="w-full bg-[#fdfcf7] border border-[#eaeaea] rounded-[12px] px-5 py-3.5 text-[#1a1a1a] font-medium focus:outline-none focus:border-[#eb5d1e] focus:ring-1 focus:ring-[#eb5d1e] transition-all" placeholder="https://yourwork.com" />
                   </div>
                 </div>
                 
                 <div>
                   <label className="block text-[13px] font-bold text-[#1a1a1a] mb-2 uppercase tracking-wide">Cover Letter *</label>
                   <textarea required rows={4} className="w-full bg-[#fdfcf7] border border-[#eaeaea] rounded-[12px] px-5 py-3.5 text-[#1a1a1a] font-medium focus:outline-none focus:border-[#eb5d1e] focus:ring-1 focus:ring-[#eb5d1e] transition-all" placeholder="Tell us why you are a great fit for this role..."></textarea>
                 </div>
                 
                 <div>
                   <label className="block text-[13px] font-bold text-[#1a1a1a] mb-2 uppercase tracking-wide">Upload Resume (Max 5MB) *</label>
                   <div className="border-2 border-dashed border-[#ccc] rounded-[16px] p-8 text-center hover:bg-[#fdfcf7] transition-colors cursor-pointer relative bg-white">
                     <input type="file" required accept=".pdf,.doc,.docx" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                     <span className="material-symbols-outlined text-[40px] text-[#eb5d1e] mb-3 block">upload_file</span>
                     <p className="text-[15px] font-bold text-[#1a1a1a]">Click or drag file to upload</p>
                     <p className="text-[13px] text-[#666] mt-1">Accepted formats: .pdf, .doc, .docx</p>
                   </div>
                 </div>

                 <div className="pt-8 mt-8 border-t border-[#eaeaea] flex justify-end gap-4">
                   <button type="button" onClick={() => setSelectedJob(null)} className="px-8 py-4 bg-white text-[#1a1a1a] font-bold text-[15px] rounded-[12px] border border-[#eaeaea] hover:bg-[#f8f6f0] transition-colors">
                     Cancel
                   </button>
                   <button type="submit" className="px-10 py-4 bg-[#eb5d1e] text-white font-bold text-[15px] rounded-[12px] shadow-[0_4px_15px_rgba(235,93,30,0.3)] hover:bg-[#d64d14] hover:-translate-y-0.5 transition-all">
                     Submit Application
                   </button>
                 </div>
               </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
`;

code = code + '\n' + newCareersPage + '\n';
fs.writeFileSync('components/pages.tsx', code);
console.log('Successfully wiped old CareersPage state and rebuilt correctly.');
