"use client";
import Link from "next/link";
import React, { type ReactNode, useState, useEffect } from "react";
import {
  ArrowUpRight,
  Check,
  Bot,
  Rocket,
  Clapperboard,
  Search,
  Clipboard,
  PenTool,
  Code,
  Shield,
  Users,
  Target,
  Settings,
  TrendingUp,
  Headphones,
  RefreshCw,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  FileText,
  Zap,
  Eye,
  Filter,
  BarChart,
} from "lucide-react";
import { Eyebrow, Button, Reveal } from "./site-shell";
const ICONS: Record<string, any> = {
  Search,
  Clipboard,
  PenTool,
  Code,
  Shield,
  Rocket,
  TrendingUp,
  Users,
  Target,
  Settings,
  Headphones,
  RefreshCw,
  CheckCircle,
  FileText,
  Zap,
  Eye,
  Filter,
  BarChart,
};
import { PortfolioGallery, BlogExplorer, QuoteWizard } from "./interactive";
const services = [
  {
    id: "01",
    eyebrow: "MOBILE SYSTEMS",
    title: "App Designing & Developing",
    desc: "Native iOS & Android, Flutter, React Native, human-centered UI/UX and high-performance mobile apps built for seamless gesture flow and instant synchronization.",
    features: [
      "Native Swift & Kotlin Core",
      "Multiplatform React Native / Flutter",
      "Micro-interactions & Zero-lag UIs",
    ],
    icon: "smartphone",
    slug: "app-development",
  },
  {
    id: "02",
    eyebrow: "WEB ARCHITECTURE",
    title: "Web Development",
    desc: "Dynamic & static websites driven by Next.js, React, robust backends, headless CMS, and ultra-fast dynamic web portals delivering top-percentile Core Web Vitals.",
    features: [
      "SSR & Static Next.js Engines",
      "Headless CMS Architecture",
      "Sub-second Global Edge Delivery",
    ],
    icon: "web",
    slug: "web-development",
  },
  {
    id: "03",
    eyebrow: "ENTERPRISE CORE",
    title: "Software Development",
    desc: "Custom enterprise ERPs, cloud-native SaaS platforms, high-throughput API integrations, and bespoke automation software that eliminate manual overheads.",
    features: [
      "Scalable SaaS Multi-tenancy",
      "Enterprise ERP & CRM Modules",
      "Automated Event-Driven Pipelines",
    ],
    icon: "code",
    slug: "software-development",
  },
  {
    id: "04",
    eyebrow: "VISUAL IDENTITY",
    title: "Graphic Designing",
    desc: "Brand design systems, geometric vector illustrations, marketing collateral, pitch decks, and visual guidelines structured for timeless digital coherence.",
    features: [
      "Comprehensive Design Systems",
      "High-Impact Executive Pitch Decks",
      "Scalable Vector Asset Libraries",
    ],
    icon: "palette",
    slug: "graphic-designing",
  },
  {
    id: "05",
    eyebrow: "SOCIAL ECOSYSTEMS",
    title: "Social Media Management",
    desc: "Content calendars, active audience engagement, data-backed viral campaign strategies, and loyal community building across enterprise-relevant channels.",
    features: [
      "Multi-Channel Editorial Calendars",
      "Audience Growth & Moderation",
      "Sentiment & Reach Analytics",
    ],
    icon: "share",
    slug: "social-media-management",
  },
  {
    id: "06",
    eyebrow: "STRATEGIC EDITORIAL",
    title: "Content Writing",
    desc: "SEO-optimized blog posts, rigorous technical copywriting, conversion-focused landing page copy, and authoritative industry whitepapers that establish authority.",
    features: [
      "B2B Technical Whitepapers",
      "Semantic Search Optimized Articles",
      "High-Conversion Sales Copy",
    ],
    icon: "article",
    slug: "content-writing",
  },
  {
    id: "07",
    eyebrow: "GROWTH & ACQUISITION",
    title: "Digital Marketing & SEO",
    desc: "Organic search dominance, comprehensive technical SEO audits, Google Ads, targeted PPC campaigns designed for measurable multi-channel ROAS.",
    features: [
      "Technical & Semantic SEO",
      "Performance-driven PPC & Ads",
      "Multi-Channel Campaign Attribution",
    ],
    icon: "trending_up",
    slug: "digital-marketing",
  },
  {
    id: "08",
    eyebrow: "MARKET POSITIONING",
    title: "Branding & Promotion",
    desc: "End-to-end corporate identity, unique brand voice, definitive positioning, market launch campaigns, and creative strategies that make you undeniable.",
    features: [
      "Corporate Identity Frameworks",
      "Voice & Tone Archetyping",
      "Go-to-Market Launch Strategies",
    ],
    icon: "campaign",
    slug: "branding",
  },
  {
    id: "09",
    eyebrow: "VISUAL PRODUCTION",
    title: "Video Ads & Photography",
    desc: "High-definition motion graphics, commercial video productions, photorealistic 3D product renders, and cinematic brand stories that captivate.",
    features: [
      "Commercial Video Production",
      "Photorealistic 3D Rendering",
      "Motion Graphics & Animation",
    ],
    icon: "videocam",
    slug: "video-ads",
  },
];
const projects = [
  [
    "01",
    "Monogram — A better kind of finance",
    "Brand strategy · Digital product",
  ],
  ["02", "Forma — Objects for slow living", "E-commerce · Art direction"],
  ["03", "Daybreak — Start with a little more", "Campaign · Content"],
  ["04", "Openhouse — Find a place to belong", "Identity · Web experience"],
];
const articles = [
  [
    "Web Developing",
    "The intricacies of web development and emerging trends.",
    "5 min read",
    "web-developing",
    "/blog-web-developing.jpg",
  ],
  [
    "Product Design",
    "Crafting Meaningful Experiences with Tech Ghuru.",
    "6 min read",
    "product-design",
    "/blog-product-design.jpg",
  ],
  [
    "Content Writing",
    "How to write compelling copy that converts and engages.",
    "4 min read",
    "content-writing",
    "/blog-content-writing.jpg",
  ],
  [
    "Digital Marketing",
    "Strategies to boost your brand's digital presence in 2024.",
    "6 min read",
    "digital-marketing",
    "/blog-influencer-marketing.jpg",
  ],
  [
    "Product Photoshoot",
    "Innovative and creative ideas for capturing product images.",
    "5 min read",
    "product-photoshoot",
    "/blog-product-photoshoot.jpg",
  ],
  [
    "Branding",
    "Building a memorable identity for your enterprise.",
    "7 min read",
    "branding",
    "/blog-link-building-strategies.jpg",
  ],
];
function SectionTitle({
  eyebrow,
  title,
  copy,
  maxWidth,
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  maxWidth?: string | number;
}) {
  return (
    <Reveal>
      {" "}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16 relative z-10">
        {" "}
        <div className="space-y-4" style={{ maxWidth: maxWidth || 800 }}>
          {" "}
          <Eyebrow>{eyebrow}</Eyebrow>{" "}
          <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight leading-tight">
            {title}
          </h2>{" "}
        </div>{" "}
        {copy && (
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[400px]">
            {copy}
          </p>
        )}{" "}
      </div>{" "}
    </Reveal>
  );
}
function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
      {" "}
      {services.map((s, i) => (
        <Reveal key={s.id} delay={(i % 3) * 50}>
          {" "}
          <Link
            href={`/services/${s.slug}`}
            className="group relative flex flex-col w-full p-8 rounded-3xl bg-surface-container-lowest shadow-sm hover:shadow-xl border border-outline-variant/30 transition-all duration-500 hover:-translate-y-1 h-full"
          >
            {" "}
            <div className="w-14 h-14 rounded-full bg-primary-container/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors duration-500 mb-8 shrink-0">
              {" "}
              <span className="material-symbols-outlined font-headline-md text-headline-md">
                {s.icon}
              </span>{" "}
            </div>{" "}
            <div className="flex flex-col flex-1">
              {" "}
              <div className="text-label-sm font-bold tracking-wider uppercase text-primary mb-2">
                {" "}
                {s.id} / {s.eyebrow}{" "}
              </div>{" "}
              <h3 className="font-headline-md text-headline-md"> {s.title} </h3>{" "}
              <p className="font-body-md font-body-sm text-body-sm leading-relaxed text-on-surface-variant mb-6 flex-1 min-h-[80px]">
                {" "}
                {s.desc}{" "}
              </p>{" "}
              <ul className="space-y-3 mb-8">
                {" "}
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 font-body-sm font-label-sm text-label-sm text-on-surface-variant"
                  >
                    {" "}
                    <span className="material-symbols-outlined text-primary font-body-md text-body-md mt-0.5">
                      check_circle
                    </span>{" "}
                    <span>{f}</span>{" "}
                  </li>
                ))}{" "}
              </ul>{" "}
            </div>{" "}
          </Link>{" "}
        </Reveal>
      ))}{" "}
    </div>
  );
}
function Projects({ small = false }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12 relative z-10">
      {" "}
      {projects.slice(0, small ? 2 : 4).map(([n, t, c], i) => (
        <Reveal key={n} delay={i * 70}>
          {" "}
          <Link href="/portfolio" className="group block space-y-6">
            {" "}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-surface-container shadow-md border border-outline-variant/20">
              {" "}
              <div className="absolute inset-4 md:inset-8 bg-surface-container-lowest rounded-2xl shadow-inner border border-outline-variant/10 flex items-center justify-center overflow-hidden transition-transform duration-700 group-hover:scale-105">
                {" "}
                <div className="w-64 h-64 bg-gradient-to-tr from-primary/30 to-secondary/10 rounded-full blur-3xl absolute opacity-50 group-hover:opacity-100 transition-opacity"></div>{" "}
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface-variant/30">
                  {t.split(" ")[0]}
                </h3>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex items-center justify-between">
              {" "}
              <div>
                {" "}
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                  {t.split("?")[0]}
                </h3>{" "}
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {c}
                </p>{" "}
              </div>{" "}
              <div className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all">
                {" "}
                <ArrowUpRight size={20} />{" "}
              </div>{" "}
            </div>{" "}
          </Link>{" "}
        </Reveal>
      ))}{" "}
    </div>
  );
}
function Journal({ compact = false }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 relative z-10">
      {" "}
      {articles.map(([category, title, time, slug, img], i) => (
        <Reveal key={title} delay={i * 50}>
          {" "}
          <article className="group block bg-surface-container-lowest rounded-3xl overflow-hidden shadow-lg border border-outline-variant/30 hover:shadow-2xl transition-all duration-500">
            {" "}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
              {" "}
              {img && (
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}{" "}
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>{" "}
            </div>{" "}
            <div className="p-6 md:p-8 space-y-4">
              {" "}
              <div className="flex items-center justify-between">
                {" "}
                <span className="font-label-sm text-label-sm text-primary font-semibold tracking-wider uppercase">
                  {category}
                </span>{" "}
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {time}
                </span>{" "}
              </div>{" "}
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight group-hover:text-primary transition-colors">
                {title}
              </h3>{" "}
              <Link
                href={`/blog/${slug}`}
                className="inline-flex items-center gap-2 font-label-md text-label-md text-on-surface group-hover:text-primary transition-colors"
              >
                {" "}
                Read story <ArrowUpRight size={16} />{" "}
              </Link>{" "}
            </div>{" "}
          </article>{" "}
        </Reveal>
      ))}{" "}
    </div>
  );
}
function CTA() {
  return (
    <section className="py-12 relative overflow-hidden">
      {" "}
      <div className="max-w-[1280px] mx-auto px-gutter">
        {" "}
        <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl border border-outline-variant/30 relative overflow-hidden">
          {" "}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/20 to-transparent pointer-events-none"></div>{" "}
          <div className="w-full md:w-1/2 space-y-6 relative z-10">
            {" "}
            <Eyebrow>YOUR NEXT CHAPTER</Eyebrow>{" "}
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight leading-tight">
              Have a good one
              <br />
              <em className="text-primary not-italic">in the making?</em>
            </h2>{" "}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[400px]">
              Tell us what you're dreaming up. We'll bring the right people and
              ideas to make it happen.
            </p>{" "}
          </div>{" "}
          <div className="w-full md:w-1/2 relative z-10 flex flex-col items-center md:items-end space-y-8">
            {" "}
            <div className="relative w-full max-w-[400px] aspect-video rounded-2xl overflow-hidden shadow-xl border border-outline-variant/30">
              {" "}
              <img
                src="/cta-image.png"
                alt="Creative Workspace"
                className="w-full h-full object-cover"
              />{" "}
            </div>{" "}
            <Button href="/contact" className="bg-[#eb5d1e] text-white hover:bg-[#d64d14] rounded-[12px] px-8 py-3.5 flex items-center gap-2 inline-flex border-none font-bold shadow-[0_4px_15px_rgba(235,93,30,0.3)] group w-max">
              Contact Us
            </Button>
          </div>
        </div>{" "}
      </div>{" "}
    </section>
  );
}
function PageHero({
  eyebrow,
  title,
  desc,
  children,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  desc: string;
  children?: ReactNode;
  image?: string;
}) {
  return (
    <section className="pt-16 pb-16 lg:pt-12 lg:pb-12 overflow-hidden relative">
      {" "}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>{" "}
      <div className="max-w-[1280px] mx-auto px-gutter">
        {" "}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {" "}
          <div className="w-full lg:w-1/2 space-y-6 z-10 relative">
            {" "}
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>{" "}
            <Reveal delay={100}>
              <h1 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight leading-[1.1]">
                {title}
              </h1>
            </Reveal>{" "}
            <Reveal delay={200}>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[540px]">
                {desc}
              </p>
            </Reveal>{" "}
            {children && (
              <Reveal delay={300}>
                <div className="pt-4">{children}</div>
              </Reveal>
            )}{" "}
          </div>{" "}
          {image && (
            <div className="w-full lg:w-1/2 relative z-10 flex justify-center">
              {" "}
              <Reveal delay={200} className="w-full">
                {" "}
                <div className="relative w-full aspect-square md:aspect-video lg:aspect-square max-w-[600px] mx-auto rounded-3xl overflow-hidden shadow-2xl bg-surface-container-lowest border border-outline-variant/30">
                  {" "}
                  <img
                    src={image}
                    alt="Hero"
                    className="w-full h-full object-cover"
                  />{" "}
                </div>{" "}
              </Reveal>{" "}
            </div>
          )}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
function Prose({
  heading,
  children,
  eyebrow = "THE WAY WE SEE IT",
}: {
  heading: ReactNode;
  children: ReactNode;
  eyebrow?: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 my-24 relative z-10">
      {" "}
      <div className="md:col-span-5 space-y-4">
        {" "}
        <Eyebrow>{eyebrow}</Eyebrow>{" "}
        <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight leading-tight">
          {heading}
        </h2>{" "}
      </div>{" "}
      <div className="md:col-span-7 font-body-lg text-body-lg text-on-surface-variant space-y-6">
        {" "}
        {children}{" "}
      </div>{" "}
    </div>
  );
}
function ContactForm({ quote = false }) {
  return (
    <form className="space-y-6" action="#">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {" "}
        <div className="space-y-2">
          {" "}
          <label className="font-label-md text-label-md text-on-surface font-semibold">
            Your name
          </label>{" "}
          <input
            className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            placeholder="What should we call you?"
          />{" "}
        </div>{" "}
        <div className="space-y-2">
          {" "}
          <label className="font-label-md text-label-md text-on-surface font-semibold">
            Email address
          </label>{" "}
          <input
            type="email"
            className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            placeholder="you@yourcompany.com"
          />{" "}
        </div>{" "}
      </div>{" "}
      {quote && (
        <div className="space-y-2">
          {" "}
          <label className="font-label-md text-label-md text-on-surface font-semibold">
            What are you looking to make?
          </label>{" "}
          <select
            defaultValue=""
            className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
          >
            {" "}
            <option value="" disabled>
              Choose a service
            </option>{" "}
            {services.map((s) => (
              <option key={s[1]}>{s[1]}</option>
            ))}{" "}
          </select>{" "}
        </div>
      )}{" "}
      <div className="space-y-2">
        {" "}
        <label className="font-label-md text-label-md text-on-surface font-semibold">
          A little about your idea
        </label>{" "}
        <textarea
          rows={4}
          className="w-full bg-surface-container-lowest border border-outline-variant/50 rounded-xl px-4 py-3 font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
          placeholder="Tell us what's on your mind..."
        />{" "}
      </div>{" "}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {" "}
        <button
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-label-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          type="button"
        >
          {" "}
          {quote ? "Continue to project details" : "Send your message"}{" "}
          <ArrowUpRight size={18} />{" "}
        </button>{" "}
        <small className="font-body-sm text-body-sm text-on-surface-variant">
          Just a first hello. No commitment, no pressure.
        </small>{" "}
      </div>{" "}
    </form>
  );
}
function WebDevTechStack({ info }: any) {
  const stack = info?.stack || [
    {
      name: "React",
      color: "#61DAFB",
      desc: "A declarative, efficient JavaScript library for building dynamic user interfaces.",
      svg: "<svg fill='currentColor' fill='#61DAFB' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>React</title><path d='M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z'/></svg>",
    },
    {
      name: "Next.js",
      color: "#000000",
      desc: "The React framework for production with server-side rendering and fast static sites.",
      svg: "<svg fill='currentColor' fill='#000000' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Next.js</title><path d='M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z'/></svg>",
    },
    {
      name: "TypeScript",
      color: "#3178C6",
      desc: "A strongly typed programming language that builds on JavaScript for better tooling.",
      svg: "<svg fill='currentColor' fill='#3178C6' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>TypeScript</title><path d='M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z'/></svg>",
    },
    {
      name: "JavaScript",
      color: "#F7DF1E",
      desc: "The core programming language of the web, powering interactive online experiences.",
      svg: "<svg fill='currentColor' fill='#F7DF1E' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>JavaScript</title><path d='M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z'/></svg>",
    },
    {
      name: "Tailwind CSS",
      color: "#06B6D4",
      desc: "A utility-first CSS framework for rapid UI development and highly custom styling.",
      svg: "<svg fill='currentColor' fill='#06B6D4' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Tailwind CSS</title><path d='M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z'/></svg>",
    },
    {
      name: "Node.js",
      color: "#5FA04E",
      desc: "A powerful JavaScript runtime for scalable server-side networking and APIs.",
      svg: "<svg fill='currentColor' fill='#5FA04E' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Node.js</title><path d='M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z'/></svg>",
    },
    {
      name: "Prisma",
      color: "#2D3748",
      desc: "Next-generation Node.js and TypeScript ORM for safe, modern database access.",
      svg: "<svg fill='currentColor' fill='#2D3748' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Prisma</title><path d='M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z'/></svg>",
    },
    {
      name: "PostgreSQL",
      color: "#4169E1",
      desc: "A powerful, open-source object-relational database system known for reliability.",
      svg: "<svg fill='currentColor' fill='#4169E1' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>PostgreSQL</title><path d='M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z'/></svg>",
    },
    {
      name: "MongoDB",
      color: "#47A248",
      desc: "A document-based, distributed database built for modern, flexible applications.",
      svg: "<svg fill='currentColor' fill='#47A248' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>MongoDB</title><path d='M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z'/></svg>",
    },
    {
      name: "Figma",
      color: "#F24E1E",
      desc: "The collaborative interface design tool for creating prototypes and gathering feedback.",
      svg: "<svg fill='currentColor' fill='#F24E1E' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Figma</title><path d='M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z'/></svg>",
    },
    {
      name: "Git",
      color: "#F05032",
      desc: "The industry-standard distributed version control system for source code management.",
      svg: "<svg fill='currentColor' fill='#F03C2E' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><title>Git</title><path d='M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z'/></svg>",
    },
  ];
  return (
    <div style={{ marginTop: 120, marginBottom: 80 }}>
      {" "}
      <Eyebrow>TECHNOLOGY & STACK</Eyebrow>{" "}
      <h2
        className="section-title"
        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", marginTop: 15 }}
      >
        Industry Standard Toolkits
      </h2>{" "}
      <p
        style={{
          color: "#686c62",
          maxWidth: 600,
          marginTop: "20px",
          lineHeight: 1.6,
        }}
      >
        We build and compile applications strictly adhering to reliable modern
        framework standards.
      </p>{" "}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          marginTop: "80px",
          maxWidth: "900px",
        }}
      >
        {" "}
        {stack.map((tech) => (
          <div
            key={tech.name}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
              borderRadius: "12px",
              border: "1px solid rgba(0,0,0,0.08)",
              backgroundColor: "#fff",
              boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
              transition: "transform 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-3px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            {" "}
            <div
              style={{ width: "20px", height: "20px", color: tech.color }}
              dangerouslySetInnerHTML={{ __html: tech.svg }}
            />{" "}
            <span
              style={{
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "var(--ink)",
              }}
            >
              {tech.name}
            </span>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
}
function WebDevAdvantages({ info }: any) {
  const advantages = (
    info?.advantages || [
      {
        title: "Performance First",
        desc: "We optimize all scripts, assets, and caching algorithms to guarantee maximum speed indices.",
        iconName: "Zap",
      },
      {
        title: "Clean Codebase",
        desc: "We adhere strictly to modern coding standards, making your platform easy for other teams to maintain.",
        iconName: "CheckCircle",
      },
      {
        title: "On-Time Delivery",
        desc: "We split execution milestones into weekly sprints to guarantee timely platform deployment.",
        iconName: "Clock",
      },
      {
        title: "Reliable Support",
        desc: "We provide post-launch optimization, security patches, and routine server updates.",
        iconName: "Headset",
      },
    ]
  ).map((a: any) => ({
    ...a,
    icon: ICONS[a.iconName || a.icon] || ICONS.CheckCircle,
  }));
  return (
    <div style={{ marginTop: 120, marginBottom: 80 }}>
      {" "}
      <Eyebrow>OUR ADVANTAGE</Eyebrow>{" "}
      <h2
        className="section-title"
        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", marginTop: 15 }}
      >
        Why Tech Ghuru?
      </h2>{" "}
      <p
        style={{
          color: "#686c62",
          maxWidth: 600,
          marginTop: "20px",
          lineHeight: 1.6,
        }}
      >
        What sets Tech Ghuru apart is our dedication to execution metrics,
        custom development, and reliable client communication pipelines.
      </p>{" "}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
          marginTop: "50px",
        }}
      >
        {" "}
        {advantages.map((adv, i) => (
          <div
            key={i}
            className="bento-feature-card"
            style={{
              textAlign: "left",
              background: "linear-gradient(180deg, #fff 0%, #fcfdfd 100%)",
            }}
          >
            {" "}
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: "var(--lime)",
                color: "var(--ink)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "25px",
              }}
            >
              {" "}
              <div
                dangerouslySetInnerHTML={{
                  __html: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
                }}
              />{" "}
            </div>{" "}
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: 800,
                marginBottom: "15px",
              }}
            >
              {adv.title}
            </h3>{" "}
            <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.6 }}>
              {adv.desc}
            </p>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
}
function WebDevOutcomes({ info }: any) {
  const outcomes = info?.outcomes || [
    {
      eyebrow: "DESIGNED TO IMPROVE",
      title: "Faster Loading Speeds",
      desc: "Significantly lowers bounce rates by loading critical content in under 1.2s.",
      icon: "Zap",
    },
    {
      eyebrow: "DESIGNED TO IMPROVE",
      title: "Higher Google Rankings",
      desc: "Stricter semantic structure and speed scores result in organic search visibility gains.",
      icon: "TrendingUp",
    },
    {
      eyebrow: "TYPICAL PROJECT GOAL",
      title: "Scalable Infrastructure",
      desc: "Enables your web platform to comfortably host thousands of concurrent active visitors.",
      icon: "Server",
    },
  ];
  return (
    <div style={{ marginTop: 120, marginBottom: 120 }}>
      {" "}
      <Eyebrow>OUTCOMES</Eyebrow>{" "}
      <h2
        className="section-title"
        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", marginTop: 15 }}
      >
        Designed For Results
      </h2>{" "}
      <p
        style={{
          color: "#686c62",
          maxWidth: 600,
          marginTop: "20px",
          lineHeight: 1.6,
        }}
      >
        We construct architectures intended to scale organic search positions,
        loading speeds and business queries.
      </p>{" "}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          marginTop: "50px",
        }}
      >
        {" "}
        {outcomes.map((out, i) => (
          <div
            key={i}
            className="bento-feature-card"
            style={{ textAlign: "left" }}
          >
            {" "}
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                backgroundColor: "var(--lime)",
                color: "var(--ink)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "25px",
              }}
            >
              {" "}
              <div
                dangerouslySetInnerHTML={{
                  __html: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>`,
                }}
              />{" "}
            </div>{" "}
            <div
              style={{
                fontSize: "0.65rem",
                fontWeight: 800,
                color: "#686c62",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              {out.eyebrow}
            </div>{" "}
            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: 800,
                marginBottom: "15px",
              }}
            >
              {out.title}
            </h3>{" "}
            <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: 1.6 }}>
              {out.desc}
            </p>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
}
function WebDevTimeline({ info }: any) {
  const [activeStep, setActiveStep] = useState(0);
  const steps = info?.workflowSteps
    ? info.workflowSteps.map((s: any) => ({
        ...s,
        icon: ICONS[s.iconName] || ICONS.Search,
      }))
    : [
        {
          id: "01",
          title: "Discover",
          desc: "Analyzing your target audience, site goals, and core system requirements.",
          icon: Search,
        },
        {
          id: "02",
          title: "Plan",
          desc: "Setting route architectures, content outlines, and design visual styleguides.",
          icon: Clipboard,
        },
        {
          id: "03",
          title: "Design",
          desc: "Creating UI wireframes and high-fidelity interactive Figma mockups.",
          icon: PenTool,
        },
        {
          id: "04",
          title: "Develop",
          desc: "Writing clean, type-checked Next.js code and configuring database setups.",
          icon: Code,
        },
        {
          id: "05",
          title: "Test",
          desc: "Rigorous performance optimization, cross-device checks, and security audits.",
          icon: Shield,
        },
        {
          id: "06",
          title: "Launch",
          desc: "Production compilation, deployment to cloud servers, and monitoring.",
          icon: Rocket,
        },
      ];
  const pills = info?.workflowPills
    ? info.workflowPills.map((p: any) => ({
        ...p,
        icon: ICONS[p.iconName] || ICONS.Target,
      }))
    : [
        { text: "Dedicated Team", icon: Users },
        { text: "Goal-Oriented Approach", icon: Target },
        { text: "Agile Process", icon: Settings },
        { text: "Result-Driven Solutions", icon: TrendingUp },
        { text: "Dedicated Support", icon: Headphones },
        { text: "Continuous Improvement", icon: RefreshCw },
      ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev: number) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [steps.length]);
  return (
    <div
      style={{
        marginTop: 80,
        padding: "100px 5%",
        backgroundColor: "var(--ink)",
        color: "#f5f5ef",
        borderRadius: 40,
      }}
    >
      {" "}
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}
      >
        {" "}
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
            marginBottom: "100px",
            letterSpacing: "-0.03em",
            lineHeight: 1.3,
          }}
        >
          {" "}
          A structured journey from first requirements audit to post-launch
          optimization support.{" "}
        </h2>{" "}
        <div
          className="timeline-container"
          style={
            {
              "--progress-ratio": activeStep / (steps.length - 1),
            } as React.CSSProperties
          }
        >
          {" "}
          {/* Progress Line Background */} <div className="timeline-track-bg" />{" "}
          {/* Active Progress Line */} <div className="timeline-track-fill" />{" "}
          <div className="timeline-step-list">
            {" "}
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              const isPast = idx <= activeStep;
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="timeline-step"
                  onClick={() => setActiveStep(idx)}
                >
                  {" "}
                  {/* Tooltip for Active Step */}{" "}
                  <div
                    className="timeline-tooltip"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0)"
                        : "translateY(10px)",
                    }}
                  >
                    {" "}
                    Active Step: {step.title}{" "}
                    <div className="timeline-tooltip-arrow" />{" "}
                  </div>{" "}
                  {/* Icon Circle */}{" "}
                  <div
                    className="timeline-icon-circle"
                    style={{
                      backgroundColor: isActive ? "var(--lime)" : "#111",
                      border: `2px solid ${isPast ? "var(--lime)" : "#333"}`,
                      color: isActive
                        ? "var(--ink)"
                        : isPast
                          ? "var(--lime)"
                          : "#666",
                      boxShadow: isActive
                        ? "0 0 20px rgba(213, 255, 80, 0.4)"
                        : "none",
                    }}
                  >
                    {" "}
                    <Icon size={24} />{" "}
                  </div>{" "}
                  {/* Line Node Circle */}{" "}
                  <div
                    className="timeline-node-circle"
                    style={{
                      backgroundColor: isPast ? "var(--lime)" : "#111",
                      border: `2px solid ${isPast ? "var(--lime)" : "#333"}`,
                      boxShadow: isActive ? "0 0 10px var(--lime)" : "none",
                    }}
                  />{" "}
                  {/* Text Details */}{" "}
                  <div className="timeline-content-group">
                    {" "}
                    <div
                      style={{
                        color: isPast ? "var(--lime)" : "#666",
                        fontSize: "0.8rem",
                        fontWeight: "bold",
                        marginBottom: "8px",
                        transition: "color 0.3s",
                      }}
                    >
                      {step.id}
                    </div>{" "}
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        marginBottom: "15px",
                        color: isPast ? "#fff" : "#888",
                        transition: "color 0.3s",
                      }}
                    >
                      {step.title}
                    </h3>{" "}
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: isPast ? "#ccc" : "#666",
                        lineHeight: "1.5",
                        transition: "color 0.3s",
                      }}
                    >
                      {step.desc}
                    </p>{" "}
                  </div>{" "}
                </div>
              );
            })}{" "}
          </div>{" "}
        </div>{" "}
        {/* Bottom Pills Section */}{" "}
        <div
          style={{
            marginTop: "40px",
            border: "1px solid #333",
            borderRadius: "100px",
            padding: "20px 40px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%)",
          }}
        >
          {" "}
          {pills.map((pill, i) => {
            const PIcon = pill.icon;
            return (
              <div key={i} className="timeline-pill">
                {" "}
                <div className="icon-container">
                  {" "}
                  <PIcon size={16} />{" "}
                </div>{" "}
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    color: "#eee",
                  }}
                >
                  {pill.text}
                </span>{" "}
              </div>
            );
          })}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
function WebDevShowcase({ info }: any) {
  return (
    <div style={{ marginTop: 80 }}>
      {" "}
      {/* 1. Overview Split */}{" "}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "60px",
          alignItems: "center",
          marginBottom: "100px",
        }}
      >
        {" "}
        <Reveal className="from-left">
          {" "}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(134,169,50,0.05) 0%, rgba(134,169,50,0.1) 100%)",
              border: "1.5px solid rgba(134,169,50,0.25)",
              borderRadius: "28px",
              padding: "50px 30px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {" "}
            <div
              style={{
                fontSize: "5rem",
                fontWeight: 900,
                color: "var(--lime)",
                lineHeight: 1,
                textShadow: "0 0 30px rgba(213,255,80,0.4)",
              }}
            >
              {info.performanceScore}
            </div>{" "}
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "var(--lime)",
                marginTop: 10,
              }}
            >
              Performance
            </div>{" "}
            <p
              style={{
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#686c62",
                marginTop: 20,
              }}
            >
              Typical Google PageSpeed target score.
            </p>{" "}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--lime)",
                color: "var(--ink)",
                padding: "6px 16px",
                borderRadius: "30px",
                fontSize: "0.75rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginTop: 20,
              }}
            >
              {" "}
              <Check size={14} /> Tech Ghuru Verified{" "}
            </div>{" "}
          </div>{" "}
        </Reveal>{" "}
        <Reveal className="from-right">
          {" "}
          <div>
            {" "}
            <Eyebrow>OVERVIEW</Eyebrow>{" "}
            <h2
              className="section-title"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                marginBottom: 20,
              }}
            >
              Transform Your Digital Presence with Modern Web Architecture
            </h2>{" "}
            <p style={{ color: "#686c62", lineHeight: 1.8, marginBottom: 20 }}>
              {info.overview}
            </p>{" "}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 30,
              }}
            >
              {" "}
              {info.pills.map((pill: string) => (
                <div
                  key={pill}
                  style={{
                    background: "#f4f5f0",
                    border: "1px solid var(--line)",
                    padding: "8px 16px",
                    borderRadius: "30px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                  }}
                >
                  {" "}
                  {pill}{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </Reveal>{" "}
      </div>{" "}
      {/* 2. Live Workflow Showcase */}{" "}
      <Reveal className="from-bottom">
        {" "}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          {" "}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(134,169,50,0.1)",
              color: "var(--lime)",
              padding: "6px 16px",
              borderRadius: "30px",
              fontSize: "0.75rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: 20,
            }}
          >
            {" "}
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--lime)",
              }}
            ></span>{" "}
            Live Workflow Showcase{" "}
          </div>{" "}
          <h2 className="section-title">
            Animated Service Delivery Simulation
          </h2>{" "}
        </div>{" "}
        <div
          style={{
            background: "var(--paper)",
            border: "1px solid var(--line)",
            borderRadius: "28px",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          {" "}
          <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {" "}
            {info.workflow.map((step: string, i: number) => (
              <div
                key={step}
                style={{ flex: 1, minWidth: 80, textAlign: "center" }}
              >
                {" "}
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: i === 0 ? "var(--lime)" : "#fff",
                    color: i === 0 ? "var(--ink)" : "#999",
                    border: i === 0 ? "none" : "2px solid var(--line)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    margin: "0 auto",
                  }}
                >
                  {" "}
                  0{i + 1}{" "}
                </div>{" "}
                <div
                  style={{
                    marginTop: 10,
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: i === 0 ? "var(--lime)" : "#999",
                  }}
                >
                  {step}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {" "}
            {/* IDE Mock */}{" "}
            <div
              style={{
                background: "#111311",
                borderRadius: "16px",
                overflow: "hidden",
                padding: 0,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {" "}
              <div
                style={{
                  padding: "12px 16px",
                  background: "#181c18",
                  borderBottom: "1px solid #222",
                  display: "flex",
                  gap: 6,
                  alignItems: "center",
                }}
              >
                {" "}
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#ff5f56",
                  }}
                ></div>{" "}
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#ffbd2e",
                  }}
                ></div>{" "}
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#27c93f",
                  }}
                ></div>{" "}
                <span
                  style={{
                    marginLeft: 10,
                    color: "#666",
                    fontSize: "0.75rem",
                    fontFamily: "monospace",
                  }}
                >
                  techghuru.com/web
                </span>{" "}
              </div>{" "}
              <div
                style={{
                  padding: "20px",
                  fontFamily: "monospace",
                  fontSize: "0.85rem",
                  color: "#a5aa9f",
                  flex: 1,
                  minHeight: 220,
                }}
              >
                {" "}
                <div style={{ color: "#666" }}>
                  {/* Step 01: Discover */}
                </div>{" "}
                <div style={{ color: "#ffbd2e", marginTop: 10 }}>
                  const <span style={{ color: "#fff" }}>targetAudience</span> =
                  "Global Users";
                </div>{" "}
                <div style={{ color: "#ffbd2e", marginTop: 5 }}>
                  const <span style={{ color: "#fff" }}>pagesNeeded</span> =
                  ["Home", "Dashboard"];
                </div>{" "}
                <div style={{ color: "#27c93f", marginTop: 15 }}>
                  console.log("Analyzing target logs...");
                </div>{" "}
                <div style={{ color: "#26b3d1", marginTop: 5 }}>
                  &gt; Target mapped successfully.
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* Live Metrics */}{" "}
            <div
              style={{
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {" "}
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  color: "#999",
                  letterSpacing: "1px",
                }}
              >
                Live Metrics
              </div>{" "}
              {info.metrics.map((m: any) => (
                <div
                  key={m.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    padding: "15px",
                    background: "#f4f5f0",
                    borderRadius: "12px",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "10px",
                      background: m.color,
                      color: m.color === "var(--ink)" ? "#fff" : "var(--ink)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                    }}
                  >
                    {" "}
                    <i className={m.icon}></i>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <div
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        color: "#999",
                        letterSpacing: "1px",
                      }}
                    >
                      {m.label}
                    </div>{" "}
                    <div
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 800,
                        color: m.color,
                      }}
                    >
                      {m.value}
                    </div>{" "}
                  </div>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
          <div style={{ borderTop: "1px solid var(--line)", paddingTop: 20 }}>
            {" "}
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                textTransform: "uppercase",
                color: "#999",
                letterSpacing: "1px",
                marginBottom: 15,
              }}
            >
              Trending Features
            </div>{" "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {" "}
              {info.trendingFeatures.map((tag: string) => (
                <div
                  key={tag}
                  style={{
                    background: "#fff",
                    border: "1px solid var(--line)",
                    padding: "6px 14px",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "var(--ink)",
                  }}
                >
                  {tag}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
          <div style={{ borderTop: "1px solid var(--line)", paddingTop: 20 }}>
            {" "}
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                textTransform: "uppercase",
                color: "#999",
                letterSpacing: "1px",
                marginBottom: 15,
              }}
            >
              Technologies Used
            </div>{" "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {" "}
              {info.technologies.map((tech: string) => (
                <div
                  key={tech}
                  style={{
                    background: "#f4f5f0",
                    padding: "6px 12px",
                    borderRadius: "8px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#555",
                  }}
                >
                  {tech}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </Reveal>{" "}
    </div>
  );
}
function ServicePage({ slug }: { slug: string }) {
  /* @ts-ignore */ const info = serviceInfo[slug];
  if (!info)
    return (
      <div style={{ padding: "200px 5%", textAlign: "center" }}>
        <h2 className="section-title">Service not found.</h2>
        <Button href="/services">Back to services</Button>
      </div>
    );
  const headlineParts = info.headline.split(" Built for ");
  return (
    <>
      {" "}
      <PageHero
        eyebrow={`SERVICES · ${info.name}`}
        title={
          <>
            {headlineParts[0]}
            <br />
            <em>Built for {headlineParts[1] || "Growth"}</em>
          </>
        }
        desc={info.overview}
      />{" "}
      <section className="py-12 relative z-10">
        {" "}
        <div className="max-w-[1280px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-16">
          {" "}
          <div className="space-y-16">
            {" "}
            <div>
              {" "}
              <h3 className="font-headline-md text-headline-md font-bold mb-6 text-on-surface">
                Our Approach
              </h3>{" "}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {" "}
                {info.services?.map((s, i) => (
                  <div
                    key={i}
                    className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/30"
                  >
                    {" "}
                    <h4 className="font-bold mb-2 text-on-surface">
                      {s.title}
                    </h4>{" "}
                    <p className="text-sm text-on-surface-variant">
                      {s.desc}
                    </p>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
            </div>{" "}
            <div>
              {" "}
              <h3 className="font-headline-md text-headline-md font-bold mb-6 text-on-surface">
                Core Features
              </h3>{" "}
              <div className="space-y-4">
                {" "}
                {info.features?.map(([t, d], i) => (
                  <div key={i} className="flex gap-4">
                    {" "}
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold">
                      {(i + 1).toString().padStart(2, "0")}
                    </div>{" "}
                    <div>
                      {" "}
                      <h4 className="font-bold text-on-surface">{t}</h4>{" "}
                      <p className="text-sm text-on-surface-variant">
                        {d}
                      </p>{" "}
                    </div>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="space-y-8">
            {" "}
            <div className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/30">
              {" "}
              <h3 className="font-bold mb-4 font-headline-sm text-on-surface">
                Technologies
              </h3>{" "}
              <div className="flex flex-wrap gap-2">
                {" "}
                {info.technologies?.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-2 bg-surface rounded-full text-sm font-semibold border border-outline-variant/30 text-on-surface"
                  >
                    {t}
                  </span>
                ))}{" "}
              </div>{" "}
            </div>{" "}
            <div className="bg-primary text-on-primary rounded-3xl p-8 shadow-xl">
              {" "}
              <h3 className="font-bold mb-4 font-headline-md">
                Ready to start?
              </h3>{" "}
              <p className="mb-6 text-primary-fixed-dim font-body-md">
                Let's build something great together.
              </p>{" "}
              <Button
                href="/contact"
                className="bg-white text-black hover:bg-gray-100"
              >
                Get a Quote
              </Button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <CTA />{" "}
    </>
  );
}
const blogContent: Record<string, ReactNode> = {
  "web-developing": (
    <>
      {" "}
      <h3>Introduction</h3>{" "}
      <p>
        Tech Ghuru Technologies, a seasoned player in the web development
        landscape, has been crafting digital solutions for over six years. Our
        journey has been marked by innovation, dedication, and a relentless
        pursuit of excellence. In this blog, we'll delve into the intricacies of
        web development, sharing insights, tips, and real-world experiences from
        our projects.
      </p>{" "}
      <h3>Understanding the Web Development Process</h3>{" "}
      <p>
        Web development is a multifaceted process that involves planning,
        designing, coding, and testing. It's a collaborative effort between
        designers, developers, and project managers. At Tech Ghuru, we follow a
        structured approach that ensures efficient project execution and client
        satisfaction.
      </p>{" "}
      <h3>The Importance of User Experience (UX)</h3>{" "}
      <p>
        UX is the cornerstone of successful web development. It's about creating
        websites that are intuitive, engaging, and easy to navigate. We believe
        that a well-designed UX can significantly impact a website's performance
        and user satisfaction.
      </p>{" "}
      <h3>The Role of Front-End Development</h3>{" "}
      <p>
        Front-end development is responsible for creating the visual interface
        of a website. It involves using HTML, CSS, and JavaScript to design and
        build responsive, user-friendly layouts. At Tech Ghuru, we stay updated
        with the latest front-end technologies and frameworks to deliver
        cutting-edge web experiences.
      </p>{" "}
      <h3>Back-End Development: The Powerhouse</h3>{" "}
      <p>
        Back-end development handles the server-side logic of a website. It
        involves working with databases, APIs, and programming languages like
        PHP, Python, or Ruby. A robust back-end is essential for ensuring
        website performance, security, and scalability.
      </p>{" "}
      <h3>The Significance of Mobile-First Design</h3>{" "}
      <p>
        In today's mobile-centric world, mobile-first design is a must. It
        ensures that websites are optimized for smaller screens and provide a
        seamless user experience across devices. At Tech Ghuru, we prioritize
        mobile-first design in all our projects.
      </p>{" "}
      <h3>The Future of Web Development: Emerging Trends</h3>{" "}
      <p>
        The web development landscape is constantly evolving. Emerging trends
        like AI, AR/VR, and progressive web apps (PWAs) are reshaping the way we
        interact with digital content. We stay ahead of the curve by exploring
        and implementing these technologies in our projects.
      </p>{" "}
      <h3>The Challenges and Rewards of Web Development</h3>{" "}
      <p>
        Web development is not without its challenges. From tight deadlines to
        complex technical issues, developers often face hurdles. However, the
        rewards are immense. Witnessing a website come to life and making a
        positive impact on users is incredibly fulfilling.
      </p>{" "}
      <h3>Tech Ghuru Technologies: Our Approach to Web Development</h3>{" "}
      <p>
        At Tech Ghuru, we believe in building long-lasting relationships with
        our clients. We work closely with them to understand their unique needs
        and goals. Our approach is characterized by:
      </p>{" "}
      <ul>
        {" "}
        <li>
          <strong>Client-Centric Focus:</strong> We prioritize our clients'
          satisfaction above all else.
        </li>{" "}
        <li>
          <strong>Quality Assurance:</strong> We adhere to strict quality
          standards to deliver reliable and high-performing websites.
        </li>{" "}
        <li>
          <strong>Continuous Learning:</strong> We stay updated with the latest
          trends and technologies in the web development industry.
        </li>{" "}
        <li>
          <strong>Innovation:</strong> We embrace innovation to create
          cutting-edge digital solutions.
        </li>{" "}
      </ul>{" "}
      <h3>Success Stories: Our Web Development Projects</h3>{" "}
      <p>
        Over the years, Tech Ghuru Technologies has successfully delivered
        numerous web development projects across various industries. From
        e-commerce platforms to corporate websites, our portfolio showcases our
        expertise and commitment to excellence.
      </p>{" "}
      <h3>The Evolution of Web Development</h3>{" "}
      <p>
        <strong>The Early Days of the Web</strong>
        <br /> The internet, in its infancy, was a text-based realm. Websites
        were simple HTML documents with limited functionality. The focus was on
        information dissemination rather than interactive experiences.
      </p>{" "}
      <p>
        <strong>The Rise of Web Browsers</strong>
        <br /> The introduction of graphical web browsers like Netscape
        Navigator and Internet Explorer revolutionized how people interacted
        with the web. These browsers allowed for the display of images,
        multimedia content, and more complex website structures.
      </p>{" "}
      <p>
        <strong>The Dot-Com Boom</strong>
        <br /> The late 1990s saw a surge in internet-based businesses, leading
        to the dot-com boom. This era witnessed a rapid increase in website
        development, with companies vying to establish their online presence.
      </p>{" "}
      <p>
        <strong>The Importance of Search Engine Optimization (SEO)</strong>
        <br /> As the internet grew, so did the competition for visibility. SEO
        became a crucial factor in determining a website's success. Techniques
        like keyword optimization, backlink building, and content creation were
        employed to improve search engine rankings.
      </p>{" "}
      <p>
        <strong>The Advent of Dynamic Websites</strong>
        <br /> Static websites, which consisted of pre-built pages, gave way to
        dynamic websites. These websites could generate content on the fly,
        providing a more personalized and interactive experience for users.
      </p>{" "}
      <p>
        <strong>The Mobile Revolution</strong>
        <br /> The proliferation of smartphones and tablets ushered in the era
        of mobile-first design. Websites had to adapt to smaller screens and
        varying device capabilities, ensuring a seamless user experience across
        platforms.
      </p>{" "}
      <p>
        <strong>The Rise of Web Frameworks and Libraries</strong>
        <br /> To streamline the development process, web frameworks and
        libraries emerged. These tools provided pre-built components and
        functionalities, accelerating development time and improving code
        quality.
      </p>{" "}
      <p>
        <strong>The Importance of User Experience (UX)</strong>
        <br /> As the internet matured, the emphasis shifted towards creating
        websites that were not only functional but also enjoyable to use. UX
        design became a critical aspect of web development, focusing on
        user-centered design principles.
      </p>{" "}
      <p>
        <strong>The Impact of Social Media</strong>
        <br /> Social media platforms like Facebook, Twitter, and Instagram
        transformed the way people interact online. Websites began to integrate
        social media features, allowing users to share content, connect with
        friends, and build communities.
      </p>{" "}
      <p>
        <strong>The Rise of E-commerce</strong>
        <br /> Online shopping has become a mainstream activity, driven by the
        growth of e-commerce platforms. Web development plays a crucial role in
        creating secure, user-friendly online stores.
      </p>{" "}
      <p>
        <strong>The Emergence of Single-Page Applications (SPAs)</strong>
        <br /> SPAs, which load a single HTML page and update its content
        dynamically, have gained popularity for their fast performance and
        interactive experiences.
      </p>{" "}
      <p>
        <strong>The Role of JavaScript and Front-End Frameworks</strong>
        <br /> JavaScript has become the lingua franca of the web, powering
        interactive elements, animations, and dynamic content. Front-end
        frameworks like React, Angular, and Vue.js have simplified JavaScript
        development and promoted code reusability.
      </p>{" "}
      <p>
        <strong>The Importance of Accessibility</strong>
        <br /> Ensuring that websites are accessible to people with disabilities
        is a growing concern. Web developers must adhere to accessibility
        standards like WCAG (Web Content Accessibility Guidelines) to create
        inclusive online experiences.
      </p>{" "}
      <p>
        <strong>The Future of Web Development</strong>
        <br /> The web continues to evolve, with emerging technologies like
        artificial intelligence, augmented reality, and virtual reality shaping
        the future of web development. Developers must stay updated with these
        advancements to remain competitive.
      </p>{" "}
      <p>
        <strong>The Challenges of Web Development</strong>
        <br /> Web development is not without its challenges. Keeping up with
        rapidly changing technologies, ensuring website security, and meeting
        tight deadlines are common hurdles faced by developers.
      </p>{" "}
      <p>
        <strong>The Rewards of Web Development</strong>
        <br /> Despite the challenges, web development offers numerous rewards.
        The ability to create something tangible, solve problems, and have a
        positive impact on people's lives is highly fulfilling.
      </p>{" "}
      <p>
        <strong>The Importance of Continuous Learning</strong>
        <br /> The web development landscape is constantly evolving. Successful
        developers must be committed to lifelong learning and staying updated
        with the latest trends and technologies.
      </p>{" "}
      <p>
        <strong>The Role of Collaboration</strong>
        <br /> Web development is often a collaborative effort involving
        designers, developers, and project managers. Effective communication and
        teamwork are essential for successful project outcomes.
      </p>{" "}
      <p>
        <strong>The Impact of Web Development on Society</strong>
        <br /> Web development has had a profound impact on society, enabling
        global communication, fostering economic growth, and empowering
        individuals. It has transformed the way we learn, work, and interact
        with the world.
      </p>{" "}
      <h3>Conclusion</h3>{" "}
      <p>
        Web development is a dynamic and ever-evolving field. At Tech Ghuru
        Technologies, we are passionate about crafting exceptional digital
        experiences. With our six years of experience and dedication to
        innovation, we are well-equipped to meet the challenges of the modern
        web.
      </p>{" "}
    </>
  ),
  "product-design": (
    <>
      <p className="text-body-lg font-medium mb-8">
        Crafting Exceptional Experiences with Tech Ghuru
      </p>
      <h3>Introduction</h3>
      <p>
        At Tech Ghuru, we believe that product design is more than just aesthetics; it's about creating meaningful experiences that resonate with users. Our six years of expertise in the field have equipped us with a deep understanding of human-centered design principles and innovative methodologies. In this blog, we'll delve into the world of product design, sharing insights, tips, and case studies from our projects.
      </p>
      <h3>Understanding Product Design</h3>
      <p>
        Product design encompasses the entire process of creating a product, from ideation to launch. It involves understanding user needs, defining product goals, and designing solutions that are both functional and aesthetically pleasing.
      </p>
      <h3>The Importance of User Research</h3>
      <p>
        User research is the foundation of effective product design. By understanding your target audience's needs, preferences, and pain points, you can create products that truly resonate with them.
      </p>
      <h3>User Personas: A Powerful Tool</h3>
      <p>
        User personas are fictional representations of your target users. They help you empathize with your audience and make informed design decisions.
      </p>
      <h3>The Design Thinking Process</h3>
      <p>
        Design thinking is a human-centered approach to problem-solving. It involves empathy, ideation, prototyping, testing, and iteration.
      </p>
      <h3>The Role of Prototyping</h3>
      <p>
        Prototypes are tangible representations of your product ideas. They help you visualize your concepts, gather feedback, and refine your designs.
      </p>
      <h3>The Importance of User Testing</h3>
      <p>
        User testing is essential for identifying usability issues and ensuring that your product meets user expectations.
      </p>
      <h3>Iterative Design: The Key to Success</h3>
      <p>
        Iterative design involves continuously improving your product based on feedback and insights. It's a never-ending process that helps you create the best possible product.
      </p>
      <h3>The Role of Accessibility in Product Design</h3>
      <p>
        Designing products that are accessible to everyone is crucial. Consider factors such as color contrast, font size, and keyboard navigation.
      </p>
      <h3>The Importance of Sustainability in Product Design</h3>
      <p>
        Sustainability is becoming increasingly important in product design. Consider the environmental impact of your products and explore sustainable materials and practices.
      </p>
      <h3>Mobile-First Design: A Necessity</h3>
      <p>
        With the growing popularity of mobile devices, mobile-first design is essential. Design your products with smaller screens in mind to ensure a seamless user experience.
      </p>
      <h3>The Role of Storytelling in Product Design</h3>
      <p>
        Storytelling can help you connect with your users on an emotional level. Create a compelling narrative around your product to differentiate it from competitors.
      </p>
      <h3>The Importance of Branding in Product Design</h3>
      <p>
        Branding plays a vital role in shaping your product's identity. Ensure that your design elements align with your brand values and messaging.
      </p>
      <h3>The Impact of Technology on Product Design</h3>
      <p>
        Emerging technologies like AI, AR, and VR are reshaping the product design landscape. Explore how these technologies can enhance your product offerings.
      </p>
      <h3>The Challenges and Rewards of Product Design</h3>
      <p>
        Product design can be challenging, but the rewards are immense. Seeing your ideas come to life and making a positive impact on people's lives is incredibly fulfilling.
      </p>
      <h3>Our Approach to Product Design</h3>
      <p>
        At Tech Ghuru, we believe in creating products that are not only functional but also delightful to use. Our approach is characterized by:
      </p>
      <ul>
        <li><strong>User-Centric Design:</strong> We put users at the heart of everything we do.</li>
        <li><strong>Innovation:</strong> We strive to create innovative and groundbreaking products.</li>
        <li><strong>Collaboration:</strong> We work closely with our clients to ensure that their vision is brought to life.</li>
        <li><strong>Quality:</strong> We are committed to delivering high-quality products that exceed expectations.</li>
      </ul>
      <h3>The Future of Product Design</h3>
      <p>
        The future of product design is bright, with new technologies and trends emerging constantly. At Tech Ghuru, we are excited to be at the forefront of this evolution.
      </p>
      <h3>Emerging Trends in Product Design</h3>
      <ul>
        <li><strong>Voice User Interfaces (VUIs):</strong> Designing for conversational interactions.</li>
        <li><strong>Augmented Reality (AR) and Virtual Reality (VR):</strong> Creating immersive product experiences.</li>
        <li><strong>Internet of Things (IoT):</strong> Designing connected products and ecosystems.</li>
        <li><strong>Ethical Design:</strong> Considering the social and ethical implications of product design.</li>
      </ul>
      <h3>Conclusion</h3>
      <p>
        Product design is a complex and rewarding field that requires a combination of creativity, technical expertise, and a deep understanding of human psychology. At Tech Ghuru, we are passionate about crafting exceptional products that make a difference.
      </p>
    </>
  ),
  "content-writing": (
    <>
      <p className="text-body-lg font-medium mb-8">
        Will AI Replace Writers
      </p>
      <p>
        For most people in the world of digital marketing and creating content, AI technology and machine learning haven't just taken the world by storm; they've changed it overnight.
      </p>
      <p>
        Since it launched in November 2022, ChatGPT has made many dedicated content writers struggle to find the same amount of work to which their lifetime of sharpening is dedicated. Content marketers, who had their own ways of doing things, have suddenly found themselves trying to figure out where AI fits into the picture.
      </p>
      <p>
        Meanwhile, AI interfaces like ChatGPT and Jasper prove useful but still have glaring limitations. But for how much longer? Will AI completely replace writers someday? How can today's content creators and marketers make the most of AI without falling into the traps?
      </p>
      <p>
        Here, we'll answer questions like these and more, cover how to navigate today's quickly evolving marketing landscape so you can come out ahead on the other side.
      </p>
      <h3>Can AI Actually Replace Writers?</h3>
      <p>
        Most would say the writing has sounded incredibly human-like, and by and large, grammatically correct. Still, in many other ways, it often seems not good enough. AI-generated text frequently has a flat sound; it can be error-prone, repetitive, and full of circular talk. Artificial intelligence lacks that emotional depth, life experience, creativity, or spark that human writers give to a story to keep their readers tuned in.
      </p>
      <p>
        In other words, no, AI can't actually replace writers. But it can make human writers and marketing teams more productive by streamlining the process of content production. The key will be in knowing when to use AI and when to leave a task to a human instead.
      </p>
      <h3>How Do AI and Machine Learning Work?</h3>
      <p>
        Artificial intelligence is a program, machine, or interface that can execute tasks a human would typically manage. The AI was designed to solve problems and process information in ways that genuinely duplicate the functionality of the human brain.
      </p>
      <p>
        On the other hand, machine learning is AI's special capability of training itself through information, data, or other input so that it keeps "learning" in much the same way people learn. The quite-popular interfaces like ChatGPT, Midjourney, and models like it learn how to generate content originally just this way-through large caches of existing information fed to them by human users.
      </p>
      <p>
        With all the recent hype about AI and machine learning, these subjects can seem quite new. However, the two have been in existence forever. In fact, the concept of "artificial intelligence" was first used in the 1950s, while its basic technology came as far back in time as the 1930s. Models have only recently reached a level where they could learn to generate human-similar original content at incredible speed, provided there is a prompt meant for humans.
      </p>
      <h3>How Is AI Used in Content Creation Today?</h3>
      <p>
        Over half of today's marketers make use of AI in diverse forms as part of their ongoing content creation strategies. Here's an overview of some of the most popular ways that content creation professionals are using the technology to streamline various aspects of their workflow:
      </p>
      <h4>Content creation</h4>
      <p>
        When most people think of AI in content marketing, content creation is probably one of the first real applications. Be it ChatGPT, Jasper, Writesonic, or any number of other tools, many marketers are using them to create everything from simple product descriptions to social media status updates to full-length articles.
      </p>
      <p>
        But AI-generated text alone will probably not be sufficient to top rank on Google SERPs anyhow, without heavy human editing, fact-checking, and enhancement. For that reason, it should be used cautiously and in minimal amount.
      </p>
      <h4>Multimedia generation</h4>
      <p>
        Generative AI can also create an unlimited number of original visual images that marketers use to elevate written content, supplement social posts, or attach to graphic designs. Some of the most popular platforms and programs are Midjourney, DALL-E, and Stable Diffusion. Even Bing, Meta, and Google allow their users some capability to generate an image.
      </p>
      <p>
        Recent technology now makes it possible for the brand manager and content creator to create original voiceovers and video, music, as well as audio effects. The current implemented offerings through technology are basic but are meant to develop more rapidly.
      </p>
      <p>
        AI really shines in data analytics, and many other fields of knowledge, fast and accurate, more so than any human is capable of. AI can wade through enormous data for processing and analysis rather quickly, focusing on any important trend or pattern therein. Resulting from this, modern businesses and brands are using it to make sense out of vast caches of information for market research and in smoother content planning.
      </p>
      <p>
        AI can also be used effectively to predict customer behavior based on collected data, past behavior history, etc. This is one highly anticipated example to keep an eye on; the same has been created using OpenAI's generative video app Sora.
      </p>
      <h4>Outlining and briefing</h4>
      <p>
        Even when AI cannot handle the complexity of a planned piece of content, it really can take out the guesswork from a planning process in the minds of content managers and writers. Examples might include AI helping with initial topic or keyword research, developing comprehensive outlines, or detailed content briefs that writers will work from.
      </p>
      <h4>Proofreading</h4>
      <p>
        Most of the popular writing assistants, including Grammarly and Hemingway, were powered with AI and have been behind-the-scenes players in the content creation process for many years. Due to the fact that such tools have already proven effective and easy to operate, they continue serving as a go-to staple not only for many writers, proofreaders, and editors but also for content managers.
      </p>
      <p>
        Practical examples of AI applications in modern marketing Want to know how top brands employ the power of AI-driven tools to address audiences and speed up marketing workflows? Let's look closer at a few real-world examples:
      </p>
      <h3>Differences Between AI Content and Human Content</h3>
      <p>
        When ChatGPT first entered the market, it seemed that every woe in content marketing now had a talisman solution-from initiating fresh concept brainstorming to meeting ideal output speeds. Within a very short period, however, it became crystal clear that while AI assistants and other tools are going to enable content creation teams to be much more productive, they're very far from actually being able to do the job of a writer, an editor, or a thought leader themselves. Here's a deeper look at what makes AI-generated content different from human-crafted content.
      </p>
      <h4>AI content</h4>
      <p>
        It's true, AI-generated content might be just a quick and easy way to churn out reams of fresh content without investing significantly. But quality truly beats quantity, according to Google. AI content oftentimes lacks depth and personality, and it's tough to get that great factor when human creators are not delivering the content. It might even have some major potential issues, such as factual errors or infringements on existing copyrights.
      </p>
      <p>
        Rather, an overdependence on AI content for powering a given content marketing strategy may have even bigger problems in store. Important pieces of content can fail to resonate with human audiences and drive conversions if they are fully AI-generated. Authority cred and SERP rankings that have been hard-earned can also take a plunge: Google frequently penalizes sites that publish content with a high probability of being AI-generated.
      </p>
      <h4>Human content</h4>
      <p>
        Human-created content takes more time and, later down the line, takes much more investment in the content strategy. It has its perks that AI just can't provide at the same level. Perks like genuine original thinking, creativity, and insight are only doable with people. They can also write from experience and expertise that brings value to key content pieces.
      </p>
      <p>
        With the right content solutions, for example, you will still find affordable and scalable ways to tap into teams of human writers. For example, you can continue to have ongoing access to the tens of thousands of subject matter experts, certified professionals, experienced copywriters, and other professional content creators that are part of trusted content creation platforms like Crowd Content.
      </p>
      <p>
        Ready to see what the right professional writers can bring to your content strategy? Explore Crowd Content's catalog of professional content creation services today, including article writing, copywriting, and ghostwriting options.
      </p>
      <h3>How Does AI Help Complete Writing Tasks?</h3>
      <p>
        AI technology should not be considered as something that would override creative work done by human writers. On the contrary, it needs to be perceived as a tool to which teams can be updated to maintain a particular tempo. Below are some examples of how this AI technology can actually streamline current methods of content production and make the lines more productive.
      </p>
      <h4>Brainstorming and ideas</h4>
      <p>
        Everyone, even the best and most experienced writers, will run into a writer's block at one time or another. Especially true when they have to manage many places where the content is posted: websites, blogs, and social accounts. Anything that can help to regain the creative solutions of the mind can be a massive help.
      </p>
      <p>
        AI tools can be really effective at this. They might brainstorm ideas on writing topics that are relevant, ideal keywords to use, hot topics to chime in on, and unusual angles to explore based on your target audience.
      </p>
      <h4>Structure and outlines</h4>
      <p>
        Writers use the AI to hammer out the basic structure of a piece they plan and then finish it, actually writing. AI can give you, from start to finish, helpful sample outlines and also suggest headings, chapter titles for longer works, social media captions, etc.
      </p>
      <h4>Creation of Drafts</h4>
      <p>
        Even though most professional writers will not use AI-generated text on the job, it can be used to write rough drafts or make the process easier for texts such as large-volume product descriptions or social media captions. The work of some writers even centers around humanizing AI-generated content for clients and brands. This then leads them to perform other tasks such as fact-checking, personalization, general editing, and enhancement in order to make the text flow more efficiently.
      </p>
      <p>
        Even the savviest of writers know that AI does make mistakes, but it can still be a useful asset in performing initial research or data analysis. Most AI programs will also take the guesswork out in trying to optimize a particular piece of content for SEO or to suit a certain audience. Period.
      </p>
      <p>
        Indispensable tools like Grammarly or proofreading assistants allow writers to bring their A-game to the table every time they sit down to write. Such tools help catch spelling errors, grammar proofing, and suggest stylistic changes that might help with the flow, among others.
      </p>
      <h4>More popular tools of the trade</h4>
      <p>
        With the explosion of AI technology and writing assistants, there is an entire set of options available in content creation. Most popular and in use include:
      </p>
      <p>
        Grammarly: If a given creator relies on one single AI-powered tool, it's probably Grammarly. Grammarly offers some perks to writers, including real-time spelling, grammar, and even tone suggestions. As with most AI-powered tools, it is still worth using with caution since its suggestions are not always correct.
      </p>
      <p>
        Jasper will eliminate a lot of the guesswork about who you are supposed to target with your message and what is supposed to be said in that message. It also helps speed up the creation process. Jasper is not 100% accurate, and some creators argue that Jasper is expensive. It's also fast, accessible, and free, which are three great assets in a content creation program, particularly for those with limited exposure to AI. Meanwhile, it does tend to err. Plus, the more familiar people become with ChatGPT, the easier it gets to identify the content it creates.
      </p>
      <p>
        Midjourney: For creators looking to pull from an endless stash of fresh artwork to accompany their blog posts, social media shares, or client copy, Midjourney is a great asset to have in the back pocket. You actually need to have a fairly good handle on Discord to engage with it, and this is pretty overwhelming for new people.
      </p>
      <h3>Do AI-based content detectors even work?</h3>
      <p>
        Special AI content detection tools, such as Originality AI and GPT Zero, boast functionality enabling them to detect AI-generated content. However, the fact remains that the so-called 'detection' tools do their magic through the limited scanning of specific patterns in content that human writers are more likely to use. This means results obtained can never be taken completely for granted; rather, they must be viewed with a grain of salt.
      </p>
      <p>
        For content managers who want an easy way to spot potential AI content, look for common tells like:
      </p>
      <ul>
        <li>Weird phrasing and puffery</li>
        <li>Repetition and circular talking</li>
        <li>Predictable flow and sentence progression</li>
        <li>Noticeable lack of depth, personality, or human insight</li>
      </ul>
      <h3>Ethical concerns with AI-generated content</h3>
      <p>
        As exciting and useful the generative AI technology may be, it also means that it is very important for writers and content managers alike to be very conscious of how they apply it. Currently, most LLMs used in training AI tools present ethical and copyright issues. The ease and access to generative AI are influencing the livelihood of real human writers, too, and for that reason if no other, all the more it is in everyone's best interest to commit to ethical, responsible use of AI tools. Here are some best practices and tips to keep in mind:
      </p>
      <ul>
        <li>And instead of the headliner, make AI the supporting player in your ongoing creation routine. Ethically, AI is best used in support of human creativity rather than displacing it.</li>
        <li>Content created by AI should always pass through a human's hands before publication, meaning at least revised and meticulously polished by an experienced human editor.</li>
        <li>If the created content is either 100% AI or contains a sizable amount of AI-generated material, it would be ethical to disclose this to your audience, clients, publisher, etc.-pretty much anyone who may have a vested interest in the origin of what has been written.</li>
        <li>Don't use AI to steal other writers', artists', and creators' styles; use it to enhance your unique style and bring the best out of it.</li>
      </ul>
      <p>
        Responsible creators, of course, verify the accuracy of this information, running it through standard fact-checking procedures, checking for potential plagiarism issues, and so on, before actually making use of it. They further recommend scanning the output for cultural and ethnic or, say, gender-based biases that otherwise stand to alienate the readers.
      </p>
      <h3>Practical Tips and Best Practices for Integrating AI Into Your Workflow</h3>
      <p>
        Ready to make today's hottest AI tools and platforms a part of your brand's ongoing workflow? Consider the following expert tips and best practices for putting AI to work for you.
      </p>
      <h4>Leverage AI for repetitive tasks</h4>
      <p>
        AI is great to automate processes that can be monotonous for humans, speed up those processes, and take away all possibilities of human errors. Data sorting and analysis are great examples of this. A lot of content marketing teams use it for automating email marketing campaigns, segmenting customer databases, and discovering important consumer or web visitor behavior patterns.
      </p>
      <h4>Start Small and Take It from There</h4>
      <p>
        Like with all new equipment and marketing methodologies, techniques, and tools powered by AI are best adopted one step at a time. Pinpoint one or two tasks you could use some help with, and experiment a little to get a feel for what really works. To achieve the best outcome, make sure you pick use cases well-aligned with your long-term goals in content marketing and your overall business objectives.
      </p>
      <h4>Engage key team members</h4>
      <p>
        Consider the potential resistance to change if you have a larger content production team. Many people don't handle change well under the best of circumstances, and there are certainly some that are nervous about the use of AI. Try to involve as many leadership and management personnel in the integration process as you can, and try and come up with a plan for making the transition smooth for the team.
      </p>
      <p>
        No two brands are alike; therefore, no two content-creation approaches should be either. What works like gangbusters for your peers may not work for you at all when it comes to deciding where AI fits into your workflow. For instance, if you don't really have a need for AI-created written content but could really benefit from a way to generate original images, skip ChatGPT and go with something like Midjourney or DALL-E. Try some different approaches on for size, to see what's the best fit for your brand.
      </p>
      <h4>Embrace ways to make your work different</h4>
      <p>
        Therefore, if you are a content writer, you should get AI content; but go into it fully aware of the fallibility at play. The three great risks of AI content are woodenness, errors, and shallowness. It's perfectly okay to let AI do the heavy lifting with stitching together a great potential article, but it's up to you to add that panache of personality, depth, skill, and creativity that only a human writer can provide. Consider how you might bring the best of those into AI content to breathe life and vibrancy into it.
      </p>
      <p>
        It's worth considering ways in which one can make themselves stand apart as content creator and service provider. Basic writing skills don't quite cut it in an era where the client can literally go to ChatGPT and get some free content that more or less does the bare minimum. Specialize in a niche, dedicate your focus to a unique quality only one's writing has, or find another way to set yourself apart.
      </p>
    </>
  ),
  "digital-marketing": (
    <>
      <p className="text-body-lg font-medium mb-8">
        The Ultimate Guide to Digital Marketing in 2024
      </p>
      <p>
        In today's hyper-connected world, having a digital presence is no longer an option—it's a necessity. Digital marketing has evolved beyond simple banner ads and email newsletters into a complex ecosystem of search engines, social media platforms, content, and data analytics. At Tech Ghuru, we help brands navigate this ever-changing landscape to drive meaningful growth.
      </p>
      <h3>Understanding the Digital Marketing Ecosystem</h3>
      <p>
        Digital marketing is the practice of promoting products or services using digital channels to reach consumers. The key components include:
      </p>
      <ul>
        <li><strong>Search Engine Optimization (SEO):</strong> Optimizing your website to rank higher in search engine results pages.</li>
        <li><strong>Pay-Per-Click (PPC) Advertising:</strong> Driving targeted traffic through sponsored ads.</li>
        <li><strong>Content Marketing:</strong> Creating and distributing valuable content to attract and retain a clearly defined audience.</li>
        <li><strong>Social Media Marketing:</strong> Leveraging platforms like Instagram, LinkedIn, and TikTok to build brand awareness.</li>
      </ul>
      <h3>The Power of Data-Driven Decisions</h3>
      <p>
        One of the biggest advantages of digital marketing over traditional marketing is the ability to track and analyze data in real-time. By leveraging analytics tools, brands can understand user behavior, measure campaign effectiveness, and optimize their strategies for better ROI.
      </p>
      <h3>Content is King, but Context is Queen</h3>
      <p>
        While creating high-quality content is crucial, delivering it to the right audience at the right time is equally important. Personalization and contextual targeting allow brands to cut through the noise and deliver relevant messages that resonate with their target demographic.
      </p>
      <h3>The Rise of Video Marketing</h3>
      <p>
        Video continues to dominate digital consumption. From short-form content on TikTok and Instagram Reels to in-depth YouTube tutorials, incorporating video into your digital marketing strategy is essential for capturing attention and driving engagement.
      </p>
      <h3>Building a Holistic Strategy</h3>
      <p>
        Success in digital marketing requires a cohesive approach. Rather than treating each channel in isolation, brands must integrate their efforts across all touchpoints to create a seamless customer journey. At Tech Ghuru, we specialize in crafting comprehensive digital marketing strategies that align with your business goals and deliver measurable results.
      </p>
      <h3>Conclusion</h3>
      <p>
        Digital marketing is a dynamic field that demands continuous learning and adaptation. By staying ahead of trends and leveraging the right mix of channels, brands can establish a strong online presence and drive sustainable growth.
      </p>
    </>
  ),
  "product-photoshoot": (
    <>
      <p className="text-body-lg font-medium mb-8">
        In the ever-evolving realm of product photography, innovative and creative ideas for capturing product images
      </p>
      <p>
        Capturing product images is an innovative and creative idea taking an impetus as a well-known attribute in this evolving circle of product photography. To keep up with demand on e-commerce sites, social networks, and other digital platforms that keeps growing with each passing day, photographers are in race to create visuals that will gain attention and stand apart from the rest. This article has reached out to the deep to assess some of the anticipated trends in product photography in 2023, which include the use of AI-enabled cameras and drones, amongst other peculiar styling strategies that involve flat lays and minimalist backgrounds. Undoubtedly, these coming trends in product photography provide a thrilling perspective for budding product photographers.
      </p>
      <h3>Minimalist Product Photography</h3>
      <p>
        Product photography is fast becoming a favored style of late, wherein the actual product is brought to center stage with few or no distracting elements. It involves using backgrounds made of neutral tones such as white, black, and gray together with a very minimal amount of props. This keeps the focus all on the product, adding to its aesthetic value and resulting in a bold and beautiful photograph.
      </p>
      <h3>Flat Lay Product Photography</h3>
      <p>
        Flat lay product photography is one of the most popular photo trends in 2023. Flat lay photography involves capturing your product shots from above with added props, color, and texture for interesting visuals. From product pages and reviews to social media posts, its applications span an entire gamut. With this technique, product photographers are able to create some pretty unique visuals that nobody will have like their competition.
      </p>
      <h3>AI-Powered Product Photography</h3>
      <p>
        Till 2023, AI-enabled product photography is very much likely to be one of the leading trends where cameras get further intelligent to produce perfect and high-definition product photography. With the aid of face recognition software, such AI-enabled cameras would identify the elements of a product to render immaculate product photos which will surely thrill the buyers.
      </p>
      <h3>Lifestyle product photography</h3>
      <p>
        Lately, the photographic shooting of lifestyle products has become very popular. In this product photography trend, the products are depicted under real-life circumstances where the customer can easily imagine having it all with themselves. Product photographs are taken in natural environments, outdoors as well as inside the residence to let the photographer take pictures as realistically possible which the customer can relate to with more depth.
      </p>
      <p>
        A concept like 360-degree product photography will gather steam in the year 2023. This method gives product photographers the ability to shoot products from all sides, thus enabling clients with a surrounding view of a product. With this practical technique, photographers are capable of delivering much more engaging and stimulating product photography rather than ordinary product photography.
      </p>
      <p>
        Are you looking for mind-blowing product photography? Then, look nowhere else. Tech Ghuru is one of the best product photography companies in Chennai. Our creative team can produce stunning visual art with the hottest trends in the industry. Whether you want to show your products on e-commerce websites, social media platforms, or other digital platforms, we make sure our images will catch your customer's eye and stick with them. Don't let this opportunity slip away; get in touch with us today for further details.
      </p>
    </>
  ),
  "link-building-strategies": (
    <>
      {" "}
      <p className="text-body-lg font-medium mb-8">
        Domain Authority remains one of the strongest ranking signals in search,
        but the tactics to acquire high-quality backlinks have completely
        transformed. Manipulative tactics are heavily penalized; the new era is
        about earning links through value.
      </p>{" "}
      <h3>Digital PR as the New Link Building</h3>{" "}
      <p>
        The most powerful links come from top-tier publications. We utilize data
        journalism, creating compelling, proprietary studies and surveys that
        journalists naturally want to reference in their reporting.
      </p>{" "}
      <ul>
        {" "}
        <li>
          <strong>Resource Pages:</strong> Building definitive, un-ignorable
          guides that serve as industry benchmarks.
        </li>{" "}
        <li>
          <strong>Unlinked Mentions:</strong> Monitoring the web for brand
          mentions and converting them into active links.
        </li>{" "}
        <li>
          <strong>Strategic Partnerships:</strong> Co-authoring content with
          adjacent, non-competing brands in your space.
        </li>{" "}
      </ul>{" "}
      <h3>Quality Over Quantity</h3>{" "}
      <p>
        One contextual link from a DR 80+ industry authority is worth a hundred
        low-quality directory links. Our strategy focuses entirely on
        sustainable, white-hat acquisition that builds long-term organic moats
        around your core search terms.
      </p>{" "}
    </>
  ),
};
const blogInfo: Record<string, string[]> = Object.fromEntries(
  articles.map((a) => [a[3], [a[0], a[1], a[2]]]),
);
export function BlogPost({ slug }: { slug: string }) {
  const [category, title, desc] = blogInfo[slug] || [
    "Blog",
    "Article Not Found",
    "",
  ];
  const content = blogContent[slug] || <p>Full article content coming soon.</p>;
  const otherArticles = articles.filter((a) => a[3] !== slug).slice(0, 5);
  return (
    <>
      {" "}
      <section className="pt-16 pb-16 lg:pt-20 lg:pb-12 overflow-hidden relative bg-surface">
        {" "}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>{" "}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>{" "}
        <div className="max-w-[1280px] mx-auto px-gutter relative z-10">
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {" "}
            <div className="space-y-8">
              {" "}
              <Reveal>
                {" "}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/20 text-primary text-label-sm font-bold tracking-widest uppercase shadow-sm border border-primary/10">
                  {" "}
                  {category}{" "}
                </div>{" "}
              </Reveal>{" "}
              <Reveal delay={100}>
                {" "}
                <h1 className="font-display-xl text-display-xl">
                  {" "}
                  {title}{" "}
                </h1>{" "}
              </Reveal>{" "}
              <Reveal delay={200}>
                {" "}
                <div className="flex flex-wrap items-center gap-6 text-on-surface-variant font-body-md text-sm pt-6 border-t border-outline-variant/30">
                  {" "}
                  <div className="flex items-center gap-3">
                    {" "}
                    <div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center text-primary">
                      {" "}
                      <span className="material-symbols-outlined font-headline-sm text-headline-sm">
                        person
                      </span>{" "}
                    </div>{" "}
                    <div className="flex flex-col">
                      {" "}
                      <span className="font-bold text-on-surface">
                        Tech Ghuru
                      </span>{" "}
                      <span className="text-xs">Editorial Team</span>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="h-8 w-px bg-outline-variant/30 hidden sm:block"></div>{" "}
                  <div className="flex items-center gap-4">
                    {" "}
                    <span className="flex items-center gap-1.5">
                      {" "}
                      <span className="material-symbols-outlined font-body-md text-body-md">
                        calendar_today
                      </span>{" "}
                      Oct 9, 2026{" "}
                    </span>{" "}
                    <span className="flex items-center gap-1.5">
                      {" "}
                      <span className="material-symbols-outlined font-body-md text-body-md">
                        timer
                      </span>{" "}
                      {desc}{" "}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </Reveal>{" "}
            </div>{" "}
            <Reveal delay={300}>
              {" "}
              <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/20 aspect-[4/3] lg:aspect-auto lg:h-[500px]">
                {" "}
                <img
                  src={`/blog-${slug}.jpg`}
                  alt={title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>{" "}
              </div>{" "}
            </Reveal>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <style
        dangerouslySetInnerHTML={{
          __html: ` .blog-body { font-size: 1.1875rem; line-height: 1.85; color: var(--on-surface-variant); } .blog-body > p:first-of-type { font-size: 1.5rem; line-height: 1.6; color: var(--on-surface); font-weight: 300; margin-bottom: 2.5rem; } .blog-body > p:first-of-type::first-letter { font-family: Outfit, sans-serif; float: left; font-size: 5rem; line-height: 0.8; margin-right: 0.75rem; font-weight: 700; color: var(--primary); } .blog-body h3 { font-family: Outfit, sans-serif; font-size: 2rem; margin: 3.5rem 0 1.25rem 0; color: var(--on-surface); font-weight: 700; letter-spacing: -0.02em; } .blog-body p { margin-bottom: 1.75rem; } .blog-body ul { margin-bottom: 2rem; padding-left: 1.5rem; border-left: 2px solid var(--primary-container); } .blog-body li { margin-bottom: 0.75rem; padding-left: 0.5rem; } .blog-body strong { color: var(--on-surface); font-weight: 700; } .blog-body blockquote { font-family: Outfit, sans-serif; font-size: 1.5rem; font-style: italic; color: var(--on-surface); border-left: 4px solid var(--primary); margin: 3rem 0; padding: 1rem 0 1rem 2rem; background: var(--surface-container-lowest); border-radius: 0 1rem 1rem 0; } `,
        }}
      />{" "}
      <section className="py-16 lg:py-12 relative z-10 bg-surface">
        {" "}
        <div className="max-w-[1280px] mx-auto px-gutter flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {" "}
          {/* Main Content Column */}{" "}
          <div className="flex-[2] min-w-0 w-full">
            {" "}
            <div className="blog-body"> {content} </div>{" "}
            <div className="mt-16 pt-8 border-t border-outline-variant/30">
              {" "}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-label-md font-semibold text-primary hover:-translate-x-1 transition-transform"
              >
                {" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_back
                </span>{" "}
                Back to the journal{" "}
              </Link>{" "}
            </div>{" "}
          </div>{" "}
          {/* Sidebar Column */}{" "}
          <div className="flex-1 w-full lg:max-w-[400px] lg:sticky lg:top-32 space-y-8">
            {" "}
            <div className="bg-surface-container-low rounded-3xl p-8 border border-outline-variant/30 shadow-sm">
              {" "}
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-6 pb-4 border-b border-outline-variant/30 uppercase tracking-widest">
                {" "}
                Recent Blogs{" "}
              </h3>{" "}
              <div className="flex flex-col space-y-6">
                {" "}
                {otherArticles.map((article) => (
                  <Link
                    href={`/blog/${article[3]}`}
                    key={article[3]}
                    className="group flex gap-4 items-center"
                  >
                    {" "}
                    {article[4] ? (
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-sm border border-outline-variant/20 bg-surface-container">
                        {" "}
                        <img
                          src={article[4]}
                          alt={article[0]}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />{" "}
                      </div>
                    ) : (
                      <div className="w-24 h-24 bg-surface-container rounded-2xl shrink-0 border border-outline-variant/20" />
                    )}{" "}
                    <div className="flex-1 min-w-0">
                      {" "}
                      <div className="text-label-sm text-primary font-bold tracking-wider uppercase mb-1.5">
                        {" "}
                        {article[0]}{" "}
                      </div>{" "}
                      <h4 className="font-headline-sm font-body-sm text-body-sm text-on-surface font-semibold group-hover:text-primary transition-colors leading-tight line-clamp-2">
                        {" "}
                        {article[1]}{" "}
                      </h4>{" "}
                      <div className="font-body-sm font-label-sm text-label-sm text-on-surface-variant mt-2 flex items-center gap-1.5">
                        {" "}
                        <span className="material-symbols-outlined font-body-sm text-body-sm">
                          timer
                        </span>{" "}
                        {article[2]}{" "}
                      </div>{" "}
                    </div>{" "}
                  </Link>
                ))}{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </>
  );
}
function AboutPage() {
  return (
    <div className="bg-surface min-h-screen text-on-surface">
      {" "}
      {/* 1. Hero Section */}{" "}
      <section className="pt-16 pb-8 lg:pt-12 lg:pb-12 overflow-hidden relative">
        {" "}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>{" "}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>{" "}
        <div className="max-w-[1280px] mx-auto px-gutter relative z-10">
          {" "}
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {" "}
            <Reveal>
              {" "}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/20 text-primary text-label-sm font-bold tracking-widest uppercase shadow-sm border border-primary/10">
                {" "}
                THE BEST IT SOLUTIONS{" "}
              </div>{" "}
            </Reveal>{" "}
            <Reveal delay={100}>
              {" "}
              <h1 className="font-display-xl text-display-xl">
                {" "}
                About
                <br />{" "}
                <span className="text-primary italic ">Us.</span>{" "}
              </h1>{" "}
            </Reveal>{" "}
            <Reveal delay={200}>
              {" "}
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mx-auto max-w-2xl">
                {" "}
                Tech Ghuru is a leading global IT Solutions company that offers
                web development, digital marketing, and multimedia services. We
                are dedicated, passionate service providers offering the best
                industry practices synced with technology expertise.{" "}
              </p>{" "}
            </Reveal>{" "}
            <Reveal delay={300}>
              {" "}
              <div className="pt-8 flex items-center justify-center gap-12">
                {" "}
                <div className="flex flex-col">
                  {" "}
                  <span className="text-display-lg font-bold text-primary">
                    6+
                  </span>{" "}
                  <span className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mt-2">
                    Years Experience
                  </span>{" "}
                </div>{" "}
                <div className="w-px h-16 bg-outline-variant/50"></div>{" "}
                <div className="flex flex-col">
                  {" "}
                  <span className="text-display-lg font-bold text-primary">
                    200+
                  </span>{" "}
                  <span className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider mt-2">
                    Projects Delivered
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </Reveal>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 2. Philosophy & Upgrade Section */}{" "}
      <section className="pt-12 pb-16 relative bg-surface">
        {" "}
        <div className="max-w-[1280px] mx-auto px-gutter">
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {" "}
            <Reveal delay={200}>
              {" "}
              <div className="flex flex-col items-center justify-center">
                {" "}
                {/* Image without a box */}{" "}
                <div className="w-full max-w-lg mx-auto">
                  {" "}
                  <img
                    src="/placeholder-1.svg"
                    alt="Collaboration Illustration"
                    className="w-full h-auto object-contain mix-blend-multiply"
                  />{" "}
                </div>{" "}
                {/* Let's talk about it button */}
                <div className="mt-8">
                  <Button href="/contact" className="bg-[#eb5d1e] text-white hover:bg-[#d64d14] rounded-[12px] px-8 py-3.5 flex items-center gap-2 inline-flex border-none font-bold shadow-[0_4px_15px_rgba(235,93,30,0.3)] group w-max">
                    Contact Us
                  </Button>
                </div>
              </div>{" "}
            </Reveal>{" "}
            <Reveal delay={200}>
              {" "}
              <div className="space-y-8">
                {" "}
                <h2 className="font-headline-lg text-display-lg font-bold text-on-surface tracking-tight leading-[1.15]">
                  {" "}
                  Upgrade your
                  <br />{" "}
                  <span className="text-primary italic ">
                    IT Solutions.
                  </span>{" "}
                </h2>{" "}
                <p className="font-body-lg text-on-surface-variant leading-relaxed max-w-lg">
                  {" "}
                  Upgrade your IT Solutions by collaborating with a
                  highly-skilled, experienced, hand-picked team of experts. We
                  ensure your project is in your hands on time at an affordable
                  price.{" "}
                </p>{" "}
                <div className="flex flex-wrap gap-3">
                  {" "}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container border border-outline-variant/30 text-on-surface font-semibold text-sm shadow-sm hover:-translate-y-0.5 transition-transform">
                    {" "}
                    <img
                      src="https://cdn.simpleicons.org/claude/D97757"
                      width="16"
                      height="16"
                      alt="Claude"
                    />{" "}
                    Claude{" "}
                  </div>{" "}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container border border-outline-variant/30 text-on-surface font-semibold text-sm shadow-sm hover:-translate-y-0.5 transition-transform">
                    {" "}
                    <img
                      src="/antigravity-logo.png"
                      width="16"
                      height="16"
                      alt="Antigravity"
                    />{" "}
                    Antigravity{" "}
                  </div>{" "}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container border border-outline-variant/30 text-on-surface font-semibold text-sm shadow-sm hover:-translate-y-0.5 transition-transform">
                    {" "}
                    <img
                      src="https://cdn.simpleicons.org/googleads"
                      width="16"
                      height="16"
                      alt="Google Ads"
                    />{" "}
                    Google Ads{" "}
                  </div>{" "}
                </div>{" "}
                <div className="pt-4">
                  {" "}
                  <Button href="/contact" className="bg-[#eb5d1e] text-white hover:bg-[#d64d14] rounded-[12px] px-8 py-3.5 flex items-center gap-2 inline-flex border-none font-bold shadow-[0_4px_15px_rgba(235,93,30,0.3)] group w-max">
                    Call to ask any question: +91 88259 48859
                  </Button>{" "}
                </div>{" "}
              </div>{" "}
            </Reveal>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 3. Highlights Section */}{" "}
      <section className="pt-12 pb-12 relative overflow-hidden bg-surface">
        {" "}
        <div className="max-w-[1280px] mx-auto px-gutter">
          {" "}
          <Reveal>
            {" "}
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              {" "}
              <span className="font-label-md text-primary font-bold tracking-widest uppercase">
                Why Choose Us
              </span>{" "}
              <h2 className="font-headline-lg text-display-lg font-bold text-on-surface tracking-tight">
                Highlights & Features
              </h2>{" "}
            </div>{" "}
          </Reveal>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {" "}
            {[
              {
                num: "01",
                title: "Award Winning",
                desc: "Recognized for our excellence in delivering top-tier digital solutions worldwide.",
                icon: "military_tech",
              },
              {
                num: "02",
                title: "Professional Staff",
                desc: "A hand-picked team of dedicated experts synced with industry best practices.",
                icon: "group",
              },
              {
                num: "03",
                title: "24/7 Support",
                desc: "We are always here to help you scale your business, day or night.",
                icon: "support_agent",
              },
              {
                num: "04",
                title: "Fair Prices",
                desc: "World-class digital transformations delivered on time and at an affordable price.",
                icon: "payments",
              },
            ].map((item, i) => (
              <Reveal key={item.num} delay={i * 100}>
                {" "}
                <div className="group h-full bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  {" "}
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    {" "}
                    <span className=" text-8xl font-black italic">
                      {item.num}
                    </span>{" "}
                  </div>{" "}
                  <div className="w-14 h-14 rounded-2xl bg-primary-container/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    {" "}
                    <span className="material-symbols-outlined font-headline-md text-headline-md">
                      {item.icon}
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-sm text-body-lg font-bold text-on-surface mb-3 relative z-10">
                    {item.title}
                  </h3>{" "}
                  <p className="font-body-md text-on-surface-variant leading-relaxed relative z-10">
                    {item.desc}
                  </p>{" "}
                </div>{" "}
              </Reveal>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <CTA />{" "}
    </div>
  );
}
const serviceInfo: Record<string, any> = {};
services.forEach((s) => {
  serviceInfo[s.slug] = {
    title: s.title,
    name: s.title,
    headline: "Transformative " + s.title + " Built for Growth",
    overview: s.desc,
    services: [
      { title: "Strategy", desc: "Custom roadmap" },
      { title: "Execution", desc: "Expert delivery" },
    ],
    features: s.features.map((f) => [f, "Details"]),
    workflow: ["Discovery", "Execution", "Launch"],
    metrics: [{ label: "Growth", value: "2x" }],
    trendingFeatures: ["AI", "Cloud"],
    technologies: ["React", "Next.js"],
    pills: ["Scalable", "Secure"],
  };
});
const pages: Record<string, any> = {
  services: { title: "Services", description: "Our expert services" },
  features: { title: "Features", description: "Why choose us" },
  portfolio: { title: "Portfolio", description: "Our recent works" },
};
export function PortfolioPage() {
  return (
    <main className="w-full pt-16 pb-12 relative overflow-hidden bg-surface min-h-[calc(100vh-80px)]">
      {" "}
      <div className="max-w-[1280px] mx-auto px-gutter">
        {" "}
        {/* Header Section */}{" "}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          {" "}
          <div className="space-y-6 max-w-3xl">
            {" "}
            <Reveal>
              {" "}
              <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase">
                {" "}
                <div className="w-2 h-2 rounded-full bg-primary"></div> SELECTED
                CASE STUDIES{" "}
              </div>{" "}
            </Reveal>{" "}
            <Reveal delay={100}>
              {" "}
              <h1 className="font-display-xl text-display-xl">
                {" "}
                Our Portfolio — What
                <br />
                We Do{" "}
              </h1>{" "}
            </Reveal>{" "}
            <Reveal delay={200}>
              {" "}
              <p className="text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                {" "}
                A showcase of engineering excellence, high-converting digital
                products, and brand transformations.{" "}
              </p>{" "}
            </Reveal>{" "}
          </div>{" "}
          <Reveal delay={300}>
            {" "}
            <div className="flex items-center gap-4 bg-surface/60 backdrop-blur-md border border-outline-variant/30 px-6 py-4 rounded-full shadow-sm">
              {" "}
              <div className="w-10 h-10 rounded-full bg-primary-container/40 flex items-center justify-center text-primary">
                {" "}
                <span className="material-symbols-outlined font-headline-sm text-headline-sm">
                  verified
                </span>{" "}
              </div>{" "}
              <div className="flex flex-col">
                {" "}
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                  QUALITY STANDARD
                </span>{" "}
                <span className="font-body-sm text-body-sm font-bold text-on-surface">
                  ISO & HIPAA Ready
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </Reveal>{" "}
        </div>{" "}
        {/* Stats Grid */}{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {" "}
          <Reveal delay={100}>
            {" "}
            <div className="bg-surface rounded-3xl p-8 shadow-sm border border-outline-variant/20 flex flex-col justify-between h-[220px] hover:-translate-y-1 transition-transform">
              {" "}
              <div className="flex justify-between items-start">
                {" "}
                <div className="text-primary">
                  {" "}
                  <span className="material-symbols-outlined font-headline-lg text-headline-lg">
                    domain
                  </span>{" "}
                </div>{" "}
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                  GLOBAL SCOPE
                </span>{" "}
              </div>{" "}
              <div>
                {" "}
                <div className="font-display-xl text-display-xl font-bold text-primary leading-none mb-3 tracking-tight">
                  450<span className="font-display-xl text-display-xl">+</span>
                </div>{" "}
                <div className="font-body-sm text-body-sm font-bold text-on-surface">
                  Works Completed
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </Reveal>{" "}
          <Reveal delay={200}>
            {" "}
            <div className="bg-surface rounded-3xl p-8 shadow-sm border border-outline-variant/20 flex flex-col justify-between h-[220px] hover:-translate-y-1 transition-transform">
              {" "}
              <div className="flex justify-between items-start">
                {" "}
                <div className="text-primary">
                  {" "}
                  <span className="material-symbols-outlined font-headline-lg text-headline-lg">
                    groups
                  </span>{" "}
                </div>{" "}
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                  OUR TALENT
                </span>{" "}
              </div>{" "}
              <div>
                {" "}
                <div className="font-display-xl text-display-xl font-bold text-primary leading-none mb-3 tracking-tight">
                  15<span className="font-display-xl text-display-xl">+</span>
                </div>{" "}
                <div className="font-body-sm text-body-sm font-bold text-on-surface">
                  Expert Team Members
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </Reveal>{" "}
          <Reveal delay={300}>
            {" "}
            <div className="bg-surface rounded-3xl p-8 shadow-sm border border-outline-variant/20 flex flex-col justify-between h-[220px] hover:-translate-y-1 transition-transform">
              {" "}
              <div className="flex justify-between items-start">
                {" "}
                <div className="text-primary">
                  {" "}
                  <span className="material-symbols-outlined font-headline-lg text-headline-lg">
                    sentiment_very_satisfied
                  </span>{" "}
                </div>{" "}
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                  SATISFACTION
                </span>{" "}
              </div>{" "}
              <div>
                {" "}
                <div className="font-display-xl text-display-xl font-bold text-primary leading-none mb-3 tracking-tight">
                  550<span className="font-display-xl text-display-xl">+</span>
                </div>{" "}
                <div className="font-body-sm text-body-sm font-bold text-on-surface">
                  Happy Clients
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </Reveal>{" "}
          <Reveal delay={400}>
            {" "}
            <div className="bg-surface rounded-3xl p-8 shadow-sm border border-outline-variant/20 flex flex-col justify-between h-[220px] hover:-translate-y-1 transition-transform">
              {" "}
              <div className="flex justify-between items-start">
                {" "}
                <div className="text-primary">
                  {" "}
                  <span className="material-symbols-outlined font-headline-lg text-headline-lg">
                    military_tech
                  </span>{" "}
                </div>{" "}
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                  RECOGNITION
                </span>{" "}
              </div>{" "}
              <div>
                {" "}
                <div className="font-display-xl text-display-xl font-bold text-primary leading-none mb-3 tracking-tight">
                  36
                </div>{" "}
                <div className="font-body-sm text-body-sm font-bold text-on-surface">
                  Awards Received
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </Reveal>{" "}
        </div>{" "}
        {/* Gallery */}{" "}
        <div className="mb-12">
          {" "}
          <PortfolioGallery />{" "}
        </div>{" "}
        {/* Call to Action */} <CTA />{" "}
      </div>{" "}
    </main>
  );
}
export function RoutePage({ segments = [] }: { segments: string[] }) {
  const key = segments.join("/");
  const slug = segments.at(-1);
  if (serviceInfo[slug!] && segments[0] === "services")
    return <ServicePage slug={slug!} />;
  if (blogInfo[slug!] && segments[0] === "blog")
    return <BlogPost slug={slug!} />;
  if (key === "about") return <AboutPage />;
  if (key === "services")
    return (
      <>
        {" "}
        <section className="pt-16 pb-16 lg:pt-20 lg:pb-12 overflow-hidden relative bg-surface">
          {" "}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-primary-container/10 rounded-full blur-3xl -z-10"></div>{" "}
          <div className="max-w-[1280px] mx-auto px-gutter text-center space-y-6 relative z-10">
            {" "}
            <h1 className="font-display-xl text-display-xl">
              {" "}
              Our Services — Custom IT Solutions for
              <br />
              Your Successful Business{" "}
            </h1>{" "}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
              {" "}
              Our 360-degree digital expertise blends human-centered
              architectural engineering, conversion-focused creative
              intelligence, and resilient enterprise cloud solutions tailored
              for aggressive, compounding growth.{" "}
            </p>{" "}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 font-label-md text-label-md font-semibold text-on-surface">
              {" "}
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary font-body-md text-body-md">
                  check_circle
                </span>{" "}
                99.98% SLA Guaranteed
              </span>{" "}
              <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>{" "}
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary font-body-md text-body-md">
                  hub
                </span>{" "}
                Full Spectrum Stack
              </span>{" "}
              <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>{" "}
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary font-body-md text-body-md">
                  security
                </span>{" "}
                Enterprise Scalability
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="py-12 relative z-10 bg-surface">
          {" "}
          <div className="max-w-[1280px] mx-auto px-gutter">
            {" "}
            <ServicesGrid />{" "}
          </div>{" "}
        </section>{" "}
        <section className="py-16 relative z-10 bg-surface">
          {" "}
          <div className="max-w-[1280px] mx-auto px-gutter">
            {" "}
            <div className="bg-[#4a2411] text-white rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
              {" "}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 blur-3xl rounded-full -z-0"></div>{" "}
              <div className="w-full md:w-2/3 space-y-6 relative z-10">
                {" "}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-label-sm font-bold tracking-widest uppercase border border-white/20">
                  {" "}
                  <span className="material-symbols-outlined font-body-sm text-body-sm">
                    rocket_launch
                  </span>{" "}
                  READY FOR ELEVATION{" "}
                </div>{" "}
                <h2 className="font-headline-lg text-display-lg font-bold tracking-tight leading-[1.1] text-balance">
                  {" "}
                  Have a Custom Project in Mind?
                  <br />
                  Let's engineer your digital
                  <br />
                  roadmap together.{" "}
                </h2>{" "}
                <p className="font-body-md text-body-lg text-white/80 max-w-xl">
                  {" "}
                  From technical discovery through sprint-zero deployment, our
                  seasoned engineering and growth directors partner directly
                  with your internal leadership.{" "}
                </p>{" "}
              </div>{" "}
              <div className="w-full md:w-auto relative z-10 flex flex-col sm:flex-row items-center gap-4">
                {" "}
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-label-lg font-bold transition-colors whitespace-nowrap text-center"
                >
                  {" "}
                  Request Free Consultation{" "}
                </Link>{" "}
                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-label-lg font-bold transition-colors whitespace-nowrap text-center"
                >
                  {" "}
                  View Case Studies{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </>
    );
  if (key === "features")
    return (
      <>
        <PageHero {...pages.features} />
        <section className="py-12 relative z-10">
          <div className="max-w-[1280px] mx-auto px-gutter">
            <SectionTitle
              eyebrow="WHAT MAKES US, US"
              title={
                <>
                  A better kind of
                  <br />
                  <em>working together.</em>
                </>
              }
              copy="We bring the thinking and the doing together, with a little more care at every step."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
              {[
                [
                  "01",
                  "A real partnership",
                  "People who get close to the work and care about what it does.",
                ],
                [
                  "02",
                  "One connected team",
                  "Strategy, design, and development all pulling in the same direction.",
                ],
                [
                  "03",
                  "Made for your moment",
                  "No off-the-shelf answer. Just what your business actually needs.",
                ],
                [
                  "04",
                  "Room to grow",
                  "Flexible foundations that adapt as your ambitions get bigger.",
                ],
              ].map(([n, t, d], i) => (
                <Reveal
                  key={n}
                  delay={i * 100}
                  className={
                    ["from-left", "from-right", "from-top", "from-bottom"][
                      i % 4
                    ]
                  }
                >
                  <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30 space-y-4 shadow-sm hover:shadow-lg transition-shadow">
                    <b>{n}</b>
                    <h3>{t}</h3>
                    <p style={{ color: "#b4b8b0" }}>{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <CTA />
      </>
    );
  if (key === "portfolio") return <PortfolioPage />;
  if (key === "blog") return <BlogPage />;
  if (key === "contact") return <ContactPage />;
  if (key === "quote")
    return (
      <>
        <PageHero {...pages.quote} />
        <section className="py-12 relative z-10">
          <div className="max-w-[1280px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <Eyebrow>LET’S GET THE BALL ROLLING</Eyebrow>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                A few details.
                <br />
                <em>A better estimate.</em>
              </h2>
              <p style={{ color: "#73776c", lineHeight: 1.8, maxWidth: 350 }}>
                Tell us a little about your project and we’ll come back with the
                right questions, the right team, and a thoughtful next step.
              </p>
              <div className="space-y-4 mt-8">
                {[
                  "No-pressure first chat",
                  "A response within two working days",
                  "A team that listens first",
                ].map((t, i) => (
                  <Reveal
                    key={t}
                    delay={i * 100}
                    className={
                      ["from-left", "from-right", "from-top", "from-bottom"][
                        i % 4
                      ]
                    }
                  >
                    <div
                      className="flex items-center gap-3 font-body-lg text-body-lg text-on-surface"
                      key={t}
                    >
                      <Check size={15} className="text-primary" />
                      {t}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <QuoteWizard />
          </div>
        </section>
      </>
    );
  if (key === "consolation")
    return (
      <>
        <PageHero {...pages.consolation} />
        <section className="py-12 relative z-10">
          <div className="max-w-[1280px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <Eyebrow>45 MINUTES · NO COST</Eyebrow>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                One clear
                <br />
                <em>next step.</em>
              </h2>
              <p style={{ color: "#73776c", lineHeight: 1.8 }}>
                A friendly conversation about where you are, what’s getting in
                the way, and how we could help. Pick a time that works and we’ll
                take it from there.
              </p>
              <div className="grid grid-cols-1 gap-6 mt-12">
                {[
                  ["01", "Bring your questions", "No deck or prep needed."],
                  [
                    "02",
                    "Meet the right person",
                    "We’ll match you with someone who knows your challenge.",
                  ],
                  [
                    "03",
                    "Leave with clarity",
                    "A useful next step, whether we work together or not.",
                  ],
                ].map(([n, t, d], i) => (
                  <Reveal
                    key={n}
                    delay={i * 100}
                    className={
                      ["from-left", "from-right", "from-top", "from-bottom"][
                        i % 4
                      ]
                    }
                  >
                    <div
                      className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30 hover:border-primary/50 transition-colors"
                      key={n}
                    >
                      <Eyebrow>{n}</Eyebrow>
                      <h3>{t}</h3>
                      <p>{d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div
              className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/30 hover:border-primary/50 transition-colors"
              style={{
                minHeight: 400,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                background: "#e8eadf",
              }}
            >
              <div style={{ fontSize: 42, color: "#86a932" }}>◷</div>
              <h3 style={{ fontSize: 24 }}>Choose a time to connect</h3>
              <p style={{ maxWidth: 290 }}>
                Our booking calendar will appear here. For now, tell us when
                works best and we’ll be in touch.
              </p>
              <Button href="/contact">Request a time</Button>
            </div>
          </div>
        </section>
      </>
    );
  if (key === "careers") return <CareersPage />;
  if (key === "login")
    return (
      <>
        <PageHero
          eyebrow="WELCOME BACK"
          title={
            <>
              Log in to
              <br />
              <em>your account.</em>
            </>
          }
          desc="Enter your details to access your dashboard."
        />
        <section className="py-12 relative z-10">
          <div className="max-w-[1280px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="contact-info">
              <div>
                <small>NEED HELP?</small>
                <p>
                  If you don't have an account, please contact our support team.
                </p>
              </div>
            </div>
            <form className="form" action="#">
              <div className="field">
                <label>Email address</label>
                <input type="email" placeholder="you@yourcompany.com" />
              </div>
              <div className="field">
                <label>Password</label>
                <input type="password" placeholder="••••••••" />
              </div>
              <button className="button" type="button">
                Log in
                <ArrowUpRight size={16} />
              </button>
            </form>
          </div>
        </section>
      </>
    );
  return (
    <>
      <PageHero
        eyebrow="A NOTE FROM THE STUDIO"
        title={
          <>
            This page is
            <br />
            <em>still taking shape.</em>
          </>
        }
        desc="The page you’re looking for hasn’t made it onto the canvas yet. We’d be happy to point you in the right direction."
      />
      <section className="py-12 relative z-10">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <Button href="/">Back to the homepage</Button>
        </div>
      </section>
    </>
  );
}
export function HomePage() {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      {" "}
      <div className="flex flex-col w-full overflow-hidden bg-[#FFF7ED]">
        {" "}
        <div className="relative w-full">
          {" "}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-primary-container/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>{" "}
          <div className="absolute top-96 right-10 w-[420px] h-[420px] bg-secondary-container/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>{" "}
          <section className="max-w-[1280px] mx-auto px-gutter pt-space-xl pb-12 w-full">
            {" "}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
              {" "}
              <div className="lg:col-span-7 flex flex-col items-start space-y-space-md z-10">
                {" "}
                <div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-primary-container/10 backdrop-blur-md shadow-sm">
                  {" "}
                  <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>{" "}
                  <span className="font-label-sm text-label-sm text-primary tracking-wider uppercase font-semibold">
                    Engineering Next-Gen Digital Infrastructure
                  </span>{" "}
                </div>{" "}
                <div className="space-y-space-xs">
                  {" "}
                  <h1 className="font-display-xl text-display-xl text-on-surface tracking-tight font-bold">
                    {" "}
                    Tech Ghuru <br />{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
                      Digital Solutions
                    </span>{" "}
                  </h1>{" "}
                  <p className="font-headline-md text-headline-md text-secondary font-semibold max-w-xl">
                    {" "}
                    We Are Here to Grow Your Business Exponentially.{" "}
                  </p>{" "}
                </div>{" "}
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  {" "}
                  Delivering end-to-end custom IT services, mission-critical
                  digital transformations, and hyper-scalable software
                  architectures. We bridge ambitious corporate strategy with
                  robust, future-proof technical execution.{" "}
                </p>{" "}
                <div className="flex flex-wrap items-center gap-space-md pt-space-sm w-full sm:w-auto">
                  {" "}
                  <a
                    className="inline-flex items-center justify-center gap-space-xs bg-primary-container text-on-primary font-label-lg text-label-lg px-8 py-3.5 rounded-lg shadow-[0_10px_25px_-5px_rgba(249,115,22,0.4)] hover:-translate-y-1 hover:shadow-[0_16px_32px_-4px_rgba(249,115,22,0.5)] transition-all duration-300 group"
                    data-path="services"
                    href="#"
                  >
                    {" "}
                    <span>Our Services</span>{" "}
                    <span className="material-symbols-outlined font-body-md text-body-md group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>{" "}
                  </a>{" "}
                  <a
                    className="inline-flex items-center justify-center gap-space-xs bg-surface-container-lowest/80 backdrop-blur-md text-on-surface font-label-lg text-label-lg px-8 py-3.5 rounded-lg shadow-sm hover:bg-surface-container-lowest hover:shadow-md transition-all duration-300"
                    data-path="contact"
                    href="#"
                  >
                    {" "}
                    <span className="material-symbols-outlined font-body-md text-body-md text-primary">
                      forum
                    </span>{" "}
                    <span>Contact Us</span>{" "}
                  </a>{" "}
                </div>{" "}
                <div className="grid grid-cols-3 gap-space-lg pt-space-md max-w-lg w-full">
                  {" "}
                  <div className="space-y-0.5">
                    {" "}
                    <div className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
                      {"99.98%"}
                    </div>{" "}
                    <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                      System Uptime SLA
                    </div>{" "}
                  </div>{" "}
                  <div className="space-y-0.5">
                    {" "}
                    <div className="font-headline-lg text-headline-lg font-bold text-primary tracking-tight">
                      4.2x
                    </div>{" "}
                    <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                      Client Velocity
                    </div>{" "}
                  </div>{" "}
                  <div className="space-y-0.5">
                    {" "}
                    <div className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
                      &lt;85ms
                    </div>{" "}
                    <div className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                      P95 Micro-Latency
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
                <img
                  src="/Technology.svg"
                  alt="Tech Ghuru Cloud Architecture"
                  className="w-full h-auto drop-shadow-2xl scale-110 lg:scale-125"
                />
              </div>
            </div>
          </section>{" "}
        </div>{" "}
        <section className="w-full bg-surface-container-low/70 py-10">
          {" "}
          <div className="max-w-[1280px] mx-auto px-gutter">
            {" "}
            <p className="text-center font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant/80 font-semibold mb-8">
              {" "}
              Trusted by Leading Tech Enterprises &amp; Fast-Growing
              Startups{" "}
            </p>{" "}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              {" "}
              <div className="flex items-center gap-14 shrink-0 animate-[marquee_28s_linear_infinite] whitespace-nowrap min-w-full justify-around">
                {[
                  "blessence.png","brand03.png","brand1.png","dhara.jpeg","divine.jpeg",
                  "jaighurudevalogo.png","jaighurudevalogo.webp","joysontrust.png","mcars.png","meera filngs.png",
                  "miniso poster logo.png","mithra.jpeg","mk.png","newbrand3.png","NEWS GHURU LOGO PNG.png",
                  "PRS LOGO.png","sai.jpeg","school.png","sissers.png","sivajisons.png",
                  "uelogo.png","vrtech.png",
                  "blessence.png","brand03.png","brand1.png","dhara.jpeg","divine.jpeg",
                  "jaighurudevalogo.png","jaighurudevalogo.webp","joysontrust.png","mcars.png","meera filngs.png",
                  "miniso poster logo.png","mithra.jpeg","mk.png","newbrand3.png","NEWS GHURU LOGO PNG.png",
                  "PRS LOGO.png","sai.jpeg","school.png","sissers.png","sivajisons.png",
                  "uelogo.png","vrtech.png"
                ].map((brand, i) => (
                  <div key={i} className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity h-12 shrink-0 grayscale hover:grayscale-0">
                    <img src={`/brands/${brand}`} alt="Partner Brand" className="h-full w-auto object-contain" />
                  </div>
                ))}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="max-w-[1280px] mx-auto px-gutter py-12 w-full">
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {" "}
            <div className="lg:col-span-6 space-y-space-md">
              {" "}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-fixed/60 text-on-primary-fixed text-label-sm font-semibold tracking-wide uppercase">
                {" "}
                <span className="material-symbols-outlined font-body-md text-body-md text-primary">
                  history_edu
                </span>{" "}
                Proven Technical Authority{" "}
              </div>{" "}
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight leading-tight">
                {" "}
                The Best IT Solutions With{" "}
                <span className="text-primary">Six Years</span> of
                Experience{" "}
              </h2>{" "}
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {" "}
                At Tech Ghuru Digital Solutions, we engineer high-impact
                technical ecosystems engineered for stability, speed, and
                sustained business growth. By combining deep architectural
                expertise with agile deployment cycles, we empower organizations
                to modernize legacy systems, automate complex workflows, and
                innovate with total confidence.{" "}
              </p>{" "}
              <div className="space-y-3.5 pt-2">
                {" "}
                <div className="flex items-start gap-3">
                  {" "}
                  <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    {" "}
                    <span className="material-symbols-outlined font-body-sm text-body-sm">
                      check
                    </span>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                      Custom Bespoke Architecture:
                    </span>{" "}
                    <span className="font-body-md text-body-md text-on-surface-variant">
                      {" "}
                      Tailored software stacks that integrate flawlessly with
                      your existing enterprise systems.
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex items-start gap-3">
                  {" "}
                  <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    {" "}
                    <span className="material-symbols-outlined font-body-sm text-body-sm">
                      check
                    </span>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                      End-to-End Governance:
                    </span>{" "}
                    <span className="font-body-md text-body-md text-on-surface-variant">
                      {" "}
                      Strict compliance, CI/CD automated deployments, and
                      institutional code reviews.
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex items-start gap-3">
                  {" "}
                  <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    {" "}
                    <span className="material-symbols-outlined font-body-sm text-body-sm">
                      check
                    </span>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                      Agile Engineering Pods:
                    </span>{" "}
                    <span className="font-body-md text-body-md text-on-surface-variant">
                      {" "}
                      Dedicated cross-functional development squads delivering
                      on accelerated roadmaps.
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {" "}
                <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
                  {" "}
                  <div className="font-headline-md text-headline-md font-bold text-primary">
                    {"6+ Years"}
                  </div>{" "}
                  <div className="font-label-sm text-label-sm text-secondary font-medium">
                    In Market Execution
                  </div>{" "}
                </div>{" "}
                <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
                  {" "}
                  <div className="font-headline-md text-headline-md font-bold text-on-surface">
                    150+
                  </div>{" "}
                  <div className="font-label-sm text-label-sm text-secondary font-medium">
                    Delivered Projects
                  </div>{" "}
                </div>{" "}
                <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
                  {" "}
                  <div className="font-headline-md text-headline-md font-bold text-primary">
                    99.8%
                  </div>{" "}
                  <div className="font-label-sm text-label-sm text-secondary font-medium">
                    Client Retention
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="lg:col-span-6 relative">
              {" "}
              <div className="relative w-full rounded-2xl overflow-hidden">
                {" "}
                <img
                  src="/webdev-animation.svg"
                  alt="Web Development"
                  className="w-full h-[480px] object-cover drop-shadow-xl"
                />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="w-full bg-surface-container-low/50 py-12">
          {" "}
          <div className="max-w-[1280px] mx-auto px-gutter">
            {" "}
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              {" "}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                {" "}
                <span className="material-symbols-outlined font-body-md text-body-md">
                  stars
                </span>{" "}
                Strategic Advantage{" "}
              </div>{" "}
              <h2 className="font-display-lg text-display-lg font-bold text-on-surface tracking-tight">
                {" "}
                Custom IT Solutions for Your Successful Business{" "}
              </h2>{" "}
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                {" "}
                Engineered for companies ready to disrupt categories, unlock
                scale, and sustain high velocity with zero compromises.{" "}
              </p>{" "}
            </div>{" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {" "}
              <div className="group bg-surface-container-lowest/80 backdrop-blur-xl rounded-2xl p-8 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_25px_-5px_rgba(249,115,22,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
                {" "}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary-container opacity-0 group-hover:opacity-100 transition-opacity"></div>{" "}
                <div className="space-y-5">
                  {" "}
                  <div className="w-14 h-14 rounded-xl bg-primary-container/15 text-primary flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary transition-colors shadow-sm">
                    {" "}
                    <span className="material-symbols-outlined text-headline-md">
                      bolt
                    </span>{" "}
                  </div>{" "}
                  <div className="space-y-2">
                    {" "}
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface group-hover:text-primary transition-colors">
                      {" "}
                      Fast Performance{" "}
                    </h3>{" "}
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" "}
                      Lightning-fast response times, edge-cached content
                      delivery networks, and radically optimized frontend
                      bundles designed to hit perfect 100/100 Core Web
                      Vitals.{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="group bg-surface-container-lowest/80 backdrop-blur-xl rounded-2xl p-8 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_25px_-5px_rgba(249,115,22,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
                {" "}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>{" "}
                <div className="space-y-5">
                  {" "}
                  <div className="w-14 h-14 rounded-xl bg-primary-fixed/60 text-on-primary-fixed flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors shadow-sm">
                    {" "}
                    <span className="material-symbols-outlined text-headline-md">
                      schema
                    </span>{" "}
                  </div>{" "}
                  <div className="space-y-2">
                    {" "}
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface group-hover:text-primary transition-colors">
                      {" "}
                      Scalable Architecture{" "}
                    </h3>{" "}
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" "}
                      Modular microservices, multi-tenant databases, Kubernetes
                      orchestration, and elastic compute matrices that
                      gracefully handle explosive traffic spikes with zero
                      service disruption.{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="group bg-surface-container-lowest/80 backdrop-blur-xl rounded-2xl p-8 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_25px_-5px_rgba(249,115,22,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
                {" "}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>{" "}
                <div className="space-y-5">
                  {" "}
                  <div className="w-14 h-14 rounded-xl bg-secondary-container/40 text-on-secondary-container flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-colors shadow-sm">
                    {" "}
                    <span className="material-symbols-outlined text-headline-md">
                      support_agent
                    </span>{" "}
                  </div>{" "}
                  <div className="space-y-2">
                    {" "}
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface group-hover:text-primary transition-colors">
                      {" "}
                      24/7 Dedicated Support{" "}
                    </h3>{" "}
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {" "}
                      Continuous proactive telemetry monitoring, guaranteed
                      15-minute emergency SLA response times, and dedicated lead
                      engineering pods standing by every hour of the year.{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        <section className="max-w-[1280px] mx-auto px-gutter py-12 w-full">
          {" "}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            {" "}
            <div className="space-y-2 max-w-xl">
              {" "}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/10 text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                {" "}
                <span className="material-symbols-outlined font-body-sm text-body-sm">
                  menu_book
                </span>{" "}
                Knowledge Hub{" "}
              </div>{" "}
              <h2 className="font-display-lg text-display-lg font-bold text-on-surface tracking-tight">
                {" "}
                Read The Latest Articles from Our Blog Post{" "}
              </h2>{" "}
            </div>{" "}
            <a
              className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-on-primary-container transition-colors group self-start md:self-auto"
              data-path="blog"
              href="#"
            >
              {" "}
              <span>View all blog posts</span>{" "}
              <span className="material-symbols-outlined text-body-lg group-hover:translate-x-1 transition-transform">
                arrow_right_alt
              </span>{" "}
            </a>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {" "}
            {articles.slice(0, 3).map((article) => (
              <Link
                key={article[3]}
                href={`/blog/${article[3]}`}
                className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_10px_15px_-3px_rgba(0,0,0,0.06)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                {" "}
                <div className="relative h-56 w-full overflow-hidden">
                  {" "}
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={article[0]}
                    src={article[4]}
                  />{" "}
                  <div className="absolute top-4 left-4">
                    {" "}
                    <span className="font-label-sm text-label-sm font-semibold uppercase px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary shadow-sm">
                      {" "}
                      {article[0]}{" "}
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  {" "}
                  <div className="space-y-3">
                    {" "}
                    <div className="flex items-center gap-3 text-xs text-on-surface-variant font-label-md">
                      {" "}
                      <span className="flex items-center gap-1">
                        {" "}
                        <span className="material-symbols-outlined text-sm">
                          schedule
                        </span>{" "}
                        {article[2]}{" "}
                      </span>{" "}
                      <span>•</span> <span>By Tech Ghuru</span>{" "}
                    </div>{" "}
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                      {" "}
                      {article[1]}{" "}
                    </h3>{" "}
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                      {" "}
                      Read our insights on {article[0].toLowerCase()} to learn
                      more about the industry trends and how it can help you
                      grow.{" "}
                    </p>{" "}
                  </div>{" "}
                  <div className="pt-4 flex items-center justify-between text-primary font-label-md text-label-md font-semibold">
                    {" "}
                    <span className="group-hover:underline">
                      Read full article
                    </span>{" "}
                    <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                      east
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </Link>
            ))}{" "}
          </div>{" "}
        </section>{" "}
        <section className="max-w-[1280px] mx-auto px-gutter pb-12 w-full">
          {" "}
          <div className="relative rounded-3xl bg-inverse-surface text-inverse-on-surface p-8 sm:p-14 overflow-hidden shadow-2xl">
            {" "}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary-container/30 rounded-full blur-[90px] pointer-events-none"></div>{" "}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {" "}
              <div className="lg:col-span-8 space-y-3">
                {" "}
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim font-semibold">
                  Ready to scale?
                </span>{" "}
                <h2 className="font-display-lg text-display-lg font-bold text-inverse-on-surface tracking-tight">
                  {" "}
                  Let’s Build Your Digital Advantage Together.{" "}
                </h2>{" "}
                <p className="font-body-lg text-body-lg text-surface-variant/80 max-w-xl">
                  {" "}
                  Book a complimentary architectural discovery session with our
                  senior engineers and discuss your business goals.{" "}
                </p>{" "}
              </div>{" "}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                {" "}
                <a
                  className="inline-flex items-center justify-center bg-primary-container hover:bg-primary text-on-primary font-label-lg text-label-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-center"
                  data-path="get-a-quote"
                  href="#"
                >
                  {" "}
                  Schedule Discovery Call{" "}
                </a>{" "}
                <a
                  className="inline-flex items-center justify-center bg-surface-variant/15 hover:bg-surface-variant/25 text-inverse-on-surface font-label-lg text-label-lg px-8 py-4 rounded-xl transition-colors text-center"
                  data-path="contact"
                  href="#"
                >
                  {" "}
                  Contact Engineering Team{" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </div>{" "}
    </main>
  );
}
export function ContactPage() {
  return (
    <main className="w-full bg-surface text-[#1a1a1a] selection:bg-[#eb5d1e] selection:text-white pb-16">
      {" "}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-16 lg:pt-20">
        {" "}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-10">
          {" "}
          {/* Left Section - Contact Info */}{" "}
          <div className="lg:w-5/12 flex flex-col gap-10">
            {" "}
            <div>
              {" "}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f8f6f0] text-[#1a1a1a] font-label-sm text-label-sm font-bold uppercase tracking-wider mb-6 border border-[#eaeaea]">
                {" "}
                <div className="w-1.5 h-1.5 bg-[#eb5d1e] rounded-full animate-pulse"></div>{" "}
                Direct Gateway{" "}
              </div>{" "}
              <h1 className="font-display-xl text-display-xl"> Reach Us </h1>{" "}
              <p className="text-[17px] text-[#555] leading-relaxed max-w-md">
                {" "}
                Ready to scale your business with custom IT solutions? Our team
                of engineers and designers is here to help architects of
                tomorrow build durable digital foundations.{" "}
              </p>{" "}
            </div>{" "}
            <div className="flex flex-col gap-6">
              {" "}
              {/* Phone */}{" "}
              <a
                href="tel:+918825948859"
                className="group p-6 bg-[#f8f6f0] border border-[#eaeaea] hover:border-[#d0d0d0] transition-colors relative"
              >
                {" "}
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#d0d0d0] opacity-0 group-hover:opacity-100 transition-opacity"></div>{" "}
                <div className="flex items-start gap-4">
                  {" "}
                  <div className="w-12 h-12 bg-white border border-[#eaeaea] flex items-center justify-center text-[#1a1a1a] shrink-0 group-hover:text-[#eb5d1e] transition-colors">
                    {" "}
                    <span className="material-symbols-outlined">call</span>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <div className="font-label-sm text-label-sm font-bold text-[#555] uppercase tracking-wider mb-1">
                      Direct Telephone
                    </div>{" "}
                    <div className="font-headline-sm text-headline-sm font-bold group-hover:text-[#eb5d1e] transition-colors">
                      +91 88259 48859
                    </div>{" "}
                    <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-[#555] mt-1">
                      {" "}
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>{" "}
                      Mon-Sat 9AM-8PM IST{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </a>{" "}
              {/* Email */}{" "}
              <div className="group p-6 bg-[#f8f6f0] border border-[#eaeaea] hover:border-[#d0d0d0] transition-colors relative">
                {" "}
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#d0d0d0] opacity-0 group-hover:opacity-100 transition-opacity"></div>{" "}
                <div className="flex items-start gap-4">
                  {" "}
                  <div className="w-12 h-12 bg-white border border-[#eaeaea] flex items-center justify-center text-[#1a1a1a] shrink-0 group-hover:text-[#eb5d1e] transition-colors">
                    {" "}
                    <span className="material-symbols-outlined">mail</span>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <div className="font-label-sm text-label-sm font-bold text-[#555] uppercase tracking-wider mb-1">
                      Inquiries &amp; Proposals
                    </div>{" "}
                    <div className="flex flex-col gap-1">
                      {" "}
                      <a
                        href="mailto:info@techghuru.com"
                        className="font-body-md text-body-md font-bold hover:text-[#eb5d1e] transition-colors"
                      >
                        info@techghuru.com
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              {/* Location */}{" "}
              <div className="group p-6 bg-[#f8f6f0] border border-[#eaeaea] hover:border-[#d0d0d0] transition-colors relative">
                {" "}
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#d0d0d0] opacity-0 group-hover:opacity-100 transition-opacity"></div>{" "}
                <div className="flex items-start gap-4">
                  {" "}
                  <div className="w-12 h-12 bg-white border border-[#eaeaea] flex items-center justify-center text-[#1a1a1a] shrink-0 group-hover:text-[#eb5d1e] transition-colors">
                    {" "}
                    <span className="material-symbols-outlined">
                      business
                    </span>{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <div className="font-label-sm text-label-sm font-bold text-[#555] uppercase tracking-wider mb-1">
                      Global Engineering HQ
                    </div>{" "}
                    <div className="font-body-sm text-body-sm leading-relaxed text-[#1a1a1a]">
                      Tech Ghuru Digital Solutions HQ,
                      <br />
                      Cyber Gateway Tech Park, Sector 4
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* Right Section - Form */}{" "}
          <div className="lg:w-7/12">
            {" "}
            <div className="bg-[#1a1a1a] text-white p-8 md:p-12 relative h-full flex flex-col">
              {" "}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#eb5d1e] to-[#ff8c5a]"></div>{" "}
              <div className="mb-10">
                {" "}
                <h2 className="font-headline-lg text-headline-lg">
                  Initiate Technical Consultation
                </h2>{" "}
                <p className="text-white/60 font-body-sm text-body-sm max-w-md">
                  {" "}
                  Fill in your initial parameters and our lead software
                  architects will prepare an architectural review for your
                  roadmap.{" "}
                </p>{" "}
              </div>{" "}
              <form
                className="space-y-6 flex-1 flex flex-col"
                id="contactForm"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                  const originalText = submitBtn.innerHTML;
                  
                  submitBtn.disabled = true;
                  submitBtn.innerHTML = 'Submitting...';

                  try {
                    const res = await fetch("/api/contact", {
                      method: "POST",
                      body: formData,
                    });
                    if (res.ok) {
                      document.getElementById("formSuccess")?.classList.remove("hidden");
                      form.reset();
                    } else {
                      alert("Something went wrong. Please try again.");
                    }
                  } catch (error) {
                    alert("Something went wrong. Please try again.");
                  } finally {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                  }
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-label-sm text-label-sm font-bold uppercase tracking-wider text-white/80 mb-2">
                      Full Name <span className="text-[#eb5d1e]">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Full Name"
                      className="w-full bg-white/5 border border-white/10 px-5 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#eb5d1e] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm font-bold uppercase tracking-wider text-white/80 mb-2">
                      Corporate Email <span className="text-[#eb5d1e]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Corporate Email"
                      className="w-full bg-white/5 border border-white/10 px-5 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#eb5d1e] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm font-bold uppercase tracking-wider text-white/80 mb-2">
                    Project Domain <span className="text-[#eb5d1e]">*</span>
                  </label>
                  <select
                    name="domain"
                    required
                    defaultValue=""
                    className="w-full bg-white/5 border border-white/10 px-5 py-3.5 text-white focus:outline-none focus:border-[#eb5d1e] transition-colors appearance-none cursor-pointer"
                  >
                    <option disabled value="" className="bg-[#1a1a1a] text-white/50">
                      Select engagement focus
                    </option>
                    <option value="Custom Web Development" className="bg-[#1a1a1a]">
                      Custom Web Development
                    </option>
                    <option value="Mobile App Design & Engineering" className="bg-[#1a1a1a]">
                      Mobile App Design & Engineering
                    </option>
                    <option value="Digital Marketing & Performance SEO" className="bg-[#1a1a1a]">
                      Digital Marketing & Performance SEO
                    </option>
                    <option value="Enterprise Software & Cloud Systems" className="bg-[#1a1a1a]">
                      Enterprise Software & Cloud Systems
                    </option>
                    <option value="Other Technical Query" className="bg-[#1a1a1a]">
                      Other Technical Query
                    </option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block font-label-sm text-label-sm font-bold uppercase tracking-wider text-white/80 mb-2">
                    Project Brief <span className="text-[#eb5d1e]">*</span>
                  </label>
                  <textarea
                    name="brief"
                    required
                    rows={5}
                    placeholder="Project Brief"
                    className="w-full h-full min-h-[120px] bg-white/5 border border-white/10 px-5 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#eb5d1e] transition-colors resize-none"
                  ></textarea>
                </div>
                <div
                  className="hidden bg-[#eb5d1e]/20 border border-[#eb5d1e]/30 text-white p-4 flex items-start gap-3 mt-4"
                  id="formSuccess"
                >
                  <span className="material-symbols-outlined text-[#eb5d1e]">
                    check_circle
                  </span>
                  <span className="font-body-sm text-body-sm">
                    Thank you! Your project brief has reached our solutions
                    architecture desk. We will reach back within 24 hours.
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#eb5d1e] text-white font-bold font-body-sm text-body-sm uppercase tracking-wider px-8 py-4 hover:bg-[#d64d14] disabled:opacity-70 disabled:cursor-not-allowed transition-colors mt-auto flex items-center justify-center gap-2"
                >
                  Submit Inquiry
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
                <div className="text-center text-white/40 font-label-sm text-label-sm flex items-center justify-center gap-1.5 mt-4">
                  <span className="material-symbols-outlined font-body-sm text-body-sm">
                    lock
                  </span>
                  We respect your privacy. Non-disclosure protected.
                </div>
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* FAQ Section */}{" "}
        <div className="pt-20 border-t border-dashed border-[#d0d0d0]">
          {" "}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            {" "}
            <div>
              {" "}
              <span className="text-[#eb5d1e] font-label-sm text-label-sm font-bold uppercase tracking-wider block mb-2">
                Clear Terms &amp; Smooth Starts
              </span>{" "}
              <h3 className="font-headline-md text-headline-md">
                Frequently Asked Questions
              </h3>{" "}
            </div>{" "}
            <p className="text-[#555] font-body-sm text-body-sm max-w-sm">
              {" "}
              Everything you need to know about our contract frameworks and
              turnaround milestones.{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {" "}
            <div className="p-8 bg-[#f8f6f0] border border-[#eaeaea] hover:border-[#d0d0d0] transition-colors flex flex-col justify-between">
              {" "}
              <div>
                {" "}
                <div className="w-10 h-10 bg-white border border-[#eaeaea] text-[#1a1a1a] flex items-center justify-center mb-6">
                  {" "}
                  <span className="material-symbols-outlined font-headline-sm text-headline-sm">
                    rocket_launch
                  </span>{" "}
                </div>{" "}
                <h4 className="font-body-md text-body-md font-bold mb-3 leading-tight">
                  What is the typical project onboarding timeline?
                </h4>{" "}
                <p className="text-[#555] font-body-sm text-body-sm leading-relaxed">
                  {" "}
                  Following your consultation, we submit an architectural spec
                  within 48 to 72 hours. Engineering sprints commence within 5
                  days.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="p-8 bg-[#f8f6f0] border border-[#eaeaea] hover:border-[#d0d0d0] transition-colors flex flex-col justify-between">
              {" "}
              <div>
                {" "}
                <div className="w-10 h-10 bg-white border border-[#eaeaea] text-[#1a1a1a] flex items-center justify-center mb-6">
                  {" "}
                  <span className="material-symbols-outlined font-headline-sm text-headline-sm">
                    policy
                  </span>{" "}
                </div>{" "}
                <h4 className="font-body-md text-body-md font-bold mb-3 leading-tight">
                  Do you sign formal mutual NDAs prior to discovery?
                </h4>{" "}
                <p className="text-[#555] font-body-sm text-body-sm leading-relaxed">
                  {" "}
                  Absolute confidentiality is foundational. We execute bilateral
                  Non-Disclosure Agreements before diving into your proprietary
                  infrastructure.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="p-8 bg-[#f8f6f0] border border-[#eaeaea] hover:border-[#d0d0d0] transition-colors flex flex-col justify-between">
              {" "}
              <div>
                {" "}
                <div className="w-10 h-10 bg-white border border-[#eaeaea] text-[#1a1a1a] flex items-center justify-center mb-6">
                  {" "}
                  <span className="material-symbols-outlined font-headline-sm text-headline-sm">
                    support_agent
                  </span>{" "}
                </div>{" "}
                <h4 className="font-body-md text-body-md font-bold mb-3 leading-tight">
                  How does post-launch maintenance operate?
                </h4>{" "}
                <p className="text-[#555] font-body-sm text-body-sm leading-relaxed">
                  {" "}
                  Every release includes a 60-day hyper-care warranty covering
                  bug mitigation and performance benchmarks.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
}
export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const categories = [
    "All Articles",
    "AI & Tech",
    "Marketing",
    "Engineering",
    "Creative",
  ];
  return (
    <main className="w-full bg-surface text-[#1a1a1a] selection:bg-[#eb5d1e] selection:text-white pb-16">
      {" "}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-16 lg:pt-20">
        {" "}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          {" "}
          <div className="max-w-2xl">
            {" "}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f8f6f0] text-[#1a1a1a] font-label-sm text-label-sm font-bold uppercase tracking-wider mb-6 border border-[#eaeaea]">
              {" "}
              <div className="w-1.5 h-1.5 bg-[#eb5d1e] rounded-full animate-pulse"></div>{" "}
              Thought Leadership{" "}
            </div>{" "}
            <h1 className="font-display-xl text-display-xl">
              {" "}
              Tech Ghuru Blog{" "}
            </h1>{" "}
            <p className="text-[17px] text-[#555] leading-relaxed max-w-xl">
              {" "}
              Insights, engineering deep-dives, marketing strategies, and
              creative innovations from our team.{" "}
            </p>{" "}
          </div>{" "}
          <div className="flex flex-wrap gap-2">
            {" "}
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 font-body-sm text-body-sm font-bold transition-all border ${activeCategory === cat ? "bg-[#eb5d1e] text-white border-[#eb5d1e]" : "bg-[#f8f6f0] text-[#555] border-[#eaeaea] hover:border-[#d0d0d0]"}`}
              >
                {" "}
                {cat}{" "}
              </button>
            ))}{" "}
          </div>{" "}
        </div>{" "}
        {/* Featured Story */}{" "}
        <div className="mb-10">
          {" "}
          <Link href={`/blog/${articles[0][3]}`} className="group block">
            {" "}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {" "}
              <div className="order-2 lg:order-1">
                {" "}
                <div className="flex items-center gap-3 font-label-sm text-label-sm font-bold text-[#555] uppercase tracking-wider mb-6">
                  {" "}
                  <span className="text-[#eb5d1e]">{articles[0][0]}</span>{" "}
                  <span className="text-[#d0d0d0]">/</span>{" "}
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined font-body-sm text-body-sm">
                      schedule
                    </span>{" "}
                    {articles[0][2]}
                  </span>{" "}
                  <span className="text-[#d0d0d0]">/</span>{" "}
                  <span>Featured</span>{" "}
                </div>{" "}
                <h2 className="font-headline-lg text-headline-lg">
                  {" "}
                  {articles[0][1]}{" "}
                </h2>{" "}
                <p className="text-[#555] font-body-md text-body-md leading-relaxed mb-8">
                  {" "}
                  Deep dive into the strategies and innovations driving success.
                  Discover the insights that our engineering and design teams
                  use to deliver top-tier results.{" "}
                </p>{" "}
                <div className="flex items-center justify-between pt-8 border-t border-dashed border-[#d0d0d0]">
                  {" "}
                  <div className="flex items-center gap-4">
                    {" "}
                    <div className="w-12 h-12 bg-[#f8f6f0] flex items-center justify-center text-[#1a1a1a] border border-[#eaeaea]">
                      {" "}
                      <span className="material-symbols-outlined">
                        person
                      </span>{" "}
                    </div>{" "}
                    <div>
                      {" "}
                      <div className="font-bold font-body-sm text-body-sm">
                        By Tech Ghuru Labs
                      </div>{" "}
                      <div className="font-label-sm text-label-sm text-[#555]">
                        Engineering & Design Team
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="w-10 h-10 rounded-full border border-[#eaeaea] flex items-center justify-center group-hover:bg-[#eb5d1e] group-hover:text-white group-hover:border-[#eb5d1e] transition-all">
                    {" "}
                    <span className="material-symbols-outlined font-body-md text-body-md">
                      arrow_forward
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="order-1 lg:order-2">
                {" "}
                <div className="aspect-[4/3] bg-[#f8f6f0] border border-[#eaeaea] overflow-hidden relative">
                  {" "}
                  <img
                    src={articles[0][4]}
                    alt={articles[0][0]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </Link>{" "}
        </div>{" "}
        {/* Latest Dispatches Grid */}{" "}
        <div className="flex items-center justify-between mb-10 pb-6 border-b border-dashed border-[#d0d0d0]">
          {" "}
          <h3 className="font-headline-md text-headline-md">
            Latest Dispatches
          </h3>{" "}
          <div className="flex items-center gap-2 font-body-sm text-body-sm text-[#555] font-bold cursor-pointer hover:text-[#1a1a1a]">
            {" "}
            Sorted by Recent{" "}
            <span className="material-symbols-outlined font-body-md text-body-md">
              expand_more
            </span>{" "}
          </div>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {" "}
          {articles.map((article) => (
            <Link
              href={`/blog/${article[3]}`}
              key={article[3]}
              className="group flex flex-col bg-white border border-[#eaeaea] hover:border-[#d0d0d0] transition-colors relative"
            >
              {" "}
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#d0d0d0] opacity-0 group-hover:opacity-100 transition-opacity"></div>{" "}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#d0d0d0] opacity-0 group-hover:opacity-100 transition-opacity"></div>{" "}
              <div className="h-52 overflow-hidden border-b border-[#eaeaea] relative">
                {" "}
                <img
                  src={article[4]}
                  alt={article[1]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />{" "}
                <div className="absolute top-4 left-4 bg-white text-[#1a1a1a] px-3 py-1.5 font-label-sm text-label-sm font-bold uppercase tracking-widest border border-[#eaeaea]">
                  {" "}
                  {article[0]}{" "}
                </div>{" "}
              </div>{" "}
              <div className="p-6 flex-1 flex flex-col">
                {" "}
                <div className="flex items-center gap-1.5 font-label-sm text-label-sm font-bold text-[#555] uppercase tracking-wider mb-4">
                  {" "}
                  <span className="material-symbols-outlined font-body-sm text-body-sm">
                    schedule
                  </span>{" "}
                  {article[2]}{" "}
                </div>{" "}
                <h4 className="font-body-md text-body-md font-bold leading-tight mb-4 group-hover:text-[#eb5d1e] transition-colors flex-1">
                  {" "}
                  {article[1]}{" "}
                </h4>{" "}
                <div className="pt-4 border-t border-dashed border-[#d0d0d0] flex items-center justify-between mt-auto">
                  {" "}
                  <span className="font-label-sm text-label-sm font-bold flex items-center gap-1 group-hover:text-[#eb5d1e] transition-colors">
                    {" "}
                    Read Article{" "}
                    <span className="material-symbols-outlined font-body-sm text-body-sm">
                      arrow_forward
                    </span>{" "}
                  </span>{" "}
                  <span className="material-symbols-outlined font-body-md text-body-md text-[#d0d0d0] group-hover:text-[#eb5d1e] transition-colors">
                    bookmark_border
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </Link>
          ))}{" "}
        </div>{" "}
        {/* Newsletter */}{" "}
        <div className="mt-12 bg-[#1a1a1a] text-white p-10 md:p-16 relative">
          {" "}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#eb5d1e] to-[#ff8c5a]"></div>{" "}
          <div className="max-w-2xl mx-auto text-center">
            {" "}
            <div className="w-14 h-14 bg-white/10 mx-auto flex items-center justify-center text-[#eb5d1e] mb-6">
              {" "}
              <span className="material-symbols-outlined font-headline-md text-headline-md">
                mark_email_unread
              </span>{" "}
            </div>{" "}
            <h3 className="font-headline-md text-headline-md">
              Stay Ahead of the Curve
            </h3>{" "}
            <p className="text-white/60 font-body-md text-body-md mb-10">
              {" "}
              Get weekly tech &amp; digital marketing insights directly to your
              inbox. No fluff, just production-tested blueprints.{" "}
            </p>{" "}
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              {" "}
              <input
                type="email"
                placeholder="Enter your work email"
                required
                className="flex-1 bg-white/5 border border-white/10 px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#eb5d1e] transition-colors"
              />{" "}
              <button
                type="submit"
                className="bg-[#eb5d1e] text-white font-bold px-8 py-4 hover:bg-[#d64d14] transition-colors flex items-center justify-center gap-2"
              >
                {" "}
                Subscribe{" "}
                <span className="material-symbols-outlined font-body-md text-body-md">
                  arrow_forward
                </span>{" "}
              </button>{" "}
            </form>{" "}
            <p className="text-white/40 font-label-sm text-label-sm mt-6">
              {" "}
              Trusted by 14,000+ developers, architects, and growth
              leaders.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
}
const jobs = [
  {
    id: "frontend-dev",
    title: "Frontend Developer",
    department: "Engineering",
    experience: "1-3 Yrs Exp",
    type: "Full-time - Remote / Hybrid",
    description:
      "Build fast, responsive and scalable web applications for Tech Ghuru clients using React.js, Next.js and modern JavaScript technologies.",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind",
      "REST APIs",
    ],
    salary: "Competitive / yr",
  },
  {
    id: "backend-dev",
    title: "Backend Developer",
    department: "Engineering",
    experience: "2-4 Yrs Exp",
    type: "Full-time - Remote / Hybrid",
    description:
      "Design and build robust REST APIs, server-side logic and database integrations using Node.js, Express and PostgreSQL for client projects.",
    skills: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "JWT",
      "SQL Optimization",
    ],
    salary: "Competitive / yr",
  },
  {
    id: "video-editor",
    title: "Video Editor & Motion Designer",
    department: "Product Design",
    experience: "1-3 Yrs Exp",
    type: "Full-time - On-site",
    description:
      "Create eye-catching video ads, reels and promotional content for clients using Premiere Pro, After Effects and DaVinci Resolve.",
    skills: [
      "Premiere Pro",
      "After Effects",
      "Motion Graphics",
      "Color Grading",
      "Sound Design",
    ],
    salary: "Competitive / yr",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Executive",
    department: "Growth",
    experience: "1-2 Yrs Exp",
    type: "Full-time - Remote / Hybrid",
    description:
      "Plan and execute result-driven digital marketing campaigns including SEO, SEM, social media and paid ads to grow client brand presence.",
    skills: [
      "Meta Ads",
      "Google Ads",
      "SMM",
      "Copywriting",
      "GA4",
      "Content Strategy",
    ],
    salary: "Competitive / yr",
  },
  {
    id: "content-writer",
    title: "Content Writer",
    department: "Growth",
    experience: "1-2 Yrs Exp",
    type: "Full-time - Remote",
    description:
      "Craft compelling blog posts, website copy, social media content and marketing materials for diverse Tech Ghuru client industries.",
    skills: ["Content Writing", "SEO Copywriting", "Proofreading", "Research"],
    salary: "Competitive / yr",
  },
  {
    id: "bde",
    title: "Business Development Executive",
    department: "Sales",
    experience: "1-3 Yrs Exp",
    type: "Full-time - On-site",
    description:
      "Identify and onboard new clients, manage consultations and build long-term relationships to grow Tech Ghuru portfolio.",
    skills: [
      "B2B Sales",
      "Client Consulting",
      "Negotiation",
      "CRM Management",
      "Service Scoping",
    ],
    salary: "Competitive / yr",
  },
];
export function CareersPage() {
  const [selectedJob, setSelectedJob] = React.useState<any>(null);
  const [activeFilter, setActiveFilter] = React.useState("All Roles");
  const filters = [
    "All Roles",
    "Engineering",
    "Product Design",
    "Growth",
    "Sales",
  ];
  const filteredJobs =
    activeFilter === "All Roles"
      ? jobs
      : jobs.filter((j) => j.department === activeFilter);
  return (
    <main className="w-full bg-surface min-h-screen pb-12">
      {" "}
      {/* Hero Section */}
      <section className="pt-16 pb-12 relative overflow-hidden bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#eb5d1e]/10 text-[#eb5d1e] font-label-sm text-label-sm font-bold">
                Careers at Tech Ghuru
              </div>
              <h1 className="font-display-xl text-[48px] md:text-[56px] font-bold text-[#1a1a1a] leading-tight">
                Build Your Future With <br/><span className="text-[#eb5d1e]">Tech Ghuru</span>
              </h1>
              <p className="text-[#555] font-body-lg text-lg max-w-lg leading-relaxed">
                Join a passionate team of innovators, creators and problem solvers. Let's build technology that empowers businesses and touches millions of lives.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#open-positions" className="bg-[#eb5d1e] text-white hover:bg-[#d64d14] rounded-full px-8 py-3.5 flex items-center gap-2 font-bold shadow-lg transition-colors">
                  View Open Positions <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <Link href="/contact" className="bg-transparent text-[#eb5d1e] border-2 border-[#eb5d1e] hover:bg-[#eb5d1e]/5 rounded-full px-8 py-3.5 flex items-center gap-2 font-bold transition-colors">
                  Send Your Resume <span className="material-symbols-outlined text-[18px]">send</span>
                </Link>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
                {[
                  { stat: "50+", label: "Team Members", icon: "groups" },
                  { stat: "25+", label: "Projects Delivered", icon: "work" },
                  { stat: "5+", label: "Countries Served", icon: "public" },
                  { stat: "100%", label: "Passion & Dedication", icon: "verified" }
                ].map((s, i) => (
                  <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-[#eaeaea] flex flex-col items-center justify-center text-center">
                    <span className="material-symbols-outlined text-[#eb5d1e] mb-2">{s.icon}</span>
                    <strong className="font-headline-md text-xl font-extrabold text-[#1a1a1a]">{s.stat}</strong>
                    <span className="font-label-sm text-[10px] text-[#666] mt-1 font-bold uppercase">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative border-4 border-white">
                <img src="/careers-hero-realistic.jpg" alt="Team" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <div className="text-[#eb5d1e] font-label-sm text-sm font-bold uppercase tracking-widest mb-3">WHY TECH GHURU</div>
          <h2 className="font-headline-lg text-4xl font-bold text-[#1a1a1a] mb-16">Why Join Tech Ghuru?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { icon: "rocket_launch", title: "Growth & Learning", desc: "Continuous learning opportunities to upgrade your skills and grow with the company." },
              { icon: "groups", title: "Collaborative Culture", desc: "Work with supportive and friendly team members who value teamwork." },
              { icon: "lightbulb", title: "Innovative Environment", desc: "Explore new ideas, modern technologies and create impactful solutions." },
              { icon: "target", title: "Meaningful Impact", desc: "Work on projects that create real value for businesses and communities." },
              { icon: "emoji_events", title: "Recognition", desc: "Your efforts and achievements are recognized and celebrated." },
              { icon: "balance", title: "Work-Life Balance", desc: "We believe in balance and provide a flexible and positive work environment." },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#f0f0f0] flex flex-col hover:border-[#eb5d1e]/30 transition-colors">
                <div className="w-12 h-12 bg-[#fff0e6] rounded-[12px] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[#eb5d1e]">{feature.icon}</span>
                </div>
                <h3 className="font-headline-md text-xl font-bold text-[#1a1a1a] mb-3">{feature.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="py-12 bg-surface">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <div className="text-[#eb5d1e] font-label-sm text-sm font-bold uppercase tracking-widest mb-3">OUR PIPELINE</div>
          <h2 className="font-headline-lg text-4xl font-bold text-[#1a1a1a] mb-10">Our Hiring Process</h2>
          
          <div className="flex flex-col md:flex-row justify-between relative">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-[#eb5d1e]/20 z-0"></div>
            {[
              { step: "01", icon: "send", title: "Apply", desc: "Submit your application or resume through our careers portal." },
              { step: "02", icon: "description", title: "Review", desc: "Our team reviews your profile and experience carefully." },
              { step: "03", icon: "forum", title: "Interview", desc: "Selected candidates participate in technical and HR interviews." },
              { step: "04", icon: "handshake", title: "Selection", desc: "Successful candidates receive an offer to join our team." },
              { step: "05", icon: "rocket", title: "Welcome Aboard", desc: "Kickstart your journey with Tech Ghuru and grow with us!" },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center flex-1 relative z-10 mb-8 md:mb-0 px-4">
                <div className="w-16 h-16 bg-white border-2 border-[#eb5d1e] rounded-full flex items-center justify-center font-bold text-[#eb5d1e] mb-6 shadow-sm">
                  {step.step}
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-[#eaeaea] w-full h-full text-center hover:-translate-y-1 transition-transform">
                  <span className="material-symbols-outlined text-[#eb5d1e] mb-3 text-3xl">{step.icon}</span>
                  <h3 className="font-headline-md text-lg font-bold text-[#1a1a1a] mb-2">{step.title}</h3>
                  <p className="text-[#666] text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Benefits Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <div className="text-[#eb5d1e] font-label-sm text-sm font-bold uppercase tracking-widest mb-3">OUR PERKS</div>
          <h2 className="font-headline-lg text-4xl font-bold text-[#1a1a1a] mb-16">Perks & Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { icon: "school", title: "Learning & Development", desc: "Workshops, courses and certifications to support your career growth." },
              { icon: "schedule", title: "Flexible Environment", desc: "Flexible working hours and options for remote work/hybrid setup." },
              { icon: "favorite", title: "Health & Wellness", desc: "Comprehensive health insurance plans and active wellness programs." },
              { icon: "trending_up", title: "Career Growth", desc: "Clear promotion paths and opportunities to transition into leadership roles." },
              { icon: "laptop_mac", title: "Modern Workspace", desc: "Work in a modern, creative space equipped with high-end tools." },
              { icon: "celebration", title: "Fun & Events", desc: "Regular team outings, celebratory parties, and year-round events." },
            ].map((perk, i) => (
              <div key={i} className="bg-white p-8 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#f0f0f0] flex items-start gap-5 hover:bg-[#fffcf8] transition-colors">
                <div className="w-14 h-14 bg-[#fff0e6] rounded-[14px] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#eb5d1e] text-2xl">{perk.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-lg font-bold text-[#1a1a1a] mb-2">{perk.title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Open Positions Section */}{" "}
      <section
        id="open-positions"
        className="py-12 max-w-[1200px] mx-auto px-6 lg:px-8"
      >
        {" "}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-[#eaeaea] pb-6">
          {" "}
          <div>
            {" "}
            <div className="text-[#eb5d1e] font-label-sm text-label-sm font-bold uppercase tracking-widest mb-3">
              CURRENT ACTIVE EXPEDITIONS
            </div>{" "}
            <h2 className="font-headline-lg text-headline-lg">
              Open Positions
            </h2>{" "}
          </div>{" "}
          <p className="text-[#666] font-body-sm text-body-sm font-medium mb-2">
            Showing{" "}
            <strong className="text-[#eb5d1e]">{filteredJobs.length}</strong>{" "}
            opportunities worldwide
          </p>{" "}
        </div>{" "}
        <div className="bg-white p-2 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#f0f0f0] inline-flex overflow-x-auto mb-10 max-w-full no-scrollbar">
          {" "}
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-3 rounded-full font-body-sm text-body-sm font-bold whitespace-nowrap transition-all ${activeFilter === f ? "bg-[#eb5d1e] text-white shadow-md" : "bg-transparent text-[#666] hover:bg-[#f8f6f0] hover:text-[#1a1a1a]"}`}
            >
              {" "}
              {f} {f === "All Roles" && `(${jobs.length})`}{" "}
            </button>
          ))}{" "}
        </div>{" "}
        <div className="space-y-6">
          {" "}
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-[24px] p-8 border border-[#f0f0f0] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#eb5d1e]/30 transition-all duration-300 relative group"
            >
              {" "}
              <div className="flex flex-col md:flex-row justify-between gap-8">
                {" "}
                <div className="flex-1">
                  {" "}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {" "}
                    <span className="font-label-sm text-label-sm font-bold text-[#eb5d1e] bg-[#fff0e6] px-3 py-1.5 rounded-full">
                      {job.department}
                    </span>{" "}
                    <span className="font-label-sm text-label-sm font-bold text-[#555] bg-[#f0f0f0] px-3 py-1.5 rounded-full">
                      {job.type}
                    </span>{" "}
                    <span className="font-label-sm text-label-sm font-bold text-[#555] bg-[#f0f0f0] px-3 py-1.5 rounded-full">
                      {job.experience}
                    </span>{" "}
                  </div>{" "}
                  <h3 className="font-headline-md text-headline-md">
                    {job.title}
                  </h3>{" "}
                  <p className="font-body-sm text-body-sm text-[#666] leading-relaxed mb-8 max-w-3xl">
                    {job.description}
                  </p>{" "}
                  <div className="flex items-center gap-2 flex-wrap">
                    {" "}
                    <span className="font-label-sm text-label-sm font-bold text-[#888] tracking-widest mr-2 uppercase">
                      CORE STACK:
                    </span>{" "}
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-label-sm text-label-sm font-semibold bg-[#f8f6f0] text-[#444] px-3 py-1.5 rounded-md border border-[#eaeaea]"
                      >
                        {skill}
                      </span>
                    ))}{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex flex-col items-start md:items-end justify-start gap-4 pt-2">
                  {" "}
                  <div className="bg-[#fff0e6] text-[#cc4910] font-extrabold font-body-sm text-body-sm px-5 py-2.5 rounded-full whitespace-nowrap tracking-wide">
                    {" "}
                    {job.salary}{" "}
                  </div>{" "}
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="px-8 py-3.5 bg-[#eb5d1e] text-white font-bold font-body-sm text-body-sm rounded-[12px] shadow-[0_4px_15px_rgba(235,93,30,0.3)] hover:bg-[#d64d14] hover:-translate-y-0.5 transition-all whitespace-nowrap w-full md:w-auto"
                  >
                    {" "}
                    View & Apply{" "}
                  </button>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </section>{" "}
      {/* Application Form Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1a1a1a]/80 backdrop-blur-sm">
          <div className="bg-white border border-dashed border-[#d0d0d0] w-full max-w-[800px] max-h-[90vh] overflow-y-auto shadow-2xl relative my-8 animate-in fade-in zoom-in-95 duration-200">
            <div className="absolute -top-1.5 -left-1.5 text-[#d0d0d0] text-xs">+</div>
            <div className="absolute -top-1.5 -right-1.5 text-[#d0d0d0] text-xs">+</div>
            <div className="absolute -bottom-1.5 -left-1.5 text-[#d0d0d0] text-xs">+</div>
            <div className="absolute -bottom-1.5 -right-1.5 text-[#d0d0d0] text-xs">+</div>
            
            <button
              onClick={() => {
                setSelectedJob(null);
              }}
              className="absolute top-4 right-4 w-10 h-10 bg-white border border-[#eaeaea] flex items-center justify-center text-[#1a1a1a] hover:bg-[#f8f6f0] hover:text-[#eb5d1e] transition-colors z-10"
            >
              <span className="material-symbols-outlined font-headline-sm text-headline-sm">close</span>
            </button>
            
            <div className="p-6 md:p-8">
              <ApplicationFormContent job={selectedJob} onClose={() => setSelectedJob(null)} />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function ApplicationFormContent({ job, onClose }: { job: any, onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [fileName, setFileName] = React.useState("");

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-[#eb5d1e]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-[#eb5d1e] text-4xl">check_circle</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg mb-4">Application Submitted Successfully!</h2>
        <p className="text-[#666] font-body-lg text-body-lg max-w-md mx-auto mb-8">
          Thank you for applying for the <strong>{job.title}</strong> role. We have received your application and sent a confirmation email.
        </p>
        <button
          onClick={onClose}
          className="px-8 py-4 bg-[#eb5d1e] text-white font-bold rounded-[12px] hover:bg-[#d64d14] transition-colors"
        >
          Close Window
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="mb-10">
        <span className="font-label-sm text-label-sm font-bold text-[#eb5d1e] uppercase tracking-widest mb-2 block">
          APPLYING FOR
        </span>
        <h2 className="font-headline-lg text-headline-lg">{job.title}</h2>
      </div>
      <form
        className="space-y-4"
        id="apply-now"
        onSubmit={async (e) => {
          e.preventDefault();
          setIsSubmitting(true);
          const formData = new FormData(e.currentTarget);
          formData.append("jobTitle", job.title);
          
          try {
            const res = await fetch("/api/apply", {
              method: "POST",
              body: formData,
            });
            if (res.ok) {
              setIsSuccess(true);
            } else {
              alert("Something went wrong. Please try again.");
            }
          } catch (error) {
            alert("Something went wrong. Please try again.");
          } finally {
            setIsSubmitting(false);
          }
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-label-sm text-label-sm font-bold text-[#1a1a1a] mb-1.5 uppercase tracking-wide">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full bg-[#f8f6f0] border border-[#eaeaea] px-4 py-2.5 text-[#1a1a1a] font-medium focus:outline-none focus:border-[#d0d0d0] transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block font-label-sm text-label-sm font-bold text-[#1a1a1a] mb-1.5 uppercase tracking-wide">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-[#f8f6f0] border border-[#eaeaea] px-4 py-2.5 text-[#1a1a1a] font-medium focus:outline-none focus:border-[#d0d0d0] transition-colors"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block font-label-sm text-label-sm font-bold text-[#1a1a1a] mb-1.5 uppercase tracking-wide">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full bg-[#f8f6f0] border border-[#eaeaea] px-4 py-2.5 text-[#1a1a1a] font-medium focus:outline-none focus:border-[#d0d0d0] transition-colors"
              placeholder="+91 98765 43210"
            />
          </div>
          <div>
            <label className="block font-label-sm text-label-sm font-bold text-[#1a1a1a] mb-1.5 uppercase tracking-wide">
              Years of Experience *
            </label>
            <select
              name="experience"
              required
              className="w-full bg-[#f8f6f0] border border-[#eaeaea] px-4 py-2.5 text-[#1a1a1a] font-medium focus:outline-none focus:border-[#d0d0d0] transition-colors appearance-none"
            >
              <option value="">Select experience</option>
              <option value="0-1">0 - 1 Years</option>
              <option value="1-3">1 - 3 Years</option>
              <option value="3-5">3 - 5 Years</option>
              <option value="5+">5+ Years</option>
            </select>
          </div>
          <div>
            <label className="block font-label-sm text-label-sm font-bold text-[#1a1a1a] mb-1.5 uppercase tracking-wide">
              LinkedIn Profile URL *
            </label>
            <input
              type="url"
              name="linkedin"
              required
              className="w-full bg-[#f8f6f0] border border-[#eaeaea] px-4 py-2.5 text-[#1a1a1a] font-medium focus:outline-none focus:border-[#d0d0d0] transition-colors"
              placeholder="https://linkedin.com/in/..."
            />
          </div>
          <div>
            <label className="block font-label-sm text-label-sm font-bold text-[#1a1a1a] mb-1.5 uppercase tracking-wide">
              Portfolio/Website URL
            </label>
            <input
              type="url"
              name="portfolio"
              className="w-full bg-[#f8f6f0] border border-[#eaeaea] px-4 py-2.5 text-[#1a1a1a] font-medium focus:outline-none focus:border-[#d0d0d0] transition-colors"
              placeholder="https://yourwork.com"
            />
          </div>
        </div>
        <div>
          <label className="block font-label-sm text-label-sm font-bold text-[#1a1a1a] mb-1.5 uppercase tracking-wide">
            Cover Letter *
          </label>
          <textarea
            name="coverLetter"
            required
            rows={3}
            className="w-full bg-[#f8f6f0] border border-[#eaeaea] px-4 py-2.5 text-[#1a1a1a] font-medium focus:outline-none focus:border-[#d0d0d0] transition-colors"
            placeholder="Tell us why you are a great fit for this role..."
          ></textarea>
        </div>
        <div>
          <label className="block font-label-sm text-label-sm font-bold text-[#1a1a1a] mb-1.5 uppercase tracking-wide">
            Upload Resume (Max 5MB) *
          </label>
          <div className="border border-dashed border-[#d0d0d0] p-6 text-center bg-[#f8f6f0] hover:bg-white transition-colors relative">
            <input
              type="file"
              name="resume"
              required
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setFileName(e.target.files[0].name);
                } else {
                  setFileName("");
                }
              }}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <span className="material-symbols-outlined font-display-xl text-display-xl text-[#eb5d1e] mb-2 block">
              {fileName ? "check_circle" : "upload_file"}
            </span>
            <p className="font-body-sm text-body-sm font-bold text-[#1a1a1a]">
              {fileName ? fileName : "Click or drag file to upload"}
            </p>
            {!fileName && (
              <p className="font-label-sm text-label-sm text-[#666] mt-1">
                Accepted formats: .pdf, .doc, .docx
              </p>
            )}
          </div>
        </div>
        <div className="pt-6 mt-6 border-t border-dashed border-[#d0d0d0] flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-8 py-4 bg-white text-[#1a1a1a] font-bold font-body-sm text-body-sm border border-[#eaeaea] hover:border-[#d0d0d0] hover:bg-[#f8f6f0] transition-colors w-full md:w-auto"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-10 py-4 bg-[#eb5d1e] text-white font-bold font-body-sm text-body-sm hover:bg-[#d64d14] disabled:opacity-70 disabled:cursor-not-allowed transition-colors w-full md:w-auto flex items-center justify-center gap-2"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
            {!isSubmitting && (
              <span className="material-symbols-outlined font-body-md text-body-md">
                arrow_forward
              </span>
            )}
          </button>
        </div>
      </form>
    </>

  );
}
