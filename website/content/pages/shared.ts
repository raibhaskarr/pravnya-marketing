import {
  Calendar,
  ChartLineUp,
  ChatCircle,
  ChatCircleText,
  CheckCircle,
  Eye,
  FileArrowUp,
  Handshake,
  Lock,
  Microphone,
  NotePencil,
  PlusCircle,
  SealCheck,
  ShieldCheck,
  Sparkle,
  Target,
  User,
  Warning,
} from "@phosphor-icons/react/dist/ssr";

export const commitments = [
  {
    icon: NotePencil,
    title: "Log it your way",
    body: "Write a quick note, photograph a therapist's note or worksheet, or record a voice note. Pravnya's AI matches it to your child's goals for you to review.",
  },
  {
    icon: Target,
    title: "Keep goals in one place",
    body: "Upload your child's IEP or therapy plan and keep every goal, and the entries behind it, in one private place.",
  },
  {
    icon: Sparkle,
    title: "See growth and what to try",
    body: "See how each goal is going against your child's own history, and get ideas for what to try at home.",
  },
];

export const workflowSteps = [
  {
    icon: PlusCircle,
    title: "Log",
    body: "Write a note, photograph a note or worksheet, or record a voice note about what happened.",
  },
  {
    icon: CheckCircle,
    title: "Review",
    body: "Pravnya's AI matches it to your child's goals. You approve what's right — nothing is saved until you do.",
  },
  {
    icon: ChartLineUp,
    title: "Grow",
    body: "Follow progress on each goal, celebrate milestones and pick up ideas to try at home.",
  },
];

export const aiPrinciples = [
  { icon: Eye, title: "AI proposes, you decide", body: "Each AI suggestion shows what it is based on and how confident the AI is. Nothing is saved until you approve it." },
  { icon: Warning, title: "AI says when it can't help", body: "If nothing matches, or it can't answer, Pravnya tells you instead of guessing." },
  { icon: ShieldCheck, title: "AI stays grounded", body: "Ask Pravnya answers using your child's own goals." },
  { icon: Lock, title: "AI respects privacy", body: "Your child's record is not sold or used to train AI models." },
  { icon: User, title: "Parents stay in control", body: "Uncheck anything that isn't right before you add it." },
  { icon: SealCheck, title: "Experts remain essential", body: "Pravnya supports your conversations with professionals. It does not replace them." },
  { icon: ChartLineUp, title: "Your child, not a ranking", body: "Progress is shown against your child's own history, never against other children." },
  { icon: ChatCircle, title: "Suggestions are bounded", body: "Ideas focus on practising your child's existing goals at home." },
  { icon: Calendar, title: "Patterns over moments", body: "Growth looks at your child's recent entries for each goal, not a single moment." },
];

export const aiCards = [
  {
    icon: NotePencil,
    title: "Turns your notes into goal entries",
    body: "Write, photograph or record what happened. Pravnya's AI reads or listens, matches it to your child's existing goals and proposes entries for you to review. Each one shows the words it was based on and how confident the AI is.",
    evidence: "Nothing is saved until you approve it",
  },
  {
    icon: FileArrowUp,
    title: "Reads your IEP",
    body: "Upload a PDF or photo of an IEP or therapy plan. Pravnya finds new goals and progress updates on goals your child already has.",
    evidence: "You review each one and add only what's right",
  },
  {
    icon: ChatCircleText,
    title: "Answers your questions",
    body: "Ask Pravnya a question from the Home screen. It answers using your child's own goals — and if you're describing something that happened, it takes you to logging with your words already filled in.",
    evidence: "Grounded in your child's goals, not other families' data",
  },
  {
    icon: Warning,
    title: "Says when it can't help",
    body: "If nothing in your note matches your child's goals, Pravnya says so and you can try again or log it by hand. If it can't think a question through, it tells you.",
    evidence: "No guessing to fill a gap",
  },
];

export const featureDetails = [
  { icon: Microphone, label: "Voice notes", body: "AI listens and proposes entries" },
  { icon: FileArrowUp, label: "IEP upload", body: "goals and updates found for you" },
  { icon: Target, label: "Goals", body: "tagged by area and skill" },
  { icon: Handshake, label: "Care team", body: "invite your child's therapist" },
  { icon: Calendar, label: "Weekly schedule", body: "your child's therapy slots" },
];
