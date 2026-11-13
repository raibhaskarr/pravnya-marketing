import type { Reel } from "./types";

export const tryAtHome: Reel = {
  id: "try-at-home",
  title: "Does it at the centre, not yet at home?",
  scenes: [
    {
      headline: { en: "Does it at the centre. Not yet at home?", hi: "सेंटर पर करता है, घर पर अभी नहीं?" },
      narration: {
        en: "Your child does it at the therapy centre, but not yet at home?",
        hi: "आपका बच्चा थेरेपी सेंटर पर तो करता है, पर घर पर अभी नहीं?",
      },
    },
    {
      screen: "screenshot-activities.webp",
      headline: { en: "Try this at home", hi: "इसे घर पर आज़माएँ" },
      narration: {
        en: "Pravnya shows the goals your child has shown in therapy, but hasn't tried much at home yet.",
        hi: "Pravnya दिखाता है कि कौन से लक्ष्य बच्चे ने थेरेपी में दिखाए हैं, पर घर पर अभी कम आज़माए हैं।",
      },
      focus: 0.35,
    },
    {
      screen: "screenshot-voice-note.webp",
      headline: { en: "Log how the home try went", hi: "घर पर कैसा रहा, दर्ज करें" },
      narration: {
        en: "Try it together, then log how it went. A voice note is enough.",
        hi: "साथ मिलकर आज़माएँ, फिर बताएँ कि कैसा रहा। एक वॉइस नोट काफ़ी है।",
      },
      focus: 0.4,
    },
    {
      screen: "screenshot-home.webp",
      headline: { en: "Celebrate the first time at home", hi: "घर पर पहली बार का जश्न मनाएँ" },
      narration: {
        en: "And when a skill shows up at home for the first time, you'll see it.",
        hi: "और जब कोई हुनर पहली बार घर पर दिखे, तो आप उसे देख पाएँगे।",
      },
      focus: 0.3,
    },
  ],
  post: {
    en: "Does it at the centre, but not yet at home? 🏠\n\nPravnya's Try this at home shows the goals your child has shown in therapy but hasn't tried much at home. Try one together and log how it went.\n\nAsk your child's therapist how best to practise each goal.\n\nFree to start: pravnya.com",
    hi: "सेंटर पर करता है, पर घर पर अभी नहीं? 🏠\n\nPravnya का 'Try this at home' दिखाता है कि कौन से लक्ष्य बच्चे ने थेरेपी में दिखाए हैं पर घर पर कम आज़माए हैं। साथ मिलकर एक आज़माएँ और बताएँ कि कैसा रहा।\n\nहर लक्ष्य का अभ्यास कैसे करें, यह बच्चे के थेरेपिस्ट से पूछें।\n\nमुफ़्त शुरू करें: pravnya.com",
  },
  hashtags: ["#Pravnya", "#TherapyAtHome", "#OccupationalTherapy", "#ParentingIndia", "#AutismParents", "#ChildDevelopment"],
};
