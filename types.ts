export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Guide {
  id: string;
  name: string;
  city: string;
  photoUrl: string;
  bio: string;
  expertiseTags: string[];
  availability: string;
  rating: number;
  priceModel: 'Tip-based' | string;
  reviews: Review[];
}

export interface User {
  id: string;
  name: string;
  type: 'traveller' | 'guide';
}

export interface RecommendedGuide {
  guide: Guide;
  matchPercentage: number;
}
export interface ChatMessage {
  id: number;
  sender: 'user' | 'ai';
  text: string;
  recommendedGuides?: RecommendedGuide[];
}
