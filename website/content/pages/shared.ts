import {
  BookOpen,
  Brain,
  Calendar,
  ChartLineUp,
  ChatCircle,
  ClipboardText,
  Eye,
  EyeSlash,
  FilePdf,
  FunnelSimple,
  Handshake,
  Lock,
  MagnifyingGlass,
  Microphone,
  Notepad,
  PlusCircle,
  SealCheck,
  Share,
  ShieldCheck,
  Sparkle,
  Tag,
  User,
  Warning,
} from "@phosphor-icons/react/dist/ssr";

export const commitments = [
  {
    icon: BookOpen,
    title: "Preserve the story",
    body:
      "Every observation, every milestone, every question you've been carrying — captured in one trusted place, organized automatically, searchable when you need it.",
  },
  {
    icon: Sparkle,
    title: "Create understanding",
    body:
      "Pravnya AI finds patterns in what you've recorded and helps you see what's changed over time — clearly, without clinical jargon, with every insight traced to your actual observations.",
  },
  {
    icon: Handshake,
    title: "Support better decisions",
    body:
      "Walk into every appointment, every school meeting, every conversation with a clear, organized account of what you've seen. Your knowledge, finally in a form that can be heard.",
  },
];

export const workflowSteps = [
  {
    icon: PlusCircle,
    title: "Capture",
    body: "Voice note, photo, quick text. Under two minutes. Any device.",
  },
  {
    icon: FunnelSimple,
    title: "Organize",
    body: "Pravnya sorts and connects what you capture. No filing required.",
  },
  {
    icon: ChartLineUp,
    title: "Understand",
    body: "See patterns across time. Watch progress as a story, not a score.",
  },
  {
    icon: Notepad,
    title: "Prepare",
    body: "Generate an appointment brief in minutes, drawn from your actual record.",
  },
  {
    icon: Share,
    title: "Share",
    body: "Send organized context to the professionals who need it. You control what they see.",
  },
];

export const aiPrinciples = [
  { icon: Eye, title: "AI explains", body: "Every output shows what it is based on." },
  { icon: Warning, title: "AI admits uncertainty", body: "Limited evidence is named, not hidden." },
  { icon: ShieldCheck, title: "AI surfaces evidence", body: "Important claims connect back to your record." },
  { icon: Lock, title: "AI respects privacy", body: "Your record is used only under clear permission rules." },
  { icon: User, title: "Parents stay in control", body: "Edit, correct, or dismiss any AI output." },
  { icon: SealCheck, title: "Experts remain essential", body: "Pravnya prepares you for professional conversations." },
  { icon: ChartLineUp, title: "Confidence must be visible", body: "The product shows when evidence is strong or limited." },
  { icon: ChatCircle, title: "Recommendations are bounded", body: "Suggestions focus on questions and preparation." },
  { icon: Calendar, title: "Longitudinal context is preferred", body: "Patterns matter more than isolated moments." },
];

export const aiCards = [
  {
    icon: FunnelSimple,
    title: "Organizes",
    body: "Tags and connects observations automatically, so you never have to file things manually.",
    evidence: "Applied to every entry as it's captured",
  },
  {
    icon: FilePdf,
    title: "Summarizes",
    body:
      "Generates clear summaries of your record over selected time periods — what changed, what stayed consistent, what your observations suggest.",
    evidence: "Always drawn from your actual entries, not generated from general knowledge",
  },
  {
    icon: Brain,
    title: "Surfaces patterns",
    body:
      "Identifies patterns across multiple observations over time — things that might not be visible day by day but are clear across a longer view.",
    evidence: "Shown only when at least 5 related observations exist",
  },
  {
    icon: ChatCircle,
    title: "Prepares questions",
    body: "Based on what your record shows, suggests questions worth asking at the next appointment.",
    evidence: "Suggestions are based on patterns in your record — not on diagnostic criteria",
  },
];

export const featureDetails = [
  { icon: Microphone, label: "Voice notes", body: "transcribed automatically" },
  { icon: Tag, label: "Automatic tagging", body: "by domain and setting" },
  { icon: MagnifyingGlass, label: "Full text search", body: "across your entire record" },
  { icon: ClipboardText, label: "Preparation summaries", body: "generated from your record" },
  { icon: EyeSlash, label: "Controlled sharing", body: "preview exactly what others see" },
];
