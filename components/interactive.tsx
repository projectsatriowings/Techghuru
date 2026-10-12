"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, Check, ArrowLeft } from "lucide-react";
import { Button, Eyebrow, Reveal } from "./site-shell";

const projects = [
    {
      title: 'Universal Engineering',
      category: 'Corporate',
      link: 'https://universalengineering.org.in/',
      image: '/portfolio-pics/Universal Engineering.jpeg'
    },
    {
      title: 'Scissors Properties',
      category: 'Corporate',
      link: 'http://scissorsproperties.com/',
      image: '/portfolio-pics/sissers.png'
    },
    {
      title: 'PRS Dental',
      category: 'Health Care',
      link: 'https://prsdentalcare.com/',
      image: '/portfolio-pics/Prs dentel.jpeg'
    },
    {
      title: 'G.J. Hospitals (G.j Chid)',
      category: 'Health Care',
      link: 'https://gjshospitals.com/',
      image: '/portfolio-pics/G.j Chid.jpeg'
    },
    {
      title: 'Sivaji Sons',
      category: 'Travel',
      link: 'http://www.sivajison.com/',
      image: '/portfolio-pics/Sivaji sons.jpeg'
    },
    { title: 'Ghurudev', category: 'Education', link: 'https://ghurudev.in/', image: '/portfolio-pics/ghrudev.png' },
    {
      title: 'Digital Ghuru',
      category: 'Education',
      link: 'https://digitalghuru.in/',
      image: '/portfolio-pics/digitalghru.png'
    },
    {
      title: 'Health Ghuru',
      category: 'Health Care',
      link: 'https://healthghuru.com/',
      image: '/portfolio-pics/yoga.png'
    },
    { title: 'Mini So', category: 'Marketing', link: '#', image: '/portfolio-pics/mini so.png' },
    { title: 'Yakobu', category: 'Corporate', link: 'https://yakobu.in/', image: '/portfolio-pics/yakobu.png' },
    { title: 'Blessence', category: 'Marketing', link: '#', image: '/portfolio-pics/blessence.png' },
    {
      title: 'Travel Hassle Free',
      category: 'Travel',
      link: 'https://travelhasslefree.com/',
      image: '/portfolio-pics/travelhasslefree.com_.png'
    },
    {
      title: 'Sri Gnana Sai Baba Mandir',
      category: 'Social Impact',
      link: 'https://srignanasaibabamandir.com/',
      image: '/portfolio-pics/srignanasaibabamandir.com_.png'
    },
    {
      title: 'Dhara Foundations',
      category: 'Social Impact',
      link: 'https://dharafoundations.com/',
      image: '/portfolio-pics/dharafoundations.com_.png'
    },
    {
      title: 'Newsghuru Tamil',
      category: 'Media',
      link: 'https://newsghuru.in/',
      image: '/portfolio-pics/newsghuru.in_.png'
    },
    {
      title: 'Newsghuru English',
      category: 'Media',
      link: 'https://www.newsghuru.com/',
      image: '/portfolio-pics/www.newsghuru.com_.png'
    },
  ];
const filters = [
  "All projects",
  "Corporate",
  "Health Care",
  "Travel",
  "Education",
  "Marketing",
  "Social Impact",
  "Media",
];
export function PortfolioGallery() {
  const [active, setActive] = useState("All projects");
  const visible = projects.filter(
    (p) => active === "All projects" || p.category === active,
  );
  const dirs = ["from-left", "from-top", "from-right", "from-bottom"];
  return (
    <>
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar max-w-full">
        {filters.map((t) => (
          <button
            type="button"
            key={t}
            className={`px-4 py-2 rounded-full font-label-md text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
              active === t
                ? "bg-[#eb5d1e] text-white border-[#eb5d1e] shadow-sm"
                : "bg-white text-[#444] border-[#eaeaea] hover:bg-[#f8f6f0] hover:text-[#1a1a1a]"
            }`}
            onClick={() => setActive(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {visible.map((p, i) => {
          const isWide = i % 5 === 0;
          const spanClass = isWide ? "md:col-span-2" : "col-span-1";
          
          return (
          <Reveal key={p.title} delay={i * 40} className={`${spanClass} ${dirs[i % 4]}`}>
            <Link
              className="group block border border-dashed border-[#d0d0d0] bg-white hover:bg-[#f8f6f0] transition-colors duration-300 relative p-4 rounded-xl"
              href={p.link}
              target={p.link !== "#" ? "_blank" : undefined}
            >
              <div className="absolute -top-1.5 -left-1.5 text-[#d0d0d0] text-xs z-10">+</div>
              <div className="absolute -top-1.5 -right-1.5 text-[#d0d0d0] text-xs z-10">+</div>
              <div className="absolute -bottom-1.5 -left-1.5 text-[#d0d0d0] text-xs z-10">+</div>
              <div className="absolute -bottom-1.5 -right-1.5 text-[#d0d0d0] text-xs z-10">+</div>
              
              <div className={`w-full ${isWide ? "h-[240px] sm:h-[320px]" : "h-[200px] sm:h-[250px]"} bg-[#f8f6f0] overflow-hidden border border-[#eaeaea] rounded-lg mb-4`}>
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-center px-1">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1a1a1a] mb-0.5">{p.title}</h3>
                  <p className="text-[11px] sm:text-[12px] font-bold text-[#eb5d1e] uppercase tracking-wider">{p.category}</p>
                </div>
                <div className="w-9 h-9 border border-[#eaeaea] bg-white rounded-lg flex items-center justify-center text-[#1a1a1a] group-hover:border-[#d0d0d0] group-hover:text-[#eb5d1e] transition-colors shrink-0">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </Link>
          </Reveal>
        )})}
      </div>
    </>
  );
}
const stories = [
  {
    category: "Web Developing",
    title: "The intricacies of web development and emerging trends.",
    time: "5 min read",
    slug: "web-developing",
    image: "/blog-web-developing.jpg",
  },
  {
    category: "Product Design",
    title: "Crafting Meaningful Experiences with Tech Ghuru.",
    time: "6 min read",
    slug: "product-design",
    image: "/blog-product-design.jpg",
  },
  {
    category: "Content Writing",
    title: "Will AI Replace Writers? What Creators Should Know.",
    time: "8 min read",
    slug: "content-writing",
    image: "/blog-content-writing.jpg",
  },
  {
    category: "Digital Marketing",
    title: "The Art and Science of Influencer Marketing.",
    time: "7 min read",
    slug: "influencer-marketing",
    image: "/blog-influencer-marketing.jpg",
  },
  {
    category: "Product Photoshoot",
    title: "Innovative and creative ideas for capturing product images.",
    time: "6 min read",
    slug: "product-photoshoot",
    image: "/blog-product-photoshoot.jpg",
  },
  {
    category: "Branding",
    title: "Advanced Link-Building Strategies To Elevate Your Online Presence.",
    time: "7 min read",
    slug: "link-building-strategies",
    image: "/blog-link-building-strategies.jpg",
  },
];
export function BlogExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All stories");
  const cats = ["All stories", ...stories.map((s) => s.category)];
  const filtered = useMemo(
    () =>
      stories.filter(
        (s) =>
          (category === "All stories" || category === s.category) &&
          `${s.title} ${s.category}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [query, category],
  );
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar max-w-full">
          {cats.map((c) => (
            <button
              key={c}
              type="button"
              className={`px-4 py-2 rounded-full font-label-md text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
                category === c
                  ? "bg-[#eb5d1e] text-white border-[#eb5d1e] shadow-sm"
                  : "bg-white text-[#444] border-[#eaeaea] hover:bg-[#f8f6f0] hover:text-[#1a1a1a]"
              }`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="relative min-w-[240px]">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#888]" />
          <input
            aria-label="Search stories"
            placeholder="Search stories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#eaeaea] rounded-full text-sm text-[#1a1a1a] placeholder-[#888] focus:outline-none focus:border-[#eb5d1e] transition-colors shadow-sm"
          />
        </div>
      </div>
      <Link
        href="/blog/web-developing"
        className="group grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white border border-[#eaeaea] rounded-3xl p-4 sm:p-6 shadow-sm hover:shadow-md hover:border-[#eb5d1e]/30 transition-all duration-300"
      >
        <div className="lg:col-span-6 h-60 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-[#f8f6f0]">
          <img
            src="/blog-web-developing.jpg"
            alt="Featured Story"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="lg:col-span-6 flex flex-col justify-center p-2 sm:p-4">
          <Eyebrow>FEATURED STORY · 05 MIN READ</Eyebrow>
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-[#1a1a1a] mt-2 mb-4 leading-tight group-hover:text-[#eb5d1e] transition-colors">
            The intricacies of web development and emerging trends.
          </h2>
          <p className="font-body-md text-sm sm:text-base text-[#666] leading-relaxed mb-6">
            Tech Ghuru has been crafting digital solutions for over six years.
            Delve into our web development insights.
          </p>
          <span className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#eb5d1e] group-hover:translate-x-1 transition-transform">
            Read the story <ArrowUpRight size={18} />
          </span>
        </div>
      </Link>
      <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-[#1a1a1a] mt-12 sm:mt-16 mb-6">
        More to explore
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((s, i) => (
          <Reveal key={s.slug} delay={i * 45} className={["from-left", "from-right", "from-top", "from-bottom"][i%4]}>
            <Link
              href={`/blog/${s.slug}`}
              className="group bg-white border border-[#eaeaea] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#eb5d1e]/30 transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-full h-48 sm:h-56 bg-[#f8f6f0] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <small className="font-label-sm text-[11px] font-bold text-[#eb5d1e] uppercase tracking-wider block mb-2">
                    {s.category.toUpperCase()} · {s.time}
                  </small>
                  <h3 className="font-headline-md text-base sm:text-lg font-bold text-[#1a1a1a] group-hover:text-[#eb5d1e] transition-colors leading-snug">
                    {s.title}
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#1a1a1a] group-hover:text-[#eb5d1e] mt-4 pt-4 border-t border-[#f0f0f0]">
                  Read story <ArrowUpRight size={15} />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center py-12 text-[#888] font-body-md text-base bg-white rounded-2xl border border-[#eaeaea] my-6">
          No stories match that search yet. Try another topic.
        </p>
      )}
    </>
  );
}
export function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  if (submitted)
    return (
      <div className="bg-white rounded-3xl border border-[#eaeaea] shadow-[0_4px_24px_rgba(0,0,0,0.04)] p-8 sm:p-12 text-center max-w-xl mx-auto">
        <span className="w-16 h-16 bg-[#fff0e6] text-[#eb5d1e] rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={32} />
        </span>
        <Eyebrow>YOU’RE ON YOUR WAY</Eyebrow>
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-[#1a1a1a] mt-2 mb-4 leading-tight">
          Thanks for the
          <br />
          <em className="text-[#eb5d1e]">first hello.</em>
        </h2>
        <p className="font-body-md text-sm sm:text-base text-[#666] leading-relaxed mb-8">
          Your project brief is ready for the Tech Ghuru team. We’ll be in touch
          to talk through the next step.
        </p>
        <Button href="/">Back to the homepage</Button>
      </div>
    );
  return (
    <div className="bg-white rounded-3xl border border-[#eaeaea] shadow-[0_4px_24px_rgba(0,0,0,0.04)] p-6 sm:p-8 md:p-10 w-full max-w-2xl mx-auto">
      <div className="mb-8">
        <Eyebrow>PROJECT BRIEF · STEP {step} OF 2</Eyebrow>
        <div className="w-full bg-[#f0f0f0] h-2 rounded-full overflow-hidden mt-3">
          <div
            className="bg-[#eb5d1e] h-full transition-all duration-300 rounded-full"
            style={{ width: step === 1 ? "50%" : "100%" }}
          />
        </div>
      </div>
      {step === 1 ? (
        <div className="space-y-5">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">What should we call you?</label>
            <input
              placeholder="Your name"
              className="w-full px-4 py-3 bg-[#f8f6f0] border border-[#eaeaea] rounded-xl text-base text-[#1a1a1a] focus:outline-none focus:border-[#eb5d1e] transition-colors"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">Email address</label>
            <input
              type="email"
              placeholder="you@yourcompany.com"
              className="w-full px-4 py-3 bg-[#f8f6f0] border border-[#eaeaea] rounded-xl text-base text-[#1a1a1a] focus:outline-none focus:border-[#eb5d1e] transition-colors"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">Company or project</label>
            <input
              placeholder="The name you’re building"
              className="w-full px-4 py-3 bg-[#f8f6f0] border border-[#eaeaea] rounded-xl text-base text-[#1a1a1a] focus:outline-none focus:border-[#eb5d1e] transition-colors"
            />
          </div>
          <button
            type="button"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#eb5d1e] text-white font-bold rounded-xl hover:bg-[#d64d14] flex items-center justify-center gap-2 text-sm shadow-md transition-colors mt-6"
            onClick={() => setStep(2)}
          >
            Project details <ArrowUpRight size={16} />
          </button>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">What are you looking to make?</label>
            <select
              defaultValue=""
              className="w-full px-4 py-3 bg-[#f8f6f0] border border-[#eaeaea] rounded-xl text-base text-[#1a1a1a] focus:outline-none focus:border-[#eb5d1e] transition-colors appearance-none"
            >
              <option value="" disabled>
                Choose a service
              </option>
              {[
                "Brand identity",
                "Digital marketing",
                "Product design",
                "Video & campaigns",
                "Web development",
                "Content writing",
                "Something else",
              ].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">What’s your ideal timeline?</label>
            <select
              defaultValue=""
              className="w-full px-4 py-3 bg-[#f8f6f0] border border-[#eaeaea] rounded-xl text-base text-[#1a1a1a] focus:outline-none focus:border-[#eb5d1e] transition-colors appearance-none"
            >
              <option value="" disabled>
                Choose a timeframe
              </option>
              <option>As soon as possible</option>
              <option>Within 1–3 months</option>
              <option>In 3–6 months</option>
              <option>Just exploring</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">Tell us a little about the idea</label>
            <textarea
              placeholder="What are you hoping to achieve?"
              rows={3}
              className="w-full px-4 py-3 bg-[#f8f6f0] border border-[#eaeaea] rounded-xl text-base text-[#1a1a1a] focus:outline-none focus:border-[#eb5d1e] transition-colors"
            />
          </div>
          <div className="pt-4 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <button
              type="button"
              className="px-6 py-3.5 bg-white border border-[#eaeaea] text-[#1a1a1a] font-bold rounded-xl hover:bg-[#f8f6f0] flex items-center justify-center gap-2 text-sm transition-colors"
              onClick={() => setStep(1)}
            >
              <ArrowLeft size={16} /> Back
            </button>
            <button
              type="button"
              className="px-8 py-3.5 bg-[#eb5d1e] text-white font-bold rounded-xl hover:bg-[#d64d14] flex items-center justify-center gap-2 text-sm shadow-md transition-colors"
              onClick={() => setSubmitted(true)}
            >
              Send project brief <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
