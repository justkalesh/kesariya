export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Atul Chauhan",
    rating: 5,
    text: "Exceptional food and the ambiance is truly royal. The staff is very courteous and attentive. Highly recommend the thali!",
  },
  {
    id: 2,
    name: "Prabhat Pandey",
    rating: 5,
    text: "We hosted our daughter's engagement here. The banquet hall was stunning and the management handled everything flawlessly.",
  },
  {
    id: 3,
    name: "Ankita Kumari",
    rating: 4.5,
    text: "Comfortable stay, clean rooms, and prompt service. The central location in Gorakhpur is a big plus.",
  },
  {
    id: 4,
    name: "Rajesh Gupta",
    rating: 5,
    text: "Best fine dining experience in Gorakhpur! The saffron biryani is to die for. Will definitely come back with family.",
  },
  {
    id: 5,
    name: "Sunita Verma",
    rating: 5,
    text: "Celebrated our anniversary here. The ambiance was perfect, and the staff arranged everything beautifully. Truly a premium experience.",
  },
  {
    id: 6,
    name: "Mohit Srivastava",
    rating: 4.5,
    text: "The lounge bar has an amazing vibe. Great cocktails and the paneer tikka was superb. A must-visit spot in the city.",
  },
  {
    id: 7,
    name: "Priya Singh",
    rating: 5,
    text: "Hosted a corporate event at the banquet hall. Impeccable service, delicious food, and the decor was world-class. Highly recommended!",
  },
  {
    id: 8,
    name: "Vikram Tiwari",
    rating: 5,
    text: "Stayed for two nights — the rooms are spacious, clean, and well-maintained. Breakfast buffet was excellent. Best hotel in Gorakhpur.",
  },
];

export const overallRating = {
  score: 4.9,
  maxScore: 5,
  platform: "Google",
};
