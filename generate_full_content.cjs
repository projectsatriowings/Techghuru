const fs = require('fs');
let code = fs.readFileSync('components/pages.tsx', 'utf8');

const newBlogContent = `
const blogContent: Record<string, JSX.Element> = {
  "web-developing": (
    <>
      <p className="text-xl font-medium mb-8">The landscape of web development is constantly evolving. What worked perfectly three years ago might now be considered an anti-pattern. Staying ahead requires not just adapting to new frameworks, but understanding the paradigm shifts beneath them.</p>
      <h3>The Rise of Edge Computing & Hybrid Rendering</h3>
      <p>By moving rendering logic to the edge, modern web applications can deliver dynamic, personalized content significantly faster than traditional origin-server architectures. We're seeing a massive shift towards hybrid rendering models that blend Static Site Generation (SSG) with Server-Side Rendering (SSR) natively at the edge.</p>
      <ul>
        <li><strong>Performance:</strong> Achieving perfect Lighthouse scores with sub-50ms response times globally.</li>
        <li><strong>Resilience:</strong> Effortless scaling during unexpected traffic spikes without manual load balancer configuration.</li>
        <li><strong>Developer Experience:</strong> Simplified deployment pipelines and unified codebases.</li>
      </ul>
      <h3>Component-Driven Micro-Frontends</h3>
      <p>Enterprise applications are moving away from monoliths. By adopting module federation, teams can independently develop, test, and deploy specific pieces of the user interface without bottlenecking the entire organization.</p>
      <p>At Tech Ghuru, we leverage these modern architectures to build platforms that aren't just fast on day one, but remain maintainable and scalable for years.</p>
    </>
  ),
  "product-design": (
    <>
      <p className="text-xl font-medium mb-8">Great product design is invisible. It guides the user seamlessly from their problem to your solution without them ever noticing the interface getting in the way. It's the perfect harmony of empathy, aesthetics, and functionality.</p>
      <h3>Designing for Emotion</h3>
      <p>While usability is the baseline, the best products connect on an emotional level. Micro-interactions, thoughtful copy, and intentional pacing transform a tool into an experience.</p>
      <ul>
        <li><strong>Anticipatory Design:</strong> Solving problems before the user realizes they have them.</li>
        <li><strong>Tactile Feedback:</strong> Using haptics and motion to make digital spaces feel physical.</li>
        <li><strong>Accessibility by Default:</strong> Inclusive design isn't an edge case; it's the foundation.</li>
      </ul>
      <h3>The Iterative Process</h3>
      <p>We don't believe in the "big reveal." Our design process is intensely collaborative and iterative. We prototype early, test often with real users, and refine continuously based on data, not just intuition.</p>
    </>
  ),
  "content-writing": (
    <>
      <p className="text-xl font-medium mb-8">Since the explosion of generative AI, the content landscape has been flooded. But while AI can write words at an unprecedented scale, it cannot independently generate true insight, voice, or human connection.</p>
      <h3>The Commodity of Words vs. The Value of Perspective</h3>
      <p>AI is fantastic at synthesizing existing information. However, it relies entirely on the past. Thought leadership requires pointing toward the future, taking unexpected stances, and sharing hard-earned personal experiences.</p>
      <ul>
        <li><strong>Original Research:</strong> Data and surveys that no AI has access to.</li>
        <li><strong>Distinct Voice:</strong> A brand personality that AI naturally smooths out into generic professional jargon.</li>
        <li><strong>Strategic Context:</strong> Understanding not just what to say, but why it matters to your specific audience right now.</li>
      </ul>
      <h3>The New Role of the Writer</h3>
      <p>Writers are evolving into editors, strategists, and curators. The drafting phase is accelerated, allowing creators to spend more time on ideation, narrative structure, and deep research. AI isn't replacing writers; it's raising the baseline, forcing human writers to be exceptionally creative to stand out.</p>
    </>
  ),
  "influencer-marketing": (
    <>
      <p className="text-xl font-medium mb-8">Influencer marketing has matured from an experimental tactic into a cornerstone of modern digital strategy. However, the days of simply paying for a post and watching the sales roll in are over.</p>
      <h3>The Shift to Micro and Nano Influencers</h3>
      <p>Brands are discovering that massive reach often comes with massive dilution. Micro-influencers (10k-50k followers) typically command significantly higher engagement rates and possess deep, trusting relationships with niche communities.</p>
      <ul>
        <li><strong>Authenticity:</strong> Audiences can spot a transactional sponsorship from a mile away. Long-term ambassadorships perform better.</li>
        <li><strong>Content Usage Rights:</strong> The real ROI often comes from whitelisting influencer content for paid social ads.</li>
        <li><strong>Performance Tracking:</strong> Moving beyond vanity metrics to track actual conversions and brand lift.</li>
      </ul>
      <h3>Navigating Algorithm Changes</h3>
      <p>With platforms pivoting heavily toward short-form, algorithmic video (like TikTok and Reels), the creator's ability to capture attention in the first 3 seconds is more critical than their follower count. We help brands identify creators who understand platform-native storytelling.</p>
    </>
  ),
  "product-photoshoot": (
    <>
      <p className="text-xl font-medium mb-8">In a digital storefront, your photography is your packaging, your sales associate, and your display window all rolled into one. High-quality imagery directly correlates with perceived value and conversion rates.</p>
      <h3>Lighting as the Ultimate Differentiator</h3>
      <p>Whether you're going for a moody, dramatic look or a bright, minimalist aesthetic, lighting controls the narrative. It defines the texture, shape, and premium feel of the product.</p>
      <ul>
        <li><strong>Contextual Lifestyle Shots:</strong> Helping the customer visualize the product in their own life.</li>
        <li><strong>Macro Details:</strong> Highlighting craftsmanship, materials, and quality.</li>
        <li><strong>Consistent Styling:</strong> Ensuring your entire catalog feels like a cohesive brand universe.</li>
      </ul>
      <h3>The Role of 3D and AI Integration</h3>
      <p>Traditional photography is increasingly being supplemented by 3D rendering and AI-generated environments, allowing for impossible shots and infinitely scalable catalog variations without rebuilding physical sets.</p>
    </>
  ),
  "link-building-strategies": (
    <>
      <p className="text-xl font-medium mb-8">Domain Authority remains one of the strongest ranking signals in search, but the tactics to acquire high-quality backlinks have completely transformed. Manipulative tactics are heavily penalized; the new era is about earning links through value.</p>
      <h3>Digital PR as the New Link Building</h3>
      <p>The most powerful links come from top-tier publications. We utilize data journalism, creating compelling, proprietary studies and surveys that journalists naturally want to reference in their reporting.</p>
      <ul>
        <li><strong>Resource Pages:</strong> Building definitive, un-ignorable guides that serve as industry benchmarks.</li>
        <li><strong>Unlinked Mentions:</strong> Monitoring the web for brand mentions and converting them into active links.</li>
        <li><strong>Strategic Partnerships:</strong> Co-authoring content with adjacent, non-competing brands in your space.</li>
      </ul>
      <h3>Quality Over Quantity</h3>
      <p>One contextual link from a DR 80+ industry authority is worth a hundred low-quality directory links. Our strategy focuses entirely on sustainable, white-hat acquisition that builds long-term organic moats around your core search terms.</p>
    </>
  )
};
`;

const insertPattern = /const blogInfo/;
code = code.replace(insertPattern, newBlogContent + "\n" + "const blogInfo");

const contentReplacementPattern = /const content = <p>Full article content coming soon\.<\/p>;/;
code = code.replace(contentReplacementPattern, "const content = blogContent[slug] || <p>Full article content coming soon.</p>;");

fs.writeFileSync('components/pages.tsx', code);
console.log('Added full blog content');
