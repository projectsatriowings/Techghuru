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
      <div className="filter-row">
        {filters.map((t) => (
          <button
            type="button"
            key={t}
            className={`filter-pill ${active === t ? "selected" : ""}`}
            onClick={() => setActive(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {visible.map((p, i) => {
          const isWide = i % 5 === 0;
          const spanClass = isWide ? "md:col-span-2" : "col-span-1";
          
          return (
          <Reveal key={p.title} delay={i * 40} className={`${spanClass} ${dirs[i % 4]}`}>
            <Link
              className="group block border border-dashed border-[#d0d0d0] bg-white hover:bg-[#f8f6f0] transition-colors duration-300 relative p-4"
              href={p.link}
              target={p.link !== "#" ? "_blank" : undefined}
            >
              <div className="absolute -top-1.5 -left-1.5 text-[#d0d0d0] text-xs z-10">+</div>
              <div className="absolute -top-1.5 -right-1.5 text-[#d0d0d0] text-xs z-10">+</div>
              <div className="absolute -bottom-1.5 -left-1.5 text-[#d0d0d0] text-xs z-10">+</div>
              <div className="absolute -bottom-1.5 -right-1.5 text-[#d0d0d0] text-xs z-10">+</div>
              
              <div className={`w-full ${isWide ? "h-[320px]" : "h-[250px]"} bg-[#f8f6f0] overflow-hidden border border-[#eaeaea] mb-4`}>
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-center px-1">
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-0.5">{p.title}</h3>
                  <p className="text-[12px] font-bold text-[#eb5d1e] uppercase tracking-wider">{p.category}</p>
                </div>
                <div className="w-9 h-9 border border-[#eaeaea] bg-white flex items-center justify-center text-[#1a1a1a] group-hover:border-[#d0d0d0] group-hover:text-[#eb5d1e] transition-colors shrink-0">
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
      <div className="filter-row">
        <button
          className={`filter-pill ${category === "All stories" ? "selected" : ""}`}
          onClick={() => setCategory("All stories")}
        >
          All stories
        </button>
        {stories.map((s) => (
          <button
            key={s.category}
            className={`filter-pill ${category === s.category ? "selected" : ""}`}
            onClick={() => setCategory(s.category)}
          >
            {s.category}
          </button>
        ))}
        <label className="filter-search">
          <Search size={14} />
          <input
            aria-label="Search stories"
            placeholder="Search stories"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <Link href="/blog/web-developing" className="blog-feature">
        <div
          style={{
            flex: "1 1 50%",
            height: "100%",
            minHeight: 350,
            borderRadius: 18,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="/blog-web-developing.jpg" alt="Featured Story" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div className="blog-feature-copy">
          <Eyebrow>FEATURED STORY · 05 MIN READ</Eyebrow>
          <h2>The intricacies of web development and emerging trends.</h2>
          <p>
            Tech Ghuru has been crafting digital solutions for over six years.
            Delve into our web development insights.
          </p>
          <span className="text-link">Read the story&nbsp; ↗</span>
        </div>
      </Link>
      <h2
        className="section-title"
        style={{ fontSize: 40, margin: "72px 0 30px" }}
      >
        More to explore
      </h2>
      <div className="journal-grid">
        {filtered.map((s, i) => (
          <Reveal key={s.slug} delay={i * 45} className={["from-left", "from-right", "from-top", "from-bottom"][i%4]}>
            <article className="journal-card">
              <div
                style={{
                  width: "100%",
                  height: 280,
                  borderRadius: 18,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src={s.image} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="journal-content">
                <small>
                  {s.category.toUpperCase()} · {s.time}
                </small>
                <h3>{s.title}</h3>
                <Link href={`/blog/${s.slug}`}>
                  Read story <ArrowUpRight size={15} />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="empty-state">
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
      <div className="success-card">
        <span className="success-icon">
          <Check />
        </span>
        <Eyebrow>YOU’RE ON YOUR WAY</Eyebrow>
        <h2>
          Thanks for the
          <br />
          <em>first hello.</em>
        </h2>
        <p>
          Your project brief is ready for the Tech Ghuru team. We’ll be in touch
          to talk through the next step.
        </p>
        <Button href="/">Back to the homepage</Button>
      </div>
    );
  return (
    <div className="wizard">
      <div className="wizard-top">
        <Eyebrow>PROJECT BRIEF · STEP {step} OF 2</Eyebrow>
        <div className="wizard-progress">
          <span style={{ width: step === 1 ? "50%" : "100%" }} />
        </div>
      </div>
      {step === 1 ? (
        <div className="wizard-fields">
          <div className="field">
            <label>What should we call you?</label>
            <input placeholder="Your name" />
          </div>
          <div className="field">
            <label>Email address</label>
            <input type="email" placeholder="you@yourcompany.com" />
          </div>
          <div className="field">
            <label>Company or project</label>
            <input placeholder="The name you’re building" />
          </div>
          <button type="button" className="button" onClick={() => setStep(2)}>
            Project details <ArrowUpRight size={16} />
          </button>
        </div>
      ) : (
        <div className="wizard-fields">
          <div className="field">
            <label>What are you looking to make?</label>
            <select defaultValue="">
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
          <div className="field">
            <label>What’s your ideal timeline?</label>
            <select defaultValue="">
              <option value="" disabled>
                Choose a timeframe
              </option>
              <option>As soon as possible</option>
              <option>Within 1–3 months</option>
              <option>In 3–6 months</option>
              <option>Just exploring</option>
            </select>
          </div>
          <div className="field">
            <label>Tell us a little about the idea</label>
            <textarea placeholder="What are you hoping to achieve?" />
          </div>
          <div className="wizard-actions">
            <button
              type="button"
              className="back-button"
              onClick={() => setStep(1)}
            >
              <ArrowLeft size={15} /> Back
            </button>
            <button
              type="button"
              className="button"
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
