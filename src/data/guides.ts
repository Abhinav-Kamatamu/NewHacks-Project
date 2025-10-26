export interface Review {
  reviewerName: string;
  reviewText: string;
  stars: number;
  date: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export interface Guide {
  id: string;
  city: string;
  name: string;
  profilePictureUrl: string;
  personalInfo: string;
  tags: string[];
  rating: number;
  reviews: Review[];
}

export const guides: Guide[] = [
  // London guides (10)
  {
    id: 'london-001',
    city: 'London',
    name: 'Oliver Bennett',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver',
    personalInfo: 'Royal history enthusiast & tea connoisseur. 15 years exploring London\'s hidden gems.',
    tags: ['royal-history', 'architecture', 'museums', 'tea-culture', 'walking-tours'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Sarah M.', reviewText: 'Oliver\'s knowledge of royal history is unmatched!', stars: 5, date: '2025-10-20' },
      { reviewerName: 'James K.', reviewText: 'Great tour of hidden London spots.', stars: 5, date: '2025-10-15' }
    ]
  },
  {
    id: 'london-002',
    city: 'London',
    name: 'Emma Thompson',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    personalInfo: 'Street art expert & Camden market specialist. Love showing off London\'s creative side.',
    tags: ['street-art', 'markets', 'nightlife', 'alternative-culture', 'photography'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Alex P.', reviewText: 'Emma showed us the coolest spots in Camden!', stars: 5, date: '2025-10-18' }
    ]
  },
  {
    id: 'london-003',
    city: 'London',
    name: 'Hassan Ali',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hassan',
    personalInfo: 'Foodie & multicultural London expert. Specializing in authentic global cuisine tours.',
    tags: ['food-tours', 'multicultural', 'street-food', 'ethnic-cuisine', 'local-markets'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Maria G.', reviewText: 'Best food tour ever! Hassan knows every hidden gem.', stars: 5, date: '2025-10-22' }
    ]
  },
  {
    id: 'london-004',
    city: 'London',
    name: 'Sophie Williams',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
    personalInfo: 'Theatre district insider & West End aficionado. Making London\'s performing arts accessible.',
    tags: ['theatre', 'west-end', 'performing-arts', 'entertainment', 'nightlife'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'David L.', reviewText: 'Sophie got us incredible theatre tickets and insider tips!', stars: 5, date: '2025-10-19' }
    ]
  },
  {
    id: 'london-005',
    city: 'London',
    name: 'James Morrison',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    personalInfo: 'River Thames expert & maritime history buff. Exploring London from the water.',
    tags: ['river-tours', 'maritime-history', 'boat-trips', 'waterfront', 'historic-docks'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Lisa R.', reviewText: 'Amazing perspective of London from the Thames!', stars: 5, date: '2025-10-21' }
    ]
  },
  {
    id: 'london-006',
    city: 'London',
    name: 'Priya Patel',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    personalInfo: 'Parks & gardens specialist. Finding peace in London\'s green spaces.',
    tags: ['parks', 'gardens', 'nature', 'outdoor-activities', 'peaceful-walks'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Tom W.', reviewText: 'Priya showed us the most beautiful hidden gardens!', stars: 5, date: '2025-10-17' }
    ]
  },
  {
    id: 'london-007',
    city: 'London',
    name: 'Michael Chen',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    personalInfo: 'Financial district & modern London guide. From ancient to cutting-edge architecture.',
    tags: ['finance', 'modern-architecture', 'business', 'skyscrapers', 'city-tours'],
    rating: 4.6,
    reviews: [
      { reviewerName: 'Anna S.', reviewText: 'Fascinating look at London\'s financial heart!', stars: 4, date: '2025-10-16' }
    ]
  },
  {
    id: 'london-008',
    city: 'London',
    name: 'Lucy Edwards',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucy',
    personalInfo: 'Literary London specialist. Following the footsteps of famous authors.',
    tags: ['literature', 'bookshops', 'historic-pubs', 'authors', 'cultural-history'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Robert B.', reviewText: 'Perfect for book lovers! Lucy\'s passion shines through.', stars: 5, date: '2025-10-14' }
    ]
  },
  {
    id: 'london-009',
    city: 'London',
    name: 'Daniel Brown',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel',
    personalInfo: 'Sports & stadium tour expert. Experience London\'s sporting culture.',
    tags: ['sports', 'stadiums', 'football', 'cricket', 'sporting-events'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'Chris H.', reviewText: 'Daniel made the stadium tour unforgettable!', stars: 5, date: '2025-10-13' }
    ]
  },
  {
    id: 'london-010',
    city: 'London',
    name: 'Isabella Garcia',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Isabella',
    personalInfo: 'Vintage shopping & antiques guide. Treasure hunting in London\'s markets.',
    tags: ['vintage-shopping', 'antiques', 'flea-markets', 'collectibles', 'unique-finds'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Emma T.', reviewText: 'Found amazing vintage pieces with Isabella\'s help!', stars: 5, date: '2025-10-12' }
    ]
  },

  // Paris guides (10)
  {
    id: 'paris-001',
    city: 'Paris',
    name: 'Marie Dubois',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marie',
    personalInfo: 'Art historian & Louvre specialist. Bringing masterpieces to life.',
    tags: ['art-history', 'museums', 'louvre', 'impressionism', 'guided-tours'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Julia F.', reviewText: 'Marie\'s art knowledge is phenomenal!', stars: 5, date: '2025-10-20' }
    ]
  },
  {
    id: 'paris-002',
    city: 'Paris',
    name: 'Pierre Laurent',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pierre',
    personalInfo: 'Pastry chef turned guide. Discovering Paris through its culinary excellence.',
    tags: ['pastries', 'bakeries', 'french-cuisine', 'food-tours', 'cooking-classes'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Sophie B.', reviewText: 'Pierre knows every great bakery in Paris!', stars: 5, date: '2025-10-19' }
    ]
  },
  {
    id: 'paris-003',
    city: 'Paris',
    name: 'Amélie Rousseau',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amelie',
    personalInfo: 'Fashion district insider & vintage style expert. Chic Parisian experiences.',
    tags: ['fashion', 'shopping', 'vintage', 'style', 'designer-boutiques'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Claire D.', reviewText: 'Amélie has impeccable taste and style!', stars: 5, date: '2025-10-21' }
    ]
  },
  {
    id: 'paris-004',
    city: 'Paris',
    name: 'Jean-Luc Martin',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JeanLuc',
    personalInfo: 'Architecture & Gothic Notre-Dame specialist. Medieval Paris expert.',
    tags: ['architecture', 'gothic', 'medieval-history', 'churches', 'historic-buildings'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'Michael S.', reviewText: 'Jean-Luc\'s architectural insights were fascinating!', stars: 5, date: '2025-10-18' }
    ]
  },
  {
    id: 'paris-005',
    city: 'Paris',
    name: 'Camille Bonnet',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Camille',
    personalInfo: 'Seine river guide & romantic Paris specialist. Creating magical moments.',
    tags: ['river-cruises', 'romantic', 'sunset-tours', 'photography', 'couples'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Daniel & Ana', reviewText: 'Perfect romantic evening! Camille is wonderful.', stars: 5, date: '2025-10-22' }
    ]
  },
  {
    id: 'paris-006',
    city: 'Paris',
    name: 'Étienne Moreau',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Etienne',
    personalInfo: 'Wine sommelier & bistro expert. Authentic Parisian dining experiences.',
    tags: ['wine', 'bistros', 'french-cuisine', 'wine-tasting', 'local-restaurants'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Paul R.', reviewText: 'Étienne\'s wine knowledge is extraordinary!', stars: 5, date: '2025-10-17' }
    ]
  },
  {
    id: 'paris-007',
    city: 'Paris',
    name: 'Léa Fournier',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lea',
    personalInfo: 'Montmartre artist & bohemian Paris guide. Where art meets life.',
    tags: ['montmartre', 'art', 'bohemian', 'artists', 'creative-spaces'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Isabella M.', reviewText: 'Léa showed us the artist\'s Paris we dreamed of!', stars: 5, date: '2025-10-16' }
    ]
  },
  {
    id: 'paris-008',
    city: 'Paris',
    name: 'Hugo Petit',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hugo',
    personalInfo: 'Jazz clubs & nightlife expert. Paris after dark specialist.',
    tags: ['jazz', 'nightlife', 'music', 'bars', 'entertainment'],
    rating: 4.6,
    reviews: [
      { reviewerName: 'Marcus J.', reviewText: 'Hugo knows all the best jazz spots!', stars: 4, date: '2025-10-15' }
    ]
  },
  {
    id: 'paris-009',
    city: 'Paris',
    name: 'Charlotte Blanc',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlotte',
    personalInfo: 'Literary Paris & bookshop guide. Walking with writers through history.',
    tags: ['literature', 'bookshops', 'writers', 'cultural-history', 'left-bank'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Emma L.', reviewText: 'Charlotte brings literary Paris to life beautifully!', stars: 5, date: '2025-10-14' }
    ]
  },
  {
    id: 'paris-010',
    city: 'Paris',
    name: 'Antoine Girard',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Antoine',
    personalInfo: 'Versailles & palace expert. Royal French history specialist.',
    tags: ['versailles', 'palaces', 'royal-history', 'gardens', 'luxury-tours'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Victoria S.', reviewText: 'Antoine made Versailles come alive with stories!', stars: 5, date: '2025-10-13' }
    ]
  },

  // Tokyo guides (10)
  {
    id: 'tokyo-001',
    city: 'Tokyo',
    name: 'Yuki Tanaka',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yuki',
    personalInfo: 'Traditional tea ceremony master & zen garden specialist.',
    tags: ['tea-ceremony', 'zen-gardens', 'traditional-culture', 'temples', 'mindfulness'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Sarah W.', reviewText: 'Yuki\'s tea ceremony was a spiritual experience!', stars: 5, date: '2025-10-21' }
    ]
  },
  {
    id: 'tokyo-002',
    city: 'Tokyo',
    name: 'Hiroshi Sato',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hiroshi',
    personalInfo: 'Anime & manga otaku culture expert. Akihabara insider.',
    tags: ['anime', 'manga', 'otaku-culture', 'akihabara', 'gaming'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Jake M.', reviewText: 'Hiroshi showed us the best anime shops and cafes!', stars: 5, date: '2025-10-20' }
    ]
  },
  {
    id: 'tokyo-003',
    city: 'Tokyo',
    name: 'Sakura Yamamoto',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sakura',
    personalInfo: 'Sushi chef & Tsukiji market guide. Fresh fish and culinary traditions.',
    tags: ['sushi', 'fish-market', 'japanese-cuisine', 'food-tours', 'cooking'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'David K.', reviewText: 'Best sushi tour ever! Sakura is amazing.', stars: 5, date: '2025-10-19' }
    ]
  },
  {
    id: 'tokyo-004',
    city: 'Tokyo',
    name: 'Kenji Nakamura',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kenji',
    personalInfo: 'Sumo wrestling expert & traditional sports guide.',
    tags: ['sumo', 'traditional-sports', 'cultural-events', 'tournaments', 'japanese-history'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'Robert F.', reviewText: 'Kenji explained sumo culture perfectly!', stars: 5, date: '2025-10-18' }
    ]
  },
  {
    id: 'tokyo-005',
    city: 'Tokyo',
    name: 'Aiko Suzuki',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aiko',
    personalInfo: 'Cherry blossom & seasonal Japan specialist. Nature and tradition.',
    tags: ['cherry-blossoms', 'seasons', 'nature', 'photography', 'traditional-festivals'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Michelle L.', reviewText: 'Aiko found the most beautiful cherry blossom spots!', stars: 5, date: '2025-10-22' }
    ]
  },
  {
    id: 'tokyo-006',
    city: 'Tokyo',
    name: 'Takeshi Ito',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Takeshi',
    personalInfo: 'Technology & Shibuya nightlife guide. Modern Tokyo expert.',
    tags: ['technology', 'nightlife', 'shibuya', 'modern-culture', 'entertainment'],
    rating: 4.6,
    reviews: [
      { reviewerName: 'Alex T.', reviewText: 'Takeshi showed us cutting-edge Tokyo!', stars: 4, date: '2025-10-17' }
    ]
  },
  {
    id: 'tokyo-007',
    city: 'Tokyo',
    name: 'Misaki Kobayashi',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Misaki',
    personalInfo: 'Kimono & traditional fashion specialist. Cultural elegance.',
    tags: ['kimono', 'traditional-fashion', 'culture', 'dress-up', 'photography'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Emily R.', reviewText: 'Wearing kimono with Misaki was unforgettable!', stars: 5, date: '2025-10-16' }
    ]
  },
  {
    id: 'tokyo-008',
    city: 'Tokyo',
    name: 'Ryo Watanabe',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ryo',
    personalInfo: 'Ramen & street food expert. Tokyo\'s culinary underground.',
    tags: ['ramen', 'street-food', 'local-eats', 'food-tours', 'hidden-gems'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Tom H.', reviewText: 'Ryo knows every great ramen spot in Tokyo!', stars: 5, date: '2025-10-15' }
    ]
  },
  {
    id: 'tokyo-009',
    city: 'Tokyo',
    name: 'Hana Yoshida',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hana',
    personalInfo: 'Harajuku fashion & youth culture guide. Trendy Tokyo.',
    tags: ['harajuku', 'fashion', 'youth-culture', 'shopping', 'street-style'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Sophia M.', reviewText: 'Hana\'s fashion sense is incredible!', stars: 5, date: '2025-10-14' }
    ]
  },
  {
    id: 'tokyo-010',
    city: 'Tokyo',
    name: 'Daichi Fujita',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Daichi',
    personalInfo: 'Mount Fuji & day trip specialist. Nature escapes from Tokyo.',
    tags: ['mount-fuji', 'day-trips', 'nature', 'hiking', 'scenic-tours'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Laura P.', reviewText: 'Amazing day trip to Fuji with Daichi!', stars: 5, date: '2025-10-13' }
    ]
  },

  // Mumbai guides (10)
  {
    id: 'mumbai-001',
    city: 'Mumbai',
    name: 'Raj Patel',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Raj',
    personalInfo: 'Bollywood insider & film city guide. The glamour of Indian cinema.',
    tags: ['bollywood', 'film-industry', 'entertainment', 'studios', 'celebrity-culture'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Chris A.', reviewText: 'Raj gave us exclusive Bollywood access!', stars: 5, date: '2025-10-21' }
    ]
  },
  {
    id: 'mumbai-002',
    city: 'Mumbai',
    name: 'Priya Sharma',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PriyaS',
    personalInfo: 'Street food queen & spice market specialist. Authentic Mumbai flavors.',
    tags: ['street-food', 'spices', 'local-markets', 'indian-cuisine', 'food-tours'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Anna K.', reviewText: 'Priya\'s food tour was amazing! So many flavors!', stars: 5, date: '2025-10-20' }
    ]
  },
  {
    id: 'mumbai-003',
    city: 'Mumbai',
    name: 'Arjun Mehta',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
    personalInfo: 'Colonial architecture & heritage building expert. Mumbai\'s British legacy.',
    tags: ['colonial-architecture', 'heritage', 'history', 'walking-tours', 'british-era'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'James B.', reviewText: 'Arjun\'s knowledge of Mumbai history is impressive!', stars: 5, date: '2025-10-19' }
    ]
  },
  {
    id: 'mumbai-004',
    city: 'Mumbai',
    name: 'Neha Desai',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha',
    personalInfo: 'Art galleries & contemporary culture guide. Modern Mumbai art scene.',
    tags: ['art-galleries', 'contemporary-art', 'culture', 'exhibitions', 'artists'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Sophie L.', reviewText: 'Neha showed us incredible contemporary Indian art!', stars: 5, date: '2025-10-18' }
    ]
  },
  {
    id: 'mumbai-005',
    city: 'Mumbai',
    name: 'Vikram Singh',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram',
    personalInfo: 'Dabbawala system expert & logistics marvel guide. Mumbai\'s unique culture.',
    tags: ['dabbawala', 'local-culture', 'unique-experiences', 'logistics', 'street-life'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Mark W.', reviewText: 'Fascinating look at Mumbai\'s dabbawala system!', stars: 5, date: '2025-10-22' }
    ]
  },
  {
    id: 'mumbai-006',
    city: 'Mumbai',
    name: 'Anjali Kapoor',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali',
    personalInfo: 'Temple & spiritual sites guide. Sacred Mumbai.',
    tags: ['temples', 'spiritual', 'religion', 'sacred-sites', 'meditation'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Rachel M.', reviewText: 'Anjali provided beautiful spiritual insights!', stars: 5, date: '2025-10-17' }
    ]
  },
  {
    id: 'mumbai-007',
    city: 'Mumbai',
    name: 'Sanjay Kumar',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sanjay',
    personalInfo: 'Dharavi & community tour specialist. Real Mumbai stories.',
    tags: ['dharavi', 'community-tours', 'social-impact', 'authentic', 'local-life'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Thomas R.', reviewText: 'Sanjay\'s tour was eye-opening and respectful.', stars: 5, date: '2025-10-16' }
    ]
  },
  {
    id: 'mumbai-008',
    city: 'Mumbai',
    name: 'Kavita Joshi',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kavita',
    personalInfo: 'Textile & fabric market expert. Traditional Indian crafts.',
    tags: ['textiles', 'fabrics', 'markets', 'traditional-crafts', 'shopping'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'Lisa H.', reviewText: 'Kavita helped me find the most beautiful fabrics!', stars: 5, date: '2025-10-15' }
    ]
  },
  {
    id: 'mumbai-009',
    city: 'Mumbai',
    name: 'Rohan Iyer',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan',
    personalInfo: 'Marine Drive & waterfront specialist. Sunset Mumbai.',
    tags: ['marine-drive', 'waterfront', 'sunsets', 'romantic', 'scenic-views'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Julia & Mike', reviewText: 'Perfect sunset experience with Rohan!', stars: 5, date: '2025-10-14' }
    ]
  },
  {
    id: 'mumbai-010',
    city: 'Mumbai',
    name: 'Meera Nair',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
    personalInfo: 'Cricket culture & sports expert. Living the Mumbai cricket passion.',
    tags: ['cricket', 'sports', 'stadiums', 'local-culture', 'fan-experiences'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Ben S.', reviewText: 'Meera made cricket come alive for us!', stars: 5, date: '2025-10-13' }
    ]
  },

  // São Paulo guides (10)
  {
    id: 'sao-paulo-001',
    city: 'São Paulo',
    name: 'Lucas Silva',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas',
    personalInfo: 'Street art & graffiti expert. São Paulo\'s urban canvas.',
    tags: ['street-art', 'graffiti', 'urban-culture', 'art-tours', 'photography'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Carlos M.', reviewText: 'Lucas knows every amazing mural in SP!', stars: 5, date: '2025-10-21' }
    ]
  },
  {
    id: 'sao-paulo-002',
    city: 'São Paulo',
    name: 'Isabella Santos',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=IsabellaS',
    personalInfo: 'Brazilian cuisine & churrascaria specialist. Meat and flavor paradise.',
    tags: ['brazilian-cuisine', 'churrascaria', 'food-tours', 'restaurants', 'meat'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Peter J.', reviewText: 'Isabella found the best churrascarias!', stars: 5, date: '2025-10-20' }
    ]
  },
  {
    id: 'sao-paulo-003',
    city: 'São Paulo',
    name: 'Rafael Costa',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rafael',
    personalInfo: 'Samba & nightlife guide. Where São Paulo dances.',
    tags: ['samba', 'nightlife', 'dancing', 'live-music', 'entertainment'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'Maria L.', reviewText: 'Rafael showed us the best samba clubs!', stars: 5, date: '2025-10-19' }
    ]
  },
  {
    id: 'sao-paulo-004',
    city: 'São Paulo',
    name: 'Gabriela Oliveira',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gabriela',
    personalInfo: 'Modern architecture & Oscar Niemeyer specialist. Architectural wonders.',
    tags: ['architecture', 'modern-design', 'niemeyer', 'buildings', 'design-tours'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Andrew K.', reviewText: 'Gabriela\'s architecture tour was stunning!', stars: 5, date: '2025-10-18' }
    ]
  },
  {
    id: 'sao-paulo-005',
    city: 'São Paulo',
    name: 'Pedro Almeida',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro',
    personalInfo: 'Football culture & stadium guide. Living the passion.',
    tags: ['football', 'soccer', 'stadiums', 'sports-culture', 'fan-experience'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Diego R.', reviewText: 'Pedro made the football experience incredible!', stars: 5, date: '2025-10-22' }
    ]
  },
  {
    id: 'sao-paulo-006',
    city: 'São Paulo',
    name: 'Amanda Ferreira',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda',
    personalInfo: 'Coffee culture & café specialist. Brazil\'s coffee heritage.',
    tags: ['coffee', 'cafes', 'brazilian-culture', 'beverages', 'tasting-tours'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Sarah P.', reviewText: 'Amanda\'s coffee tour was heaven for coffee lovers!', stars: 5, date: '2025-10-17' }
    ]
  },
  {
    id: 'sao-paulo-007',
    city: 'São Paulo',
    name: 'Bruno Martins',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bruno',
    personalInfo: 'Paulista Avenue & downtown guide. The heart of São Paulo.',
    tags: ['paulista-avenue', 'downtown', 'city-tours', 'urban-exploration', 'landmarks'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'Laura M.', reviewText: 'Bruno showed us the real São Paulo!', stars: 5, date: '2025-10-16' }
    ]
  },
  {
    id: 'sao-paulo-008',
    city: 'São Paulo',
    name: 'Juliana Rocha',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juliana',
    personalInfo: 'Japanese district & Liberdade specialist. Brazil\'s Japanese heritage.',
    tags: ['japanese-culture', 'liberdade', 'ethnic-neighborhoods', 'asian-cuisine', 'cultural-fusion'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Kenji T.', reviewText: 'Juliana\'s tour of Liberdade was fantastic!', stars: 5, date: '2025-10-15' }
    ]
  },
  {
    id: 'sao-paulo-009',
    city: 'São Paulo',
    name: 'Thiago Pereira',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thiago',
    personalInfo: 'Ibirapuera Park & green spaces guide. Urban nature.',
    tags: ['parks', 'nature', 'outdoor-activities', 'recreation', 'green-spaces'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Emma W.', reviewText: 'Thiago made Ibirapuera Park come alive!', stars: 5, date: '2025-10-14' }
    ]
  },
  {
    id: 'sao-paulo-010',
    city: 'São Paulo',
    name: 'Carolina Lima',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carolina',
    personalInfo: 'MASP & art museums specialist. São Paulo\'s artistic soul.',
    tags: ['art-museums', 'masp', 'exhibitions', 'culture', 'art-history'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Oliver B.', reviewText: 'Carolina\'s art knowledge is exceptional!', stars: 5, date: '2025-10-13' }
    ]
  },

  // Cairo guides (10)
  {
    id: 'cairo-001',
    city: 'Cairo',
    name: 'Ahmed Hassan',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed',
    personalInfo: 'Egyptologist & pyramids specialist. Ancient mysteries revealed.',
    tags: ['pyramids', 'ancient-egypt', 'history', 'archaeology', 'guided-tours'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Jennifer K.', reviewText: 'Ahmed brought ancient Egypt to life!', stars: 5, date: '2025-10-21' }
    ]
  },
  {
    id: 'cairo-002',
    city: 'Cairo',
    name: 'Fatima Ali',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima',
    personalInfo: 'Khan el-Khalili bazaar expert. Master of traditional markets.',
    tags: ['bazaar', 'markets', 'shopping', 'souvenirs', 'traditional-crafts'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Robert P.', reviewText: 'Fatima helped us navigate the bazaar perfectly!', stars: 5, date: '2025-10-20' }
    ]
  },
  {
    id: 'cairo-003',
    city: 'Cairo',
    name: 'Omar Mahmoud',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Omar',
    personalInfo: 'Nile River cruises & felucca specialist. Cairo from the water.',
    tags: ['nile-river', 'boat-tours', 'felucca', 'sunset-cruises', 'river-views'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'Linda S.', reviewText: 'Omar\'s Nile cruise was magical!', stars: 5, date: '2025-10-19' }
    ]
  },
  {
    id: 'cairo-004',
    city: 'Cairo',
    name: 'Layla Ibrahim',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Layla',
    personalInfo: 'Egyptian cuisine & cooking class expert. Flavors of the Nile.',
    tags: ['egyptian-cuisine', 'cooking-classes', 'food-tours', 'local-dishes', 'spices'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Michael D.', reviewText: 'Layla\'s cooking class was incredible!', stars: 5, date: '2025-10-18' }
    ]
  },
  {
    id: 'cairo-005',
    city: 'Cairo',
    name: 'Karim Said',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karim',
    personalInfo: 'Coptic Cairo & religious sites specialist. Spiritual heritage.',
    tags: ['coptic-cairo', 'religious-sites', 'churches', 'history', 'spiritual-tours'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Patricia L.', reviewText: 'Karim\'s knowledge of Coptic history is amazing!', stars: 5, date: '2025-10-22' }
    ]
  },
  {
    id: 'cairo-006',
    city: 'Cairo',
    name: 'Nour Mohamed',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nour',
    personalInfo: 'Islamic architecture & mosque guide. Architectural splendor.',
    tags: ['islamic-architecture', 'mosques', 'history', 'religion', 'architecture-tours'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Thomas C.', reviewText: 'Nour showed us breathtaking mosques!', stars: 5, date: '2025-10-17' }
    ]
  },
  {
    id: 'cairo-007',
    city: 'Cairo',
    name: 'Yasmin Farouk',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yasmin',
    personalInfo: 'Egyptian Museum specialist. Treasures and artifacts expert.',
    tags: ['museum', 'artifacts', 'tutankhamun', 'history', 'culture'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'David H.', reviewText: 'Yasmin made the museum fascinating!', stars: 5, date: '2025-10-16' }
    ]
  },
  {
    id: 'cairo-008',
    city: 'Cairo',
    name: 'Mustafa Ahmed',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mustafa',
    personalInfo: 'Camel rides & Giza plateau expert. Desert adventures.',
    tags: ['camel-rides', 'desert', 'giza', 'pyramids', 'adventure'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'Sophie K.', reviewText: 'Mustafa made our camel ride unforgettable!', stars: 5, date: '2025-10-15' }
    ]
  },
  {
    id: 'cairo-009',
    city: 'Cairo',
    name: 'Amina Khalil',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amina',
    personalInfo: 'Traditional crafts & papyrus specialist. Ancient arts alive today.',
    tags: ['traditional-crafts', 'papyrus', 'artisans', 'workshops', 'souvenirs'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Rachel B.', reviewText: 'Amina taught us so much about traditional crafts!', stars: 5, date: '2025-10-14' }
    ]
  },
  {
    id: 'cairo-010',
    city: 'Cairo',
    name: 'Hassan El-Sayed',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HassanE',
    personalInfo: 'Sound & light shows specialist. Pyramids after dark.',
    tags: ['sound-light-shows', 'evening-tours', 'pyramids', 'entertainment', 'night-experiences'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Mark T.', reviewText: 'Hassan\'s sound & light show tour was spectacular!', stars: 5, date: '2025-10-13' }
    ]
  },

  // New York guides (10)
  {
    id: 'new-york-001',
    city: 'New York',
    name: 'Emily Rodriguez',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EmilyR',
    personalInfo: 'Broadway insider & theatre district expert. Behind the curtains of NYC.',
    tags: ['broadway', 'theatre', 'performing-arts', 'musicals', 'entertainment'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Jessica M.', reviewText: 'Emily got us amazing Broadway tickets!', stars: 5, date: '2025-10-21' }
    ]
  },
  {
    id: 'new-york-002',
    city: 'New York',
    name: 'Marcus Johnson',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusJ',
    personalInfo: 'Hip-hop culture & Bronx specialist. Where it all began.',
    tags: ['hip-hop', 'bronx', 'music-culture', 'street-art', 'urban-history'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Tyler K.', reviewText: 'Marcus showed us authentic hip-hop history!', stars: 5, date: '2025-10-20' }
    ]
  },
  {
    id: 'new-york-003',
    city: 'New York',
    name: 'Sarah Goldstein',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahG',
    personalInfo: 'Food halls & culinary diversity expert. NYC\'s melting pot of flavors.',
    tags: ['food-halls', 'diverse-cuisine', 'food-tours', 'restaurants', 'culinary'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Paul R.', reviewText: 'Sarah found the best hidden food gems!', stars: 5, date: '2025-10-19' }
    ]
  },
  {
    id: 'new-york-004',
    city: 'New York',
    name: 'David Lee',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DavidL',
    personalInfo: 'Wall Street & finance district guide. The pulse of global finance.',
    tags: ['wall-street', 'finance', 'business', 'history', 'financial-district'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'James H.', reviewText: 'David explained Wall Street history perfectly!', stars: 5, date: '2025-10-18' }
    ]
  },
  {
    id: 'new-york-005',
    city: 'New York',
    name: 'Maria Sanchez',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MariaS',
    personalInfo: 'Central Park & urban nature specialist. Green heart of Manhattan.',
    tags: ['central-park', 'nature', 'outdoor-activities', 'parks', 'recreation'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Anna B.', reviewText: 'Maria\'s Central Park tour was delightful!', stars: 5, date: '2025-10-22' }
    ]
  },
  {
    id: 'new-york-006',
    city: 'New York',
    name: 'Alex Chen',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexC',
    personalInfo: 'Chinatown & Little Italy guide. Ethnic neighborhoods expert.',
    tags: ['chinatown', 'little-italy', 'ethnic-neighborhoods', 'food', 'culture'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Katie W.', reviewText: 'Alex knows every great spot in Chinatown!', stars: 5, date: '2025-10-17' }
    ]
  },
  {
    id: 'new-york-007',
    city: 'New York',
    name: 'Rachel Cohen',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RachelC',
    personalInfo: 'Art galleries & Chelsea specialist. Contemporary art scene.',
    tags: ['art-galleries', 'contemporary-art', 'chelsea', 'exhibitions', 'artists'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Oliver S.', reviewText: 'Rachel showed us incredible galleries!', stars: 5, date: '2025-10-16' }
    ]
  },
  {
    id: 'new-york-008',
    city: 'New York',
    name: 'Brandon Williams',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Brandon',
    personalInfo: 'Brooklyn & hipster culture guide. NYC\'s coolest borough.',
    tags: ['brooklyn', 'hipster-culture', 'coffee-shops', 'vintage', 'street-art'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'Sophia L.', reviewText: 'Brandon\'s Brooklyn tour was so cool!', stars: 5, date: '2025-10-15' }
    ]
  },
  {
    id: 'new-york-009',
    city: 'New York',
    name: 'Jennifer Park',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer',
    personalInfo: 'Metropolitan Museum & art history expert. World-class museum guide.',
    tags: ['met-museum', 'art-history', 'culture', 'exhibitions', 'masterpieces'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Daniel M.', reviewText: 'Jennifer made the Met come alive!', stars: 5, date: '2025-10-14' }
    ]
  },
  {
    id: 'new-york-010',
    city: 'New York',
    name: 'Michael Thompson',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MichaelT',
    personalInfo: 'Rooftop bars & skyline specialist. NYC from above.',
    tags: ['rooftop-bars', 'skyline', 'nightlife', 'views', 'photography'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Laura D.', reviewText: 'Michael found the best rooftop views!', stars: 5, date: '2025-10-13' }
    ]
  }
];
