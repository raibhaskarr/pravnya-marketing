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
  ShieldCheck,
  Sparkle,
  Tag,
  User,
  Warning,
} from "@phosphor-icons/react/dist/ssr";

export const commitments = [
  {
    icon: BookOpen,
    title: "Keep everything together",
    body: "Save notes, photos, voice updates, reports and goals in one private place.",
  },
  {
    icon: Sparkle,
    title: "Understand what is changing",
    body: "See useful patterns across home, school and therapy, with the supporting information shown.",
  },
  {
    icon: Handshake,
    title: "Be prepared",
    body: "Create a clear summary for appointments, school meetings and care-team conversations.",
  },
];

export const workflowSteps = [
  {
    icon: PlusCircle,
    title: "Capture",
    body: "Add a note, voice message, photo or document.",
  },
  {
    icon: ChartLineUp,
    title: "Understand",
    body: "Pravnya organizes updates and shows useful patterns.",
  },
  {
    icon: Notepad,
    title: "Act",
    body: "Prepare for a meeting, share an update or choose what to work on next.",
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
