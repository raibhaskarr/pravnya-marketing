import type { Reel } from "./types";

export const iepGoals: Reel = {
  id: "iep-goals",
  title: "Turn the IEP into goals you can track",
  scenes: [
    {
      headline: { en: "Is your child's IEP sitting in a folder?", hi: "क्या बच्चे का IEP किसी फ़ोल्डर में पड़ा है?" },
      narration: {
        en: "Is your child's IEP sitting in a folder until the next school meeting?",
        hi: "क्या आपके बच्चे का IEP अगली स्कूल मीटिंग तक किसी फ़ोल्डर में पड़ा रहता है?",
      },
    },
    {
      screen: "screenshot-iep-upload.webp",
      headline: { en: "Upload the IEP or therapy plan", hi: "IEP या थेरेपी प्लान अपलोड करें" },
      narration: {
        en: "Upload a photo or PDF of the IEP or therapy plan. Pravnya finds the goals for you to review.",
        hi: "IEP या थेरेपी प्लान की फ़ोटो या PDF अपलोड करें। Pravnya उसमें से लक्ष्य ढूँढता है, और आप उन्हें जाँचते हैं।",
      },
      focus: 0.4,
    },
    {
      screen: "screenshot-goals.webp",
      headline: { en: "Every goal in one place", hi: "सारे लक्ष्य एक जगह" },
      narration: {
        en: "Every goal stays in one place, with what's been logged for it.",
        hi: "सारे लक्ष्य एक जगह रहते हैं, और हर लक्ष्य के साथ उसकी एंट्रीज़ भी।",
      },
      focus: 0.35,
    },
    {
      screen: "screenshot-growth.webp",
      headline: { en: "Walk into the meeting prepared", hi: "मीटिंग में पूरी तैयारी के साथ जाएँ" },
      narration: {
        en: "So at the next review, you know what changed, and what to ask.",
        hi: "ताकि अगली मीटिंग में आपको पता हो कि क्या बदला, और क्या पूछना है।",
      },
      focus: 0.4,
    },
  ],
  post: {
    en: "Your child's IEP shouldn't live in a folder until the next meeting. 📂\n\nUpload a photo or PDF to Pravnya, review the goals it finds, and keep track of each one at home and in therapy.\n\nFree to start: pravnya.com",
    hi: "बच्चे का IEP अगली मीटिंग तक फ़ोल्डर में न पड़ा रहे। 📂\n\nPravnya में उसकी फ़ोटो या PDF अपलोड करें, मिले हुए लक्ष्य जाँचें, और घर व थेरेपी दोनों में हर लक्ष्य पर नज़र रखें।\n\nमुफ़्त शुरू करें: pravnya.com",
  },
  hashtags: ["#Pravnya", "#IEP", "#InclusiveEducation", "#ParentingIndia", "#StudentsOfDetermination", "#SpecialEducation"],
};
