export const products = [
  {
    eyebrow: "Child development",
    title: "Pravnya",
    body: "The AI-powered companion that helps parents capture, organize, and understand their child's developmental story.",
    tags: ["iOS", "Android", "Web", "AI"],
    href: "/pravnya",
    cta: "Learn more",
    externalHref: "https://pravnya.com",
    externalCta: "Visit Pravnya.com",
  },
  {
    eyebrow: "In development",
    title: "Next product",
    body: "We build carefully. The next Pravnix product is in early development. Announcements when it's ready.",
    href: "/research",
    cta: "Follow our research",
    muted: true,
  },
];

export const differentiators = [
  {
    title: "Nine permanent principles",
    body: "Every AI output in every Pravnix product is governed by nine published commitments. Not guidelines. Permanent.",
  },
  {
    title: "Trustworthy over impressive",
    body: "When forced to choose between an output that sounds confident and one that is honest, we choose honest. Every time.",
  },
  {
    title: "Evidence, not inference",
    body: "AI insights trace to specific observations in the user's record. The AI shows its work — or it doesn't show the output.",
  },
];

export const homeStats = [
  ["9", "Permanent AI principles", ""],
  ["100%", "Privacy by design", ""],
  ["5+", "Years of development", ""],
  ["1", "Product launched", "2025"],
];

export const aboutBeliefs = [
  "Every child deserves to be understood — not tracked, not compared, understood as an individual.",
  "Trust is earned slowly. Every product decision is a deposit into or withdrawal from the family's confidence in us.",
  "AI must remain honest. Trustworthy AI is more valuable than impressive AI in any domain where the stakes matter.",
  "Privacy is structural, not optional. It is built into the architecture — not added later as a compliance layer.",
  "Long-term thinking is the only credible ambition for a company that holds developmental records across years.",
  "Publishing what you believe creates accountability. Our Vision Handbook, Manifesto, and Mission Handbook are public because that is what accountability requires.",
];

export const aiPrinciples = [
  ["01", "AI Explains", "Every AI output in a Pravnix product includes an explanation of the reasoning behind it. Black-box conclusions are not permitted."],
  ["02", "AI Shows Evidence", "Outputs trace to specific source observations in the user's record. If there is no traceable evidence, there is no output."],
  ["03", "AI Admits Uncertainty", "When evidence is limited or inconclusive, the AI says so — explicitly, in the output, before any conclusion."],
  ["04", "Parents Remain In Control", "Every AI output in Pravnya can be edited, corrected, or dismissed by the parent. The AI has no authority over the record — the parent does."],
  ["05", "Experts Remain Essential", "Pravnix AI does not substitute for professional expertise. Outputs prepare parents for professional conversations — they do not replace them."],
  ["06", "Recommendations Are Explainable", "Any AI suggestion includes a clear explanation of why it was made. Parents understand the reasoning — they do not simply receive the output."],
  ["07", "Longitudinal Understanding Is Preferred", "AI draws on patterns across time rather than isolated signals. A single data point is flagged as a single data point, not treated as evidence of a pattern."],
  ["08", "Trust Is More Valuable Than Automation", "When forced to choose between a more automated experience and a more trustworthy one, we choose trustworthy. Every time."],
  ["09", "Privacy Is More Valuable Than Personalization", "We do not trade user data for model personalization. Family records are not used to train models. Privacy is the architectural constraint."],
];

export const engineeringPrinciples = [
  ["01", "Capability is not permission.", "A model can generate a diagnosis. That does not mean the product should allow one. We constrain the model to what it should say, not what it can say."],
  ["02", "Evidence must be visible.", "Every AI output in a Pravnix product includes traceable source material. If we cannot show the evidence, we do not show the output."],
  ["03", "Uncertainty is information.", "A model that expresses uncertainty is more useful than one that hides it. We design for honest outputs — including \"I don't know.\""],
  ["04", "Human judgment is the final layer.", "Every AI output is editable, correctable, and dismissible by the user. The AI is never the last word."],
];

export const tradeoffs = [
  { chose: "Honest uncertainty expression", gaveUp: "More confident-sounding outputs", because: "A wrong confident output causes harm; an uncertain output prompts the right action." },
  { chose: "Evidence traceability for every output", gaveUp: "Faster output generation", because: "Families deserve to know where conclusions come from." },
  { chose: "Parent editability on all AI outputs", gaveUp: "Cleaner UX", because: "AI authority over a family's child's record is unacceptable." },
  { chose: "No population comparison", gaveUp: "A feature many users expect", because: "Comparison produces anxiety, not understanding." },
  { chose: "No diagnostic language", gaveUp: "A large set of seemingly useful outputs", because: "We are not a clinical tool and will not be mistaken for one." },
];

export const researchAreas = [
  ["Responsible AI in sensitive domains", "How should AI behave when the subject is a child? What constraints are necessary, and how do they change the product architecture?"],
  ["Longitudinal intelligence", "How does AI performance change when the context is months of accumulated specific observations rather than a single prompt?"],
  ["Parent-AI interaction patterns", "How do parents interact with AI outputs about their children? What makes an output trustworthy rather than impressive?"],
  ["Privacy-preserving personalization", "How do you build personalized AI outputs without training on personal data? What architectural patterns make this possible at scale?"],
];

export const openQuestions = [
  "?  How should longitudinal AI express diminishing confidence as records age?",
  "?  What is the optimal frequency of AI-surfaced summaries for parent engagement versus parent anxiety?",
  "?  How do cultural contexts in India shape what \"trustworthy\" means in an AI output?",
  "?  What privacy-preserving architectures allow AI personalization without user-level training?",
];

export const careerStatements = [
  "You will work on problems that have no obvious answer and require principled judgment, not just technical skill.",
  "You will read the Vision Handbook, the Manifesto, and the Mission Handbook before you build anything. They are not optional background reading.",
  "You will be asked to make cases for decisions in writing — not just in meetings. Clear thinking precedes clear code.",
  "You will encounter commercial pressure and be expected to hold the principles anyway. That is not a culture value statement. It is a performance expectation.",
  "You will be part of a small team that has high standards for the quality of care in what it builds. That is a constraint and a privilege.",
];

export const hiringSteps = [
  "Application — We review every application personally. No automated filtering.",
  "Reading — We ask candidates to read a section of our public documentation before the first conversation.",
  "Conversation — One conversation with the founder. Not a screening — a genuine conversation about the problem, the product, and the way we think.",
  "Work sample — We pay for work samples. We believe this is the right standard.",
  "Decision — Made with full information, communicated within one week.",
];

export const blogTypes = [
  ["Principle in practice", "How one of the nine AI principles shaped a specific product decision. Specific, honest, technical."],
  ["Research note", "A finding from Pravnix's research on longitudinal AI, parent-AI interaction, or responsible output design."],
  ["Engineering decision", "Why a specific technical choice was made. What was given up. Why it was the right tradeoff."],
  ["Honest reflection", "Things we got wrong, changed our minds about, or are still figuring out."],
];
