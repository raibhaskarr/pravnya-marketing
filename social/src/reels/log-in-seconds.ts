import type { Reel } from "./types";

export const logInSeconds: Reel = {
  id: "log-in-seconds",
  title: "Log a therapy session in seconds",
  scenes: [
    {
      headline: { en: "Therapy just ended.", hi: "थेरेपी अभी ख़त्म हुई।" },
      narration: {
        en: "Therapy just ended. By dinner, half of it is forgotten.",
        hi: "थेरेपी अभी ख़त्म हुई। रात के खाने तक आधी बातें भूल जाती हैं।",
      },
    },
    {
      screen: "screenshot-capture.webp",
      headline: { en: "Write it, snap it or say it", hi: "लिखें, फ़ोटो लें या बोलें" },
      narration: {
        en: "With Pravnya, write a quick note, take a photo of the therapist's note, or just say it.",
        hi: "Pravnya में एक छोटा सा नोट लिखें, थेरेपिस्ट के नोट की फ़ोटो लें, या बस बोल दें।",
      },
      focus: 0.3,
    },
    {
      screen: "screenshot-ai-review.webp",
      headline: { en: "AI matches it to their goals", hi: "AI इसे बच्चे के लक्ष्यों से जोड़ता है" },
      narration: {
        en: "Pravnya's AI matches it to your child's goals, and shows what each suggestion is based on.",
        hi: "Pravnya का AI इसे आपके बच्चे के लक्ष्यों से जोड़ता है, और बताता है कि हर सुझाव किस बात पर आधारित है।",
      },
      focus: 0.45,
    },
    {
      screen: "screenshot-ai-review.webp",
      headline: { en: "Nothing is saved until you approve", hi: "आपकी मंज़ूरी के बिना कुछ सेव नहीं होता" },
      narration: {
        en: "You approve what's right. Nothing is saved without you.",
        hi: "जो सही है, उसे आप मंज़ूर करें। आपके बिना कुछ भी सेव नहीं होता।",
      },
      focus: 0.85,
    },
    {
      screen: "screenshot-growth.webp",
      headline: { en: "See how they're growing", hi: "देखें आपका बच्चा कैसे आगे बढ़ रहा है" },
      narration: {
        en: "Over time, you see how your child is growing, against their own history.",
        hi: "समय के साथ आप देखते हैं कि आपका बच्चा कैसे आगे बढ़ रहा है, अपनी ही पिछली प्रगति के मुक़ाबले।",
      },
      focus: 0.4,
    },
  ],
  post: {
    en: "Therapy just ended. What do you remember by dinner? 📝\n\nWith Pravnya, write a note, snap the therapist's note or record a voice note. Pravnya's AI matches it to your child's goals, and nothing is saved until you approve it.\n\nFree to start: pravnya.com",
    hi: "थेरेपी अभी ख़त्म हुई। रात तक क्या याद रहता है? 📝\n\nPravnya में नोट लिखें, थेरेपिस्ट के नोट की फ़ोटो लें या वॉइस नोट रिकॉर्ड करें। Pravnya का AI इसे आपके बच्चे के लक्ष्यों से जोड़ता है, और आपकी मंज़ूरी के बिना कुछ सेव नहीं होता।\n\nमुफ़्त शुरू करें: pravnya.com",
  },
  hashtags: ["#Pravnya", "#SpeechTherapy", "#OccupationalTherapy", "#ParentingIndia", "#SpecialNeedsParenting", "#ChildDevelopment"],
};
