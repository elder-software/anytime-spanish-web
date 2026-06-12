export type ConversationCategory = {
  id: string;
  name: string;
  description: string;
  isFree?: boolean;
  topics: string[];
};

export const conversationCategories: ConversationCategory[] = [
  {
    id: "free",
    name: "Free",
    description: "Start here — curated conversations to try the tutor at no cost.",
    isFree: true,
    topics: ["Ordering Food in Madrid", "Talking About Your Day"],
  },
  {
    id: "travel",
    name: "Travel",
    description: "Navigate new cities with confidence — directions, hotels, and transit.",
    topics: [
      "Asking for Directions",
      "Hotel Check-in",
      "Train Station",
      "Ordering Food in Madrid",
    ],
  },
  {
    id: "everyday",
    name: "Everyday Errands",
    description: "Handle the practical moments — shopping, banking, and apartment hunting.",
    topics: [
      "Clothing Store",
      "Opening a Bank Account",
      "Apartment Viewing",
    ],
  },
  {
    id: "work",
    name: "Work & Goals",
    description: "Practice for interviews and talk through what you're working toward.",
    topics: ["Job Interview Practice", "Personal Goal"],
  },
  {
    id: "social",
    name: "Social & Connection",
    description: "Warm up small talk — family, hobbies, memories, and weekend plans.",
    topics: [
      "Weekend Small Talk",
      "Family",
      "Talking About a Hobby",
      "Childhood Memories",
      "Talking About Your Day",
    ],
  },
];
