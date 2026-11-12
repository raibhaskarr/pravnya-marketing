import { sharedDisclaimerFaq } from "./shared-disclaimer-faq";

const [diagnosticToolFaq, replacesProfessionalFaq, medicalAdviceFaq, urgentConcernFaq] = sharedDisclaimerFaq;

export const faqItems = [
  {
    category: "About Pravnya",
    question: "Is Pravnya only for children with special needs or developmental conditions?",
    answer:
      "Pravnya is for any family that wants a better way to understand and document their child's development. Most of our families are navigating developmental differences, learning needs, or complex care systems. But the product is built for any parent who pays close attention to their child's development and wants a better record of what they've seen.",
  },
  { category: "About Pravnya", ...diagnosticToolFaq },
  { category: "About Pravnya", ...replacesProfessionalFaq },
  { category: "About Pravnya", ...urgentConcernFaq },
  {
    category: "About Pravnya",
    question: "At what age is Pravnya most useful?",
    answer:
      "Most families begin using Pravnya between ages 1 and 8 — when developmental observation is most active and professional relationships are most complex. That said, the record is valuable at any age.",
  },
  {
    category: "About Pravnya",
    question: "Is Pravnya available in India only?",
    answer:
      "Pravnya launched in India and is available globally via the web app. There is also an Android app.",
  },
  {
    category: "The record",
    question: "What can I add to my Pravnya record?",
    answer:
      "What happened in therapy or at home, as a written note, a photo of a handwritten or printed note or worksheet, or a voice note. Pravnya's AI matches it to your child's goals for you to approve. You can also upload your child's IEP or therapy plan, and log something for a goal by hand.",
  },
  {
    category: "The record",
    question: "Can I add my child's IEP or therapy plan?",
    answer:
      "Yes. Upload a PDF or photo of your child's IEP or therapy plan during setup, or later from Goals. Pravnya finds new goals and progress updates on goals your child already has, and you choose what to add.",
  },
  { category: "The AI", ...medicalAdviceFaq },
  {
    category: "The AI",
    question: "How does the AI know about my child?",
    answer:
      "When you ask Pravnya a question, it answers using your child's own goals. When you log a note, photo or voice note, or upload an IEP, it matches what it finds to your child's goals. It does not use any other family's record.",
  },
  {
    category: "The AI",
    question: "Can I correct what the AI says?",
    answer:
      "Yes. The AI only proposes. When it reviews a note or an IEP, you see each suggestion with what it is based on and how confident the AI is, and you uncheck anything that isn't right before adding the rest. Nothing is saved until you approve it. The AI is a helper, not an authority.",
  },
  {
    category: "Privacy and data",
    question: "Does Pravnya sell my data?",
    answer: "No. Never. Your data is not a commercial asset for us.",
  },
  {
    category: "Privacy and data",
    question: "Does Pravnya use my record to train AI?",
    answer: "No. AI models in Pravnya are trained on general datasets, not on individual family records.",
  },
  {
    category: "Privacy and data",
    question: "Can I delete my account?",
    answer: "Yes. Your account and all associated data are permanently deleted within 30 days of your request.",
  },
  {
    category: "Professionals",
    question: "Can my child's therapist be part of it?",
    answer:
      "Yes. From Profile, invite your child's therapist by email to join their care team. If they already use Pravnya, they are linked right away. You can resend or cancel an invite, and remove anyone from the care team at any time.",
  },
];

