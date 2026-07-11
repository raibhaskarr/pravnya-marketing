// Canonical wording for the highest-stakes FAQ answers -- the ones this site's
// positioning audit (S5) exists to keep consistent. content/faq.ts and
// content/pages/parents.ts each maintain their own independent FAQ arrays
// with different tone/scope for their page, but these four questions are
// compliance-critical enough that letting each page word them separately
// risks drift. Both files import and spread these rather than restating
// the answers locally.
export const sharedDisclaimerFaq = [
  {
    question: "Is Pravnya a diagnostic tool?",
    answer:
      "No. Pravnya is not a medical device or a diagnostic tool. It does not assess, evaluate, or diagnose your child. It helps you capture, organize, and understand what you've observed, and prepare for conversations with the professionals in your child's life.",
  },
  {
    question: "Can Pravnya replace my child's therapist or doctor?",
    answer:
      "No. Pravnya does not replace the qualified professionals in your child's life — it helps you arrive at those conversations more prepared. Decisions about diagnosis, treatment, and care always belong to you and your child's professional team.",
  },
  {
    question: "Does Pravnya AI give medical advice?",
    answer:
      "No. Pravnya AI helps you understand what you've observed in your own record. It does not assess, diagnose, or give clinical recommendations. Every AI output is explicitly traced to observations in your record — it does not draw on general population databases to make claims about your child.",
  },
  {
    question: "What should I do if I have an urgent concern about my child?",
    answer:
      "Contact your child's doctor, therapist, or another qualified professional directly, or your local emergency services if it's urgent. Pravnya is not equipped to respond to emergencies and shouldn't be used in place of reaching out for help.",
  },
];
