const fs = require('fs');

let code = fs.readFileSync('components/pages.tsx', 'utf8');

const jobsData = `const jobs = [
  {
    id: "frontend-dev",
    title: "Frontend Developer",
    department: "Web Development",
    experience: "1-3 Years",
    type: "Full Time",
    location: "Remote / Hybrid",
    description: "Build fast, responsive and scalable web applications for Tech Ghuru clients using React.js, Next.js and modern JavaScript technologies.",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind", "REST APIs"],
    salary: "Competitive"
  },
  {
    id: "backend-dev",
    title: "Backend Developer",
    department: "Web Development",
    experience: "2-4 Years",
    type: "Full Time",
    location: "Remote / Hybrid",
    description: "Design and build robust REST APIs, server-side logic and database integrations using Node.js, Express and PostgreSQL for client projects.",
    skills: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "JWT", "SQL Optimization"],
    salary: "Competitive"
  },
  {
    id: "video-editor",
    title: "Video Editor & Motion Designer",
    department: "Video Ads & Editing",
    experience: "1-3 Years",
    type: "Full Time",
    location: "On-site / Hybrid",
    description: "Create eye-catching video ads, reels and promotional content for clients using Premiere Pro, After Effects and DaVinci Resolve.",
    skills: ["Premiere Pro", "After Effects", "Motion Graphics", "Color Grading", "Sound Design"],
    salary: "Competitive"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Executive",
    department: "Digital Marketing",
    experience: "1-2 Years",
    type: "Full Time",
    location: "Remote / Hybrid",
    description: "Plan and execute result-driven digital marketing campaigns including SEO, SEM, social media and paid ads to grow client brand presence.",
    skills: ["Meta Ads", "Google Ads", "SMM", "Copywriting", "GA4", "Content Strategy"],
    salary: "Competitive"
  },
  {
    id: "content-writer",
    title: "Content Writer",
    department: "Content Writing",
    experience: "1-2 Years",
    type: "Full Time",
    location: "Remote",
    description: "Craft compelling blog posts, website copy, social media content and marketing materials for diverse Tech Ghuru client industries.",
    skills: ["Content Writing", "SEO Copywriting", "Proofreading", "Research"],
    salary: "Competitive"
  },
  {
    id: "bde",
    title: "Business Development Executive",
    department: "Consultation",
    experience: "1-3 Years",
    type: "Full Time",
    location: "On-site",
    description: "Identify and onboard new clients, manage consultations and build long-term relationships to grow Tech Ghuru portfolio.",
    skills: ["B2B Sales", "Client Consulting", "Negotiation", "CRM Management", "Service Scoping"],
    salary: "Competitive"
  }
];`;

const careersPage = `
export function CareersPage() {
  const [selectedJob, setSelectedJob] = React.useState<any>(null);
  const [activeFilter, setActiveFilter] = React.useState("All Roles");
  
  const filters = ["All Roles", "Web Development", "Video Ads & Editing", "Digital Marketing", "Content Writing", "Consultation"];
  
  const filteredJobs = activeFilter === "All Roles" 
    ? jobs 
    : jobs.filter(j => j.department === activeFilter);

  return (
    <main className="w-full bg-surface-container-lowest pb-24 relative overflow-hidden">
      {/* Hero Section */}
      <section className="pt-40 pb-16 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-[1280px] mx-auto px-gutter text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-container/30 text-primary font-label-sm text-[12px] font-bold tracking-widest uppercase shadow-sm">
            Careers at Tech Ghuru
          </div>
          
          <h1 className="font-headline-lg text-4xl md:text-5xl lg:text-[64px] font-bold text-on-surface tracking-tight leading-[1.1] text-balance mx-auto max-w-4xl">
            Build Your Future With <span className="text-primary relative inline-block">Tech Ghuru<svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 25 10 50 5 T 100 5" stroke="currentColor" strokeWidth="2" fill="none"/></svg></span>
          </h1>
          
          <p className="font-body-lg text-xl text-on-surface-variant max-w-2xl mx-auto">
            Join a passionate team of innovators, creators and problem solvers. Let's build technology that empowers businesses and touches millions of lives.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="#open-positions" className="px-8 py-4 bg-primary text-white rounded-xl font-label-lg font-bold hover:bg-primary/90 transition-colors">
              View Open Positions
            </a>
            <a href="#apply-now" className="px-8 py-4 bg-surface text-on-surface border border-outline-variant/30 rounded-xl font-label-lg font-bold hover:bg-surface-container transition-colors">
              Send Your Resume
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto">
             <div className="bg-surface p-6 rounded-2xl shadow-sm border border-outline-variant/20 flex flex-col items-center justify-center">
               <strong className="text-3xl font-bold text-primary mb-2">50+</strong>
               <span className="font-label-md text-on-surface-variant text-sm">Team Members</span>
             </div>
             <div className="bg-surface p-6 rounded-2xl shadow-sm border border-outline-variant/20 flex flex-col items-center justify-center">
               <strong className="text-3xl font-bold text-primary mb-2">25+</strong>
               <span className="font-label-md text-on-surface-variant text-sm">Projects Delivered</span>
             </div>
             <div className="bg-surface p-6 rounded-2xl shadow-sm border border-outline-variant/20 flex flex-col items-center justify-center">
               <strong className="text-3xl font-bold text-primary mb-2">5+</strong>
               <span className="font-label-md text-on-surface-variant text-sm">Countries Served</span>
             </div>
             <div className="bg-surface p-6 rounded-2xl shadow-sm border border-outline-variant/20 flex flex-col items-center justify-center">
               <strong className="text-3xl font-bold text-primary mb-2">100%</strong>
               <span className="font-label-md text-on-surface-variant text-sm">Passion & Dedication</span>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto relative group">
             <div className="rounded-3xl overflow-hidden relative h-[300px] shadow-lg">
                <img src="/blog-web-developing.jpg" alt="Team" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-left">
                  <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm mb-2 inline-block">COLLABORATION SPACES</span>
                  <h3 className="text-white font-bold text-xl">Autonomous squads tackling multi-region scale</h3>
                </div>
             </div>
             <div className="rounded-3xl overflow-hidden relative h-[300px] shadow-lg">
                <img src="/blog-product-design.jpg" alt="Focus" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-left">
                  <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm mb-2 inline-block">ASYNCHRONOUS FLOW</span>
                  <h3 className="text-white font-bold text-xl">Uninterrupted focus & creative freedom</h3>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#f8f6f0]">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="text-center mb-16">
            <Eyebrow>WHY JOIN TECH GHURU?</Eyebrow>
            <h2 className="font-headline-lg text-4xl font-bold text-on-surface mt-4">Enterprise-Class Benefits</h2>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto mt-4">We treat our technical talent as high-performance athletes—equipping you with every tool, protection, and comfort to thrive.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {icon: "payments", title: "Competitive Salary", desc: "Top-of-market compensation packages with regular performance bonuses and reviews."},
              {icon: "schedule", title: "Flexible Workspace", desc: "Creative and flexible working hours to ensure you have the best work-life harmony."},
              {icon: "school", title: "Continuous Learning", desc: "Dedicated mentorship, skill development programs, and professional growth support."},
              {icon: "public", title: "Global Exposure", desc: "Direct client interaction and hands-on experience with diverse global projects."},
              {icon: "health_and_safety", title: "Health & Wellness", desc: "Comprehensive health perks and wellness reimbursements for a balanced life."},
              {icon: "flight_takeoff", title: "Company Retreats", desc: "Annual offsites and team retreats to celebrate our collective milestones and bond."}
            ].map((b, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 hover:shadow-md transition-shadow">
                 <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                   <span className="material-symbols-outlined text-primary">{b.icon}</span>
                 </div>
                 <h3 className="font-bold text-xl mb-3 text-on-surface">{b.title}</h3>
                 <p className="text-on-surface-variant text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24 bg-surface">
        <div className="max-w-[1000px] mx-auto px-gutter text-center">
           <Eyebrow>HOW WE HIRE</Eyebrow>
           <h2 className="font-headline-lg text-4xl font-bold text-on-surface mt-4 mb-16">The Hiring Process</h2>
           <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
             <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[2px] bg-outline-variant/30 z-0"></div>
             {[
               {step: "01", title: "Resume Review"},
               {step: "02", title: "Screening Call"},
               {step: "03", title: "Technical Task"},
               {step: "04", title: "Discussion Round"},
               {step: "05", title: "Final Offer"}
             ].map((s, i) => (
               <div key={i} className="relative z-10 flex flex-col items-center">
                 <div className="w-12 h-12 rounded-full bg-surface border-2 border-primary flex items-center justify-center font-bold text-primary mb-4 bg-white shadow-sm">
                   {s.step}
                 </div>
                 <h4 className="font-bold text-sm text-on-surface">{s.title}</h4>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-24 bg-surface-container-lowest">
        <div className="max-w-[1000px] mx-auto px-gutter">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <Eyebrow>CURRENT ACTIVE EXPEDITIONS</Eyebrow>
              <h2 className="font-headline-lg text-4xl md:text-5xl font-bold text-on-surface mt-4">Open Positions</h2>
            </div>
            <p className="text-on-surface-variant text-sm mt-4 md:mt-0 font-medium">Showing <strong className="text-on-surface">{filteredJobs.length}</strong> opportunities</p>
          </div>

          <div className="flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
             {filters.map(f => (
               <button 
                 key={f}
                 onClick={() => setActiveFilter(f)}
                 className={\`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors \${activeFilter === f ? 'bg-primary text-white' : 'bg-surface border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container'}\`}
               >
                 {f} {f === "All Roles" && \`(\${jobs.length})\`}
               </button>
             ))}
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-3xl p-6 md:p-8 border border-outline-variant/30 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all">
                 <div className="flex flex-col md:flex-row justify-between gap-6">
                   <div className="flex-1">
                     <div className="flex flex-wrap gap-2 mb-4">
                       <span className="text-[11px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">{job.department}</span>
                       <span className="text-[11px] font-bold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">{job.type} • {job.location}</span>
                       <span className="text-[11px] font-bold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">{job.experience}</span>
                     </div>
                     <h3 className="font-headline-sm text-2xl font-bold text-on-surface mb-3">{job.title}</h3>
                     <p className="text-sm text-on-surface-variant mb-6 max-w-3xl">{job.description}</p>
                     <div className="flex items-center gap-2 flex-wrap">
                       <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mr-2">CORE STACK:</span>
                       {job.skills.map(skill => (
                         <span key={skill} className="text-xs font-medium bg-[#f5f5f5] text-on-surface px-2.5 py-1 rounded-md">{skill}</span>
                       ))}
                     </div>
                   </div>
                   <div className="flex flex-col items-start md:items-end justify-start gap-4">
                     <div className="bg-[#fcf0e8] text-[#c25e1a] font-bold text-sm px-4 py-1.5 rounded-full whitespace-nowrap">
                       {job.salary}
                     </div>
                     <button onClick={() => setSelectedJob(job)} className="px-6 py-3 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-primary/90 transition-colors whitespace-nowrap">
                       View & Apply
                     </button>
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-[800px] shadow-2xl relative my-8 overflow-hidden">
            <button onClick={() => setSelectedJob(null)} className="absolute top-6 right-6 w-10 h-10 bg-surface-container rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors z-10">
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="p-8 md:p-12">
               <div className="mb-8">
                 <span className="text-[11px] font-bold text-primary uppercase tracking-wider mb-2 block">APPLYING FOR</span>
                 <h2 className="text-3xl font-bold text-on-surface">{selectedJob.title}</h2>
               </div>
               <form className="space-y-6" id="apply-now" onSubmit={(e) => { e.preventDefault(); alert('Application Submitted!'); setSelectedJob(null); }}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                     <label className="block text-sm font-bold text-on-surface mb-2">Full Name *</label>
                     <input type="text" required className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                   </div>
                   <div>
                     <label className="block text-sm font-bold text-on-surface mb-2">Email Address *</label>
                     <input type="email" required className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                   </div>
                   <div>
                     <label className="block text-sm font-bold text-on-surface mb-2">Phone Number *</label>
                     <input type="tel" required className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="+1 234 567 890" />
                   </div>
                   <div>
                     <label className="block text-sm font-bold text-on-surface mb-2">Years of Experience *</label>
                     <select required className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors">
                       <option value="">Select experience</option>
                       <option value="0-1">0 - 1 Years</option>
                       <option value="1-3">1 - 3 Years</option>
                       <option value="3-5">3 - 5 Years</option>
                       <option value="5+">5+ Years</option>
                     </select>
                   </div>
                   <div>
                     <label className="block text-sm font-bold text-on-surface mb-2">LinkedIn Profile URL *</label>
                     <input type="url" required className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="https://linkedin.com/in/..." />
                   </div>
                   <div>
                     <label className="block text-sm font-bold text-on-surface mb-2">Portfolio/Website URL</label>
                     <input type="url" className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="https://yourwork.com" />
                   </div>
                 </div>
                 
                 <div>
                   <label className="block text-sm font-bold text-on-surface mb-2">Cover Letter *</label>
                   <textarea required rows={4} className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="Tell us why you are a great fit for this role..."></textarea>
                 </div>
                 
                 <div>
                   <label className="block text-sm font-bold text-on-surface mb-2">Upload Resume (Max 5MB) *</label>
                   <div className="border-2 border-dashed border-outline-variant/50 rounded-xl p-8 text-center hover:bg-surface-container-lowest transition-colors cursor-pointer relative">
                     <input type="file" required accept=".pdf,.doc,.docx" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                     <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">upload_file</span>
                     <p className="text-sm font-medium text-on-surface">Click or drag file to upload</p>
                     <p className="text-xs text-on-surface-variant mt-1">Accepted formats: .pdf, .doc, .docx</p>
                   </div>
                 </div>

                 <div className="pt-6 border-t border-outline-variant/30 flex justify-end gap-4">
                   <button type="button" onClick={() => setSelectedJob(null)} className="px-6 py-3 bg-surface text-on-surface font-bold rounded-xl border border-outline-variant hover:bg-surface-container transition-colors">
                     Cancel
                   </button>
                   <button type="submit" className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-primary/90 transition-colors">
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
}`;

// 1. Add jobs data and CareersPage to the end of the file.
// We must put it before `export function RoutePage`? Actually we can just append it at the end of the file.
code = code + '\n' + jobsData + '\n' + careersPage;

// 2. Replace the inline `if(key==="careers")return ...` with `<CareersPage />` inside `RoutePage`.
// Wait, we can find `if(key==="careers")return <><PageHero {...pages.careers}/>...`
const oldCareersPattern = /if\(key==="careers"\)return <><PageHero \{\.\.\.pages\.careers\}\/>[\s\S]*?(?=;if\(key==="blog"\)|;if\(key==="portfolio"\)|;if\(key==="consolation"\))/;
// The line above ends right before the next `if`.
code = code.replace(oldCareersPattern, 'if(key==="careers")return <CareersPage />');

fs.writeFileSync('components/pages.tsx', code);
console.log('Careers page built successfully!');
