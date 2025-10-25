import { Guide, User } from './types';

export const MOCK_USERS: User[] = [
  { id: 'guide-elise-dubois', name: 'Elise Dubois', type: 'guide' },
  { id: 'traveller-alex-chen', name: 'Alex Chen', type: 'traveller' },
];

export const GUIDES_DATA: Guide[] = [
  {
    id: 'guide-elise-dubois',
    name: 'Elise Dubois',
    city: 'Montreal',
    photoUrl: 'https://picsum.photos/seed/elise/400/400',
    bio: "Bonjour! I'm a lifelong Montrealer with a passion for my city's art scene and hidden histories. Let me show you the forgotten corners of Old Montréal and the vibrant murals of the Plateau. I believe the best way to know a city is to walk its streets with a friend.",
    expertiseTags: ['Street Art', 'History', 'Hidden Cafés', 'Architecture'],
    availability: 'Weekends, Mon/Wed afternoons',
    rating: 4.9,
    priceModel: 'Tip-based',
    reviews: [
      { id: 1, author: 'Sarah K.', rating: 5, comment: 'Elise was incredible! She showed us so many cool spots we would have never found. Highly recommend!', date: '2023-10-15' },
      { id: 2, author: 'Mike T.', rating: 5, comment: 'A truly authentic experience. Felt like I was exploring with a knowledgeable friend.', date: '2023-09-22' },
    ],
  },
  {
    id: 'mumbai-01',
    name: 'Rohan Sharma',
    city: 'Mumbai',
    photoUrl: 'https://picsum.photos/seed/rohan/400/400',
    bio: "Mumbai is a city of dreams, and I love sharing its electric energy! From the chaos of local trains to the serenity of Marine Drive at dawn, I'll guide you through it all. My specialty? The legendary midnight food trails of South Mumbai.",
    expertiseTags: ['Local Cuisine', 'Public Transport', 'Nightlife', 'Markets'],
    availability: 'Evenings after 6 PM',
    rating: 4.8,
    priceModel: '$25 per person',
    reviews: [
      { id: 1, author: 'David L.', rating: 5, comment: 'Rohan knows all the best food spots. My stomach was as happy as I was. Unforgettable tour!', date: '2023-11-01' },
    ],
  },
  {
    id: 'barcelona-01',
    name: 'Sofia Reyes',
    city: 'Barcelona',
    photoUrl: 'https://picsum.photos/seed/sofia/400/400',
    bio: "Hola! I'm a design student living in the Gothic Quarter. While Gaudí is a must-see, I love to show travelers the city's modern creative pulse. We'll explore local artisan shops, find the best tapas bars, and maybe even catch some live music.",
    expertiseTags: ['Art & Design', 'Local Cuisine', 'Gothic Quarter', 'Shopping'],
    availability: 'Tues/Thurs mornings, Weekends',
    rating: 5.0,
    priceModel: 'Tip-based',
    reviews: [
      { id: 1, author: 'Chen W.', rating: 5, comment: 'Sofia is a gem! Her tour was the highlight of my trip to Barcelona.', date: '2023-10-28' },
      { id: 2, author: 'Emily R.', rating: 5, comment: 'So much fun, and she gave the best recommendations for the rest of our stay.', date: '2023-10-12' },
      { id: 3, author: 'John P.', rating: 5, comment: 'Passionate, friendly, and authentic. 10/10.', date: '2023-09-30' },
    ],
  },
    {
    id: 'barcelona-02',
    name: 'Javier Castillo',
    city: 'Barcelona',
    photoUrl: 'https://picsum.photos/seed/javier/400/400',
    bio: "I'm a history buff who believes every stone in Barcelona has a story. I avoid the crowded main drags and take you through the alleyways where the city's real history unfolded. Perfect for those who love stories and quiet exploration.",
    expertiseTags: ['History', 'Architecture', 'Storytelling', 'Local Markets'],
    availability: 'Mornings',
    rating: 4.7,
    priceModel: '$30 per tour (2 hours)',
    reviews: [
      { id: 1, author: 'Liam G.', rating: 5, comment: 'Javier is a fantastic storyteller. I learned so much about the city.', date: '2023-11-05' },
    ],
  },
];
