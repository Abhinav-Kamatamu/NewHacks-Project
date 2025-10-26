export interface Review {
  reviewerName: string;
  reviewText: string;
  stars: number;
  date: string;
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
    personalInfo: 'A true Londoner at heart, Oliver is a passionate royal history enthusiast and a discerning tea connoisseur. With over 15 years dedicated to unearthing London\'s most captivating hidden gems, he brings the city\'s grand past to life with engaging stories and a warm, inviting demeanor. Expect a journey through time, filled with fascinating anecdotes and perhaps a recommendation for the perfect cuppa.',
    tags: ['royal-history', 'architecture', 'museums', 'tea-culture', 'walking-tours'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Sarah M.', reviewText: 'Oliver\'s knowledge of royal history is absolutely unmatched! Every anecdote felt like a step back in time. Highly recommend for anyone fascinated by the Crown.', stars: 5, date: '2025-10-20' },
      { reviewerName: 'James K.', reviewText: 'A truly great tour of London\'s hidden spots. Oliver has a knack for finding the most charming and historically rich places you\'d never discover on your own.', stars: 5, date: '2025-10-15' },
      { reviewerName: 'Eleanor V.', reviewText: 'Oliver made history come alive! His passion for royal tales is infectious, and he answered all our questions with such depth. A fantastic experience.', stars: 5, date: '2025-10-10' },
      { reviewerName: 'Mark T.', reviewText: 'Enjoyed the tour, but felt a bit rushed at times. Still, very informative about royal history.', stars: 4, date: '2025-10-05' },
      { reviewerName: 'Patricia L.', reviewText: 'The tea culture insights were a delightful bonus! Oliver is a true gentleman and an excellent guide.', stars: 5, date: '2025-09-28' }
    ]
  },
  {
    id: 'london-002',
    city: 'London',
    name: 'Emma Thompson',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    personalInfo: 'Emma is a vibrant and energetic guide, a true street art expert and Camden market specialist. She thrives on showcasing London\'s dynamic and creative side, leading tours that are as colorful and eclectic as the art itself. Her tours are an immersive experience into the city\'s alternative culture, perfect for those looking to discover the edgy and artistic pulse of London.',
    tags: ['street-art', 'markets', 'nightlife', 'alternative-culture', 'photography'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Alex P.', reviewText: 'Emma showed us the coolest spots in Camden! Her energy is contagious, and she really knows her street art. An unforgettable experience!', stars: 5, date: '2025-10-18' },
      { reviewerName: 'Chloe S.', reviewText: 'Absolutely loved the alternative culture tour. Emma\'s passion for London\'s creative side is truly inspiring. Highly recommend!', stars: 5, date: '2025-10-12' },
      { reviewerName: 'Ben R.', reviewText: 'Camden market was a blast with Emma! She pointed out so many unique stalls and hidden gems. Great fun!', stars: 4, date: '2025-10-07' }
    ]
  },
  {
    id: 'london-003',
    city: 'London',
    name: 'Hassan Ali',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hassan',
    personalInfo: 'Hassan is a dedicated foodie and a true expert in multicultural London. His passion lies in guiding visitors through authentic global cuisine tours, where every bite tells a story. With Hassan, you\'ll not only taste the diverse flavors of London but also delve into the rich cultural tapestry that makes the city a culinary paradise. Prepare for a delicious adventure!',
    tags: ['food-tours', 'multicultural', 'street-food', 'ethnic-cuisine', 'local-markets'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Maria G.', reviewText: 'Best food tour ever! Hassan knows every hidden gem and shared so much about the diverse culinary scene. My taste buds are still thanking him!', stars: 5, date: '2025-10-22' },
      { reviewerName: 'David C.', reviewText: 'Hassan\'s multicultural food tour was an absolute delight. We tried so many incredible dishes and learned about the communities behind them. A must-do in London!', stars: 5, date: '2025-10-19' },
      { reviewerName: 'Sophie T.', reviewText: 'Fantastic experience! Hassan is incredibly knowledgeable and passionate about food. He introduced us to flavors we never would have found on our own.', stars: 5, date: '2025-10-14' },
      { reviewerName: 'Liam F.', reviewText: 'The food was good, but the tour felt a bit disorganized at times. Still, I enjoyed the variety of ethnic cuisine.', stars: 3, date: '2025-10-08' }
    ]
  },
  {
    id: 'london-004',
    city: 'London',
    name: 'Sophie Williams',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
    personalInfo: 'Sophie is a charismatic theatre district insider and a devoted West End aficionado. Her mission is to make London\'s world-class performing arts scene accessible and exciting for everyone. With her, you\'ll gain backstage insights, discover hidden theatrical history, and experience the magic of London\'s stages like a true VIP. A must for any theatre lover!',
    tags: ['theatre', 'west-end', 'performing-arts', 'entertainment', 'nightlife'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'David L.', reviewText: 'Sophie got us incredible theatre tickets and insider tips! Her passion for the West End is infectious, and she made the whole experience truly magical.', stars: 5, date: '2025-10-19' },
      { reviewerName: 'Olivia P.', reviewText: 'An amazing tour for theatre lovers! Sophie shared so many fascinating stories about the West End\'s history and its stars. Highly recommended!', stars: 5, date: '2025-10-15' },
      { reviewerName: 'Ethan K.', reviewText: 'Sophie is a true gem! She made sure we had the best seats and gave us fantastic recommendations for pre-show dinner. A perfect evening.', stars: 5, date: '2025-10-10' }
    ]
  },
  {
    id: 'london-005',
    city: 'London',
    name: 'James Morrison',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    personalInfo: 'James is a seasoned River Thames expert and a passionate maritime history buff. He offers a unique perspective of London, exploring its iconic landmarks and hidden stories from the tranquil waters of the Thames. His tours are a blend of historical narrative and breathtaking scenery, perfect for those who wish to see London unfold from a different, serene vantage point.',
    tags: ['river-tours', 'maritime-history', 'boat-trips', 'waterfront', 'historic-docks'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Lisa R.', reviewText: 'Amazing perspective of London from the Thames! James\'s knowledge of maritime history added so much depth to the journey. Truly captivating.', stars: 5, date: '2025-10-21' },
      { reviewerName: 'George H.', reviewText: 'A wonderful boat trip! James is a fantastic storyteller, and seeing the city from the water was a unique experience. Highly recommend for history buffs.', stars: 5, date: '2025-10-16' },
      { reviewerName: 'Fiona S.', reviewText: 'The river tour was pleasant, but I expected a bit more interaction. James was knowledgeable, but a little reserved.', stars: 3, date: '2025-10-11' }
    ]
  },
  {
    id: 'london-006',
    city: 'London',
    name: 'Priya Patel',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    personalInfo: 'Priya is a serene and knowledgeable parks and gardens specialist, dedicated to helping visitors find peace and beauty in London\'s abundant green spaces. Her tours are a refreshing escape from the urban bustle, revealing tranquil oases and botanical wonders. Join her for a calming stroll and discover the natural elegance hidden within the city.',
    tags: ['parks', 'gardens', 'nature', 'outdoor-activities', 'peaceful-walks'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Tom W.', reviewText: 'Priya showed us the most beautiful hidden gardens! It was such a peaceful escape from the city bustle. Her knowledge of flora is impressive.', stars: 5, date: '2025-10-17' },
      { reviewerName: 'Jessica B.', reviewText: 'A truly serene experience. Priya has a wonderful way of highlighting the tranquility and beauty of London\'s green spaces. Felt completely refreshed.', stars: 5, date: '2025-10-12' }
    ]
  },
  {
    id: 'london-007',
    city: 'London',
    name: 'Michael Chen',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    personalInfo: 'Michael is a sharp and insightful guide to London\'s financial district and modern architectural marvels. He expertly bridges the gap between the city\'s ancient foundations and its cutting-edge contemporary structures. His tours offer a fascinating glimpse into the evolution of London\'s skyline and its economic heart, ideal for those interested in urban development and design.',
    tags: ['finance', 'modern-architecture', 'business', 'skyscrapers', 'city-tours'],
    rating: 4.6,
    reviews: [
      { reviewerName: 'Anna S.', reviewText: 'Fascinating look at London\'s financial heart! Michael provided excellent insights into the modern architecture and history of the district.', stars: 4, date: '2025-10-16' },
      { reviewerName: 'Robert D.', reviewText: 'Informative tour, but a bit too focused on business for my taste. Michael was very knowledgeable though.', stars: 3, date: '2025-10-10' },
      { reviewerName: 'Chloe F.', reviewText: 'Learned so much about London\'s economic history and its impressive skyscrapers. Michael is a very articulate guide.', stars: 4, date: '2025-10-05' }
    ]
  },
  {
    id: 'london-008',
    city: 'London',
    name: 'Lucy Edwards',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucy',
    personalInfo: 'Lucy is a captivating literary London specialist, inviting you to follow in the footsteps of the city\'s most famous authors. Her tours are a journey through the pages of history, exploring the pubs, streets, and hidden corners that inspired literary giants. With Lucy, every cobblestone has a story, and every landmark whispers tales of poetic genius and dramatic narratives.',
    tags: ['literature', 'bookshops', 'historic-pubs', 'authors', 'cultural-history'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Robert B.', reviewText: 'Perfect for book lovers! Lucy\'s passion for literary London shines through in every story she tells. A truly enchanting experience.', stars: 5, date: '2025-10-14' },
      { reviewerName: 'Eleanor M.', reviewText: 'Lucy brought the world of famous authors to life! Visiting their old haunts was incredibly inspiring. Highly recommend for any bibliophile.', stars: 5, date: '2025-10-09' },
      { reviewerName: 'Daniel P.', reviewText: 'A delightful walk through literary history. Lucy is a fantastic storyteller and made the tour very engaging.', stars: 5, date: '2025-10-04' }
    ]
  },
  {
    id: 'london-009',
    city: 'London',
    name: 'Daniel Brown',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel',
    personalInfo: 'Daniel is an enthusiastic sports and stadium tour expert, ready to immerse you in London\'s vibrant sporting culture. Whether it\'s the roar of a football crowd or the history of a legendary cricket ground, he brings the passion and excitement of British sports to life. His tours are perfect for fans looking to experience the thrill and heritage of London\'s athletic arenas.',
    tags: ['sports', 'stadiums', 'football', 'cricket', 'sporting-events'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'Chris H.', reviewText: 'Daniel made the stadium tour unforgettable! His enthusiasm for sports is infectious, and he shared so many interesting facts. A must for sports fans!', stars: 5, date: '2025-10-13' },
      { reviewerName: 'Sam J.', reviewText: 'Great tour, but I wish we had more time at each stadium. Daniel was very knowledgeable though.', stars: 4, date: '2025-10-08' }
    ]
  },
  {
    id: 'london-010',
    city: 'London',
    name: 'Isabella Garcia',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Isabella',
    personalInfo: 'Isabella is a stylish and keen-eyed vintage shopping and antiques guide, a true treasure hunter in London\'s eclectic markets. She possesses an uncanny ability to unearth unique finds and forgotten gems, making every shopping excursion an exciting adventure. Join her to discover one-of-a-kind pieces and experience the thrill of the hunt in London\'s most charming antique havens.',
    tags: ['vintage-shopping', 'antiques', 'flea-markets', 'collectibles', 'unique-finds'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Emma T.', reviewText: 'Found amazing vintage pieces with Isabella\'s help! She has an incredible eye for unique finds and made the shopping experience so much fun.', stars: 5, date: '2025-10-12' },
      { reviewerName: 'Chloe L.', reviewText: 'Isabella is a treasure hunter extraordinaire! We visited some fantastic flea markets and came away with some truly special items. Loved it!', stars: 5, date: '2025-10-07' },
      { reviewerName: 'Sophia R.', reviewText: 'Enjoyed the vintage shopping, but some markets were a bit too crowded for my liking. Isabella was helpful, but I prefer a more relaxed pace.', stars: 3, date: '2025-10-02' }
    ]
  },

  // Paris guides (10)
  {
    id: 'paris-001',
    city: 'Paris',
    name: 'Marie Dubois',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marie',
    personalInfo: 'Marie is an eloquent art historian and a dedicated Louvre specialist, with a gift for bringing masterpieces to life. Her tours are not just about seeing art, but understanding its context, its creators, and its enduring impact. She transforms a visit to the museum into an engaging narrative, making complex art history accessible and utterly captivating for all.',
    tags: ['art-history', 'museums', 'louvre', 'impressionism', 'guided-tours'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Julia F.', reviewText: 'Marie\'s art knowledge is phenomenal! She brought the Louvre to life with her insightful commentary and passion for art history. Truly a master storyteller.', stars: 5, date: '2025-10-20' },
      { reviewerName: 'Robert G.', reviewText: 'An absolutely captivating tour of the Louvre. Marie has an incredible ability to explain complex art concepts in an engaging and understandable way. Highly recommend!', stars: 5, date: '2025-10-15' },
      { reviewerName: 'Laura H.', reviewText: 'Marie made the masterpieces truly sing! Her deep understanding of impressionism was particularly enlightening. A must for art lovers visiting Paris.', stars: 5, date: '2025-10-10' },
      { reviewerName: 'Peter S.', reviewText: 'The tour was informative, but the museum was very crowded, which made it hard to fully appreciate the art. Marie did her best though.', stars: 4, date: '2025-10-05' }
    ]
  },
  {
    id: 'paris-002',
    city: 'Paris',
    name: 'Pierre Laurent',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pierre',
    personalInfo: 'Pierre, a former pastry chef, now guides visitors on a delectable journey through Paris\'s culinary excellence. His tours are a sweet exploration of the city\'s finest bakeries and patisseries, where he shares his expert knowledge of French confections. With Pierre, you\'ll savor the exquisite tastes of Paris and uncover the secrets behind its world-renowned pastries.',
    tags: ['pastries', 'bakeries', 'french-cuisine', 'food-tours', 'cooking-classes'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Sophie B.', reviewText: 'Pierre knows every great bakery in Paris! His pastry chef background truly shines through, offering unique insights into French culinary excellence. A delicious experience!', stars: 5, date: '2025-10-19' },
      { reviewerName: 'Mark D.', reviewText: 'The best food tour I\'ve ever been on! Pierre\'s passion for pastries is infectious, and we tasted so many incredible treats. My sweet tooth is eternally grateful.', stars: 5, date: '2025-10-14' },
      { reviewerName: 'Emily W.', reviewText: 'Pierre is a true expert. He not only guided us to amazing bakeries but also explained the history and techniques behind the pastries. Highly educational and delicious!', stars: 5, date: '2025-10-09' }
    ]
  },
  {
    id: 'paris-003',
    city: 'Paris',
    name: 'Amélie Rousseau',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amelie',
    personalInfo: 'Amélie is a chic fashion district insider and a discerning vintage style expert, curating truly Parisian experiences. She guides you through the city\'s most fashionable streets and hidden boutiques, sharing her impeccable taste and knowledge of French elegance. Her tours are an invitation to discover your own Parisian style and immerse yourself in the world of haute couture and timeless fashion.',
    tags: ['fashion', 'shopping', 'vintage', 'style', 'designer-boutiques'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Claire D.', reviewText: 'Amélie has impeccable taste and style! She guided us to the most charming boutiques and helped me find some truly unique Parisian pieces. A fantastic shopping experience!', stars: 5, date: '2025-10-21' },
      { reviewerName: 'Jessica L.', reviewText: 'If you want to experience chic Parisian fashion, Amélie is your guide! She knows all the best vintage spots and has an amazing eye for style. Loved every moment!', stars: 5, date: '2025-10-16' },
      { reviewerName: 'Olivia M.', reviewText: 'Amélie is a fashionista\'s dream guide! She made shopping in Paris an absolute joy, sharing her expertise and helping me discover my own Parisian flair.', stars: 5, date: '2025-10-11' }
    ]
  },
  {
    id: 'paris-004',
    city: 'Paris',
    name: 'Jean-Luc Martin',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JeanLuc',
    personalInfo: 'Jean-Luc is a profound architecture and Gothic Notre-Dame specialist, a true expert in medieval Paris. He unveils the intricate beauty and historical significance of the city\'s ancient structures, from grand cathedrals to hidden alleyways. His tours are a deep dive into the architectural wonders of Paris, offering a rich understanding of its storied past.',
    tags: ['architecture', 'gothic', 'medieval-history', 'churches', 'historic-buildings'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'Michael S.', reviewText: 'Jean-Luc\'s architectural insights were fascinating! He brought the history of Notre-Dame and medieval Paris to life with such detail and passion. A truly enriching tour.', stars: 5, date: '2025-10-18' },
      { reviewerName: 'Sophia K.', reviewText: 'A deep dive into Parisian architecture. Jean-Luc is incredibly knowledgeable and made us appreciate the intricate beauty of the city\'s historic buildings even more.', stars: 5, date: '2025-10-13' },
      { reviewerName: 'Daniel B.', reviewText: 'Very informative, but a lot of walking. Jean-Luc knows his stuff, but I would have preferred a slightly slower pace.', stars: 4, date: '2025-10-08' }
    ]
  },
  {
    id: 'paris-005',
    city: 'Paris',
    name: 'Camille Bonnet',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Camille',
    personalInfo: 'Camille is a charming Seine river guide and a romantic Paris specialist, dedicated to creating magical moments for her guests. Her tours along the Seine are designed to capture the enchanting beauty of Paris, especially during sunset. With Camille, you\'ll experience the city\'s romantic allure, perfect for couples or anyone seeking a truly picturesque Parisian memory.',
    tags: ['river-cruises', 'romantic', 'sunset-tours', 'photography', 'couples'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Daniel & Ana', reviewText: 'Perfect romantic evening! Camille is wonderful, and her Seine river cruise at sunset was truly magical. An unforgettable experience for couples.', stars: 5, date: '2025-10-22' },
      { reviewerName: 'Liam T.', reviewText: 'Camille created such a beautiful and romantic atmosphere on the Seine. Her photography tips were also a great bonus! Highly recommend for a special occasion.', stars: 5, date: '2025-10-17' },
      { reviewerName: 'Chloe R.', reviewText: 'The sunset tour was lovely, but the boat was a bit crowded. Camille was charming, but it was hard to hear her at times.', stars: 3, date: '2025-10-12' }
    ]
  },
  {
    id: 'paris-006',
    city: 'Paris',
    name: 'Étienne Moreau',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Etienne',
    personalInfo: 'Étienne is a sophisticated wine sommelier and a knowledgeable bistro expert, offering authentic Parisian dining experiences. He guides you through the city\'s culinary landscape, pairing exquisite wines with traditional French dishes in charming local bistros. With Étienne, you\'ll not only taste the flavors of Paris but also learn the art of French gastronomy and wine appreciation.',
    tags: ['wine', 'bistros', 'french-cuisine', 'wine-tasting', 'local-restaurants'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Paul R.', reviewText: 'Étienne\'s wine knowledge is extraordinary! He introduced us to some incredible French wines and paired them perfectly with delicious bistro dishes. A true connoisseur!', stars: 5, date: '2025-10-17' },
      { reviewerName: 'Sarah J.', reviewText: 'An authentic Parisian dining experience. Étienne knows all the best local bistros and shared fascinating insights into French wine culture. Magnifique!', stars: 5, date: '2025-10-12' },
      { reviewerName: 'David M.', reviewText: 'Enjoyed the wine tasting, but the bistro was a bit noisy. Étienne was very informative, but I prefer a quieter setting.', stars: 4, date: '2025-10-07' }
    ]
  },
  {
    id: 'paris-007',
    city: 'Paris',
    name: 'Léa Fournier',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lea',
    personalInfo: 'Léa is a spirited Montmartre artist and a passionate bohemian Paris guide, where she believes art truly meets life. She leads you through the winding streets and artistic enclaves of Montmartre, sharing insights into the lives of famous artists and the vibrant creative spirit of the neighborhood. Her tours are an inspiring journey into the heart of Parisian artistic heritage.',
    tags: ['montmartre', 'art', 'bohemian', 'artists', 'creative-spaces'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Isabella M.', reviewText: 'Léa showed us the artist\'s Paris we dreamed of! Her passion for Montmartre and its bohemian spirit is truly inspiring. A wonderful journey into the heart of Parisian art.', stars: 5, date: '2025-10-16' },
      { reviewerName: 'Oliver P.', reviewText: 'Montmartre came alive with Léa! She shared so many fascinating stories about the artists who lived and worked there. A truly immersive and creative experience.', stars: 5, date: '2025-10-11' },
      { reviewerName: 'Emma S.', reviewText: 'Léa is a fantastic guide! She has a deep connection to the artistic soul of Montmartre and made us feel like we were part of its history. Highly recommend!', stars: 5, date: '2025-10-06' }
    ]
  },
  {
    id: 'paris-008',
    city: 'Paris',
    name: 'Hugo Petit',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hugo',
    personalInfo: 'Hugo is a cool jazz clubs and nightlife expert, a true specialist in Paris after dark. He knows all the hidden speakeasies and lively music venues, guiding you to the city\'s most vibrant nocturnal spots. With Hugo, you\'ll experience the rhythmic pulse of Parisian jazz and discover the unforgettable energy of its evening entertainment.',
    tags: ['jazz', 'nightlife', 'music', 'bars', 'entertainment'],
    rating: 4.6,
    reviews: [
      { reviewerName: 'Marcus J.', reviewText: 'Hugo knows all the best jazz spots! We had an incredible night exploring Paris\'s vibrant music scene. His recommendations were spot on.', stars: 4, date: '2025-10-15' },
      { reviewerName: 'Sophia B.', reviewText: 'A fun night out, but some of the jazz clubs were a bit too smoky for my liking. Hugo was a good guide though.', stars: 3, date: '2025-10-10' },
      { reviewerName: 'Liam G.', reviewText: 'Hugo is the ultimate guide to Parisian nightlife! He took us to some amazing hidden bars and live music venues. An unforgettable evening!', stars: 5, date: '2025-10-05' }
    ]
  },
  {
    id: 'paris-009',
    city: 'Paris',
    name: 'Charlotte Blanc',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlotte',
    personalInfo: 'Charlotte is an eloquent literary Paris and bookshop guide, inviting you to walk with writers through history. She uncovers the literary haunts, historic cafes, and charming bookshops that have inspired generations of authors. Her tours are a delightful exploration for bibliophiles, offering a deep connection to the intellectual and creative soul of Paris.',
    tags: ['literature', 'bookshops', 'writers', 'cultural-history', 'left-bank'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Emma L.', reviewText: 'Charlotte brings literary Paris to life beautifully! Her knowledge of writers and their haunts is truly impressive. A delightful tour for any book lover.', stars: 5, date: '2025-10-14' },
      { reviewerName: 'Noah P.', reviewText: 'A charming walk through the literary history of Paris. Charlotte is a wonderful storyteller and made every stop feel significant. Highly recommend!', stars: 5, date: '2025-10-09' }
    ]
  },
  {
    id: 'paris-010',
    city: 'Paris',
    name: 'Antoine Girard',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Antoine',
    personalInfo: 'Antoine is a distinguished Versailles and palace expert, a true specialist in royal French history. He transports you back to the opulent era of kings and queens, revealing the grandeur and secrets of Versailles and other magnificent châteaux. His tours are a regal journey through France\'s majestic past, filled with captivating stories and historical insights.',
    tags: ['versailles', 'palaces', 'royal-history', 'gardens', 'luxury-tours'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Victoria S.', reviewText: 'Antoine made Versailles come alive with stories! His deep knowledge of royal French history is incredible, and he painted such a vivid picture of the past. A truly grand experience.', stars: 5, date: '2025-10-13' },
      { reviewerName: 'James R.', reviewText: 'A magnificent tour of Versailles. Antoine is an exceptional guide, providing fascinating insights into the lives of the French monarchy. Felt like royalty ourselves!', stars: 5, date: '2025-10-08' },
      { reviewerName: 'Sophia C.', reviewText: 'Versailles is stunning, but the tour felt a bit rushed. Antoine was very informative, but I would have liked more time to explore the gardens.', stars: 4, date: '2025-10-03' }
    ]
  },

  // Tokyo guides (10)
  {
    id: 'tokyo-001',
    city: 'Tokyo',
    name: 'Yuki Tanaka',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yuki',
    personalInfo: 'Yuki is a serene traditional tea ceremony master and a tranquil zen garden specialist. She offers an immersive experience into the profound beauty and philosophy of Japanese culture. Her tours are a journey of mindfulness and aesthetic appreciation, inviting you to discover the peaceful harmony of Tokyo\'s hidden spiritual havens and the elegance of the tea ritual.',
    tags: ['tea-ceremony', 'zen-gardens', 'traditional-culture', 'temples', 'mindfulness'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Sarah W.', reviewText: 'Yuki\'s tea ceremony was a spiritual experience! Her grace and knowledge made it truly unforgettable. A serene escape in the heart of Tokyo.', stars: 5, date: '2025-10-21' },
      { reviewerName: 'David L.', reviewText: 'The zen garden tour with Yuki was incredibly peaceful and insightful. She has a wonderful way of explaining the philosophy behind these beautiful spaces. Highly recommend for mindfulness.', stars: 5, date: '2025-10-16' },
      { reviewerName: 'Emily R.', reviewText: 'Yuki is a master of traditional Japanese culture. The tea ceremony was authentic and deeply moving. A highlight of our trip to Tokyo!', stars: 5, date: '2025-10-11' },
      { reviewerName: 'Mark P.', reviewText: 'The tea ceremony was interesting, but I found it a bit too formal for my taste. Yuki was very polite, but I prefer a more relaxed atmosphere.', stars: 3, date: '2025-10-06' }
    ]
  },
  {
    id: 'tokyo-002',
    city: 'Tokyo',
    name: 'Hiroshi Sato',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hiroshi',
    personalInfo: 'Hiroshi is an enthusiastic anime and manga otaku culture expert, a true Akihabara insider. He guides you through the vibrant world of Tokyo\'s pop culture, from bustling arcades to specialized manga shops. With Hiroshi, you\'ll dive deep into the heart of Japanese fandom, discovering the latest trends and timeless classics that define Tokyo\'s unique youth culture.',
    tags: ['anime', 'manga', 'otaku-culture', 'akihabara', 'gaming'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Jake M.', reviewText: 'Hiroshi showed us the best anime shops and cafes! As an otaku, this was a dream come true. His knowledge of Akihabara is unparalleled!', stars: 5, date: '2025-10-20' },
      { reviewerName: 'Chloe T.', reviewText: 'If you\'re into anime and manga, Hiroshi is the guide for you! He made Akihabara an even more exciting place to explore. So much fun!', stars: 5, date: '2025-10-15' },
      { reviewerName: 'Ben S.', reviewText: 'Hiroshi is super enthusiastic and knows everything about otaku culture. We found some rare collectibles thanks to him! Best guide ever!', stars: 5, date: '2025-10-10' }
    ]
  },
  {
    id: 'tokyo-003',
    city: 'Tokyo',
    name: 'Sakura Yamamoto',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sakura',
    personalInfo: 'Sakura, a skilled sushi chef and an expert Tsukiji market guide, shares her deep knowledge of fresh fish and Japanese culinary traditions. Her tours are a sensory delight, exploring the bustling market and revealing the secrets behind authentic sushi preparation. Join her for an unforgettable gastronomic adventure, where you\'ll taste the true essence of Tokyo\'s seafood culture.',
    tags: ['sushi', 'fish-market', 'japanese-cuisine', 'food-tours', 'cooking'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'David K.', reviewText: 'Best sushi tour ever! Sakura is amazing, and her insights into Japanese culinary traditions were fascinating. A true gastronomic delight!', stars: 5, date: '2025-10-19' },
      { reviewerName: 'Maria G.', reviewText: 'Sakura\'s Tsukiji market tour was incredible. We learned so much about fresh fish and even got to try some amazing sushi. Highly recommend!', stars: 5, date: '2025-10-14' },
      { reviewerName: 'John P.', reviewText: 'As a sushi chef herself, Sakura offers a unique perspective. Her passion for food is infectious, and she made the tour so enjoyable. Five stars!', stars: 5, date: '2025-10-09' },
      { reviewerName: 'Sarah B.', reviewText: 'The market was very crowded, and it was hard to keep up at times. Sakura was knowledgeable, but I felt a bit overwhelmed.', stars: 3, date: '2025-10-04' }
    ]
  },
  {
    id: 'tokyo-004',
    city: 'Tokyo',
    name: 'Kenji Nakamura',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kenji',
    personalInfo: 'Kenji is a passionate sumo wrestling expert and a dedicated traditional sports guide. He offers a powerful insight into the ancient rituals and thrilling athleticism of sumo, sharing stories of legendary rikishi and the sport\'s cultural significance. His tours are an exhilarating experience, connecting you with the enduring spirit of Japanese martial arts and tradition.',
    tags: ['sumo', 'traditional-sports', 'cultural-events', 'tournaments', 'japanese-history'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'Robert F.', reviewText: 'Kenji explained sumo culture perfectly! His passion for traditional Japanese sports is truly captivating. We learned so much about this ancient art form.', stars: 5, date: '2025-10-18' },
      { reviewerName: 'Lisa M.', reviewText: 'An exhilarating experience! Kenji made the sumo wrestling event so much more understandable and exciting. A unique cultural insight.', stars: 5, date: '2025-10-13' },
      { reviewerName: 'Tom H.', reviewText: 'Kenji is a fantastic guide for anyone interested in sumo. He shared fascinating stories and explained the rituals beautifully. Highly recommend!', stars: 5, date: '2025-10-08' }
    ]
  },
  {
    id: 'tokyo-005',
    city: 'Tokyo',
    name: 'Aiko Suzuki',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aiko',
    personalInfo: 'Aiko is a poetic cherry blossom and seasonal Japan specialist, deeply connected to the country\'s nature and traditions. She guides you through the ephemeral beauty of Japan\'s changing seasons, from the delicate pinks of spring to the fiery reds of autumn. Her tours are a celebration of natural artistry, offering breathtaking photographic opportunities and a serene appreciation for Japan\'s seasonal wonders.',
    tags: ['cherry-blossoms', 'seasons', 'nature', 'photography', 'traditional-festivals'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Michelle L.', reviewText: 'Aiko found the most beautiful cherry blossom spots! Her knowledge of seasonal Japan is incredible, and she made our photography tour truly magical. So grateful!', stars: 5, date: '2025-10-22' },
      { reviewerName: 'James K.', reviewText: 'Aiko is a wonderful guide for experiencing the ephemeral beauty of Japan. Her tours are peaceful and deeply appreciative of nature. Highly recommend for a serene experience.', stars: 5, date: '2025-10-17' },
      { reviewerName: 'Sophia P.', reviewText: 'The cherry blossom tour was lovely, but the weather wasn\'t ideal. Aiko did her best to find good spots, but it was a bit disappointing.', stars: 4, date: '2025-10-12' }
    ]
  },
  {
    id: 'tokyo-006',
    city: 'Tokyo',
    name: 'Takeshi Ito',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Takeshi',
    personalInfo: 'Takeshi is a dynamic technology and Shibuya nightlife guide, a true expert in modern Tokyo. He navigates you through the neon-lit streets and futuristic districts, showcasing the city\'s innovative spirit and vibrant entertainment scene. With Takeshi, you\'ll experience the exhilarating pulse of contemporary Tokyo, from cutting-edge gadgets to unforgettable evening adventures.',
    tags: ['technology', 'nightlife', 'shibuya', 'modern-culture', 'entertainment'],
    rating: 4.6,
    reviews: [
      { reviewerName: 'Alex T.', reviewText: 'Takeshi showed us cutting-edge Tokyo! His insights into technology and Shibuya nightlife were fantastic. A truly modern and exciting tour.', stars: 4, date: '2025-10-17' },
      { reviewerName: 'Emma C.', reviewText: 'The nightlife tour with Takeshi was a blast! He knows all the best spots and made sure we had a great time. Very energetic and fun!', stars: 5, date: '2025-10-12' },
      { reviewerName: 'Daniel R.', reviewText: 'Interesting tour, but some of the technology districts were a bit overwhelming. Takeshi was knowledgeable, but I prefer a calmer pace.', stars: 3, date: '2025-10-07' }
    ]
  },
  {
    id: 'tokyo-007',
    city: 'Tokyo',
    name: 'Misaki Kobayashi',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Misaki',
    personalInfo: 'Misaki is an elegant kimono and traditional fashion specialist, embodying cultural elegance. She introduces you to the intricate beauty and history of Japanese attire, offering insights into its craftsmanship and significance. Her tours are a graceful journey into the world of traditional Japanese aesthetics, perfect for those who appreciate artistry and cultural heritage.',
    tags: ['kimono', 'traditional-fashion', 'culture', 'dress-up', 'photography'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Emily R.', reviewText: 'Wearing kimono with Misaki was unforgettable! She made the experience so special and taught us so much about traditional Japanese fashion. Truly elegant!', stars: 5, date: '2025-10-16' },
      { reviewerName: 'Sarah K.', reviewText: 'Misaki is a wonderful guide for anyone interested in Japanese cultural elegance. Her knowledge of kimono and traditional dress is extensive. A beautiful experience.', stars: 5, date: '2025-10-11' }
    ]
  },
  {
    id: 'tokyo-008',
    city: 'Tokyo',
    name: 'Ryo Watanabe',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ryo',
    personalInfo: 'Ryo is a savvy ramen and street food expert, delving into Tokyo\'s delicious culinary underground. He knows all the best hidden noodle shops and bustling street stalls, guiding you to authentic flavors and unforgettable gastronomic experiences. With Ryo, you\'ll slurp your way through Tokyo\'s diverse food scene, discovering the true taste of local life.',
    tags: ['ramen', 'street-food', 'local-eats', 'food-tours', 'hidden-gems'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Tom H.', reviewText: 'Ryo knows every great ramen spot in Tokyo! His street food tour was a culinary adventure, discovering hidden gems and incredible flavors. My taste buds are forever grateful!', stars: 5, date: '2025-10-15' },
      { reviewerName: 'Jessica L.', reviewText: 'The best food tour in Tokyo! Ryo is passionate about ramen and shared so much about its history and regional variations. A truly delicious and educational experience.', stars: 5, date: '2025-10-10' },
      { reviewerName: 'Oliver P.', reviewText: 'Ryo is a ramen master! He took us to places we never would have found on our own, and every bowl was a masterpiece. Highly recommend for foodies!', stars: 5, date: '2025-10-05' },
      { reviewerName: 'Chloe M.', reviewText: 'The ramen was good, but the tour felt a bit rushed between stops. Ryo was enthusiastic, but I prefer a more relaxed pace for eating.', stars: 3, date: '2025-09-30' }
    ]
  },
  {
    id: 'tokyo-009',
    city: 'Tokyo',
    name: 'Hana Yoshida',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hana',
    personalInfo: 'Hana is a stylish Harajuku fashion and youth culture guide, showcasing the trendiest side of Tokyo. She leads you through the colorful and eccentric streets of Harajuku, revealing the latest fashion statements and subcultures. Her tours are a vibrant exploration of Tokyo\'s youthful energy and creative expression, perfect for those seeking inspiration and unique street style.',
    tags: ['harajuku', 'fashion', 'youth-culture', 'shopping', 'street-style'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Sophia M.', reviewText: 'Hana\'s fashion sense is incredible! She guided us through Harajuku with such style and insight into youth culture. A truly trendy Tokyo experience!', stars: 5, date: '2025-10-14' },
      { reviewerName: 'Liam K.', reviewText: 'Harajuku with Hana was a blast! She knows all the coolest shops and helped us understand the unique street style. So much fun and inspiration!', stars: 5, date: '2025-10-09' },
      { reviewerName: 'Emma B.', reviewText: 'Hana is the perfect guide for exploring trendy Tokyo. Her energy is infectious, and she made us feel right at home in the vibrant Harajuku scene.', stars: 5, date: '2025-10-04' }
    ]
  },
  {
    id: 'tokyo-010',
    city: 'Tokyo',
    name: 'Daichi Fujita',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Daichi',
    personalInfo: 'Daichi is an adventurous Mount Fuji and day trip specialist, offering breathtaking nature escapes from Tokyo. He guides you to the most stunning viewpoints and serene landscapes surrounding Japan\'s iconic peak. With Daichi, you\'ll experience the majestic beauty of Mount Fuji and discover tranquil natural retreats, perfect for photography and peaceful contemplation.',
    tags: ['mount-fuji', 'day-trips', 'nature', 'hiking', 'scenic-tours'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Laura P.', reviewText: 'Amazing day trip to Fuji with Daichi! His knowledge of the area and best viewpoints made for breathtaking photos. Truly unforgettable!', stars: 5, date: '2025-10-13' },
      { reviewerName: 'Chris T.', reviewText: 'Daichi is an excellent guide for Mount Fuji. He planned everything perfectly, and we had a wonderful time exploring the nature around the iconic peak. Highly recommend!', stars: 5, date: '2025-10-08' },
      { reviewerName: 'Sarah D.', reviewText: 'The views of Mount Fuji were spectacular, but the weather was a bit cloudy. Daichi was great, but some things are out of his control.', stars: 4, date: '2025-10-03' }
    ]
  },

  // Mumbai guides (10)
  {
    id: 'mumbai-001',
    city: 'Mumbai',
    name: 'Raj Patel',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Raj',
    personalInfo: 'Raj is a charismatic Bollywood insider and an engaging film city guide, revealing the glamour and magic of Indian cinema. He takes you behind the scenes, sharing fascinating stories of movie-making and celebrity culture. With Raj, you\'ll experience the vibrant energy of Mumbai\'s film industry, perfect for aspiring actors, film buffs, or anyone curious about the world\'s largest film industry.',
    tags: ['bollywood', 'film-industry', 'entertainment', 'studios', 'celebrity-culture'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Chris A.', reviewText: 'Raj gave us exclusive Bollywood access! His insider stories and knowledge of the film industry were absolutely captivating. A dream come true for any movie buff!', stars: 5, date: '2025-10-21' },
      { reviewerName: 'Jessica M.', reviewText: 'An incredible journey into the heart of Indian cinema. Raj is a fantastic guide, full of energy and fascinating anecdotes. Highly recommend for a taste of Bollywood glamour!', stars: 5, date: '2025-10-16' },
      { reviewerName: 'David S.', reviewText: 'Raj made the film city tour so much fun! We learned about the history of Bollywood and even saw some live filming. A truly unique experience.', stars: 5, date: '2025-10-11' },
      { reviewerName: 'Emily R.', reviewText: 'The Bollywood tour was interesting, but some parts felt a bit staged. Raj was enthusiastic, but I expected a more authentic behind-the-scenes look.', stars: 3, date: '2025-10-06' }
    ]
  },
  {
    id: 'mumbai-002',
    city: 'Mumbai',
    name: 'Priya Sharma',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PriyaS',
    personalInfo: 'Priya is a delightful street food queen and a knowledgeable spice market specialist, offering a true taste of authentic Mumbai flavors. She guides you through bustling markets and hidden food stalls, introducing you to the city\'s diverse culinary landscape. With Priya, every bite is an adventure, and every spice tells a story of Mumbai\'s rich gastronomic heritage.',
    tags: ['street-food', 'spices', 'local-markets', 'indian-cuisine', 'food-tours'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Anna K.', reviewText: 'Priya\'s food tour was amazing! So many flavors and incredible street food. She truly is the street food queen of Mumbai! My taste buds are still tingling.', stars: 5, date: '2025-10-20' },
      { reviewerName: 'Mark T.', reviewText: 'A culinary adventure through Mumbai! Priya introduced us to so many authentic dishes and explained the spices and ingredients beautifully. A must-do for foodies!', stars: 5, date: '2025-10-15' },
      { reviewerName: 'Sophie L.', reviewText: 'Priya is a fantastic guide! Her passion for Mumbai\'s street food is infectious, and she made sure we tried all the best local delicacies. Delicious and fun!', stars: 5, date: '2025-10-10' }
    ]
  },
  {
    id: 'mumbai-003',
    city: 'Mumbai',
    name: 'Arjun Mehta',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun',
    personalInfo: 'Arjun is a meticulous colonial architecture and heritage building expert, deeply knowledgeable about Mumbai\'s British legacy. He leads captivating walking tours through the city\'s historic districts, unveiling the stories behind grand Victorian structures and art deco masterpieces. With Arjun, you\'ll journey back in time, appreciating the intricate details and enduring charm of Mumbai\'s architectural past.',
    tags: ['colonial-architecture', 'heritage', 'history', 'walking-tours', 'british-era'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'James B.', reviewText: 'Arjun\'s knowledge of Mumbai history is impressive! His colonial architecture tour was incredibly insightful, revealing the city\'s rich British legacy. A fascinating walk through time.', stars: 5, date: '2025-10-19' },
      { reviewerName: 'Laura P.', reviewText: 'A truly enriching heritage tour. Arjun brought the stories of Mumbai\'s historic buildings to life with such detail and passion. Highly recommend for history buffs.', stars: 5, date: '2025-10-14' },
      { reviewerName: 'Oliver S.', reviewText: 'Arjun is a very knowledgeable guide, but the walking tour was quite long. I enjoyed the history, but my feet were tired by the end.', stars: 4, date: '2025-10-09' }
    ]
  },
  {
    id: 'mumbai-004',
    city: 'Mumbai',
    name: 'Neha Desai',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha',
    personalInfo: 'Neha is a sophisticated art galleries and contemporary culture guide, showcasing Mumbai\'s vibrant modern art scene. She introduces you to cutting-edge exhibitions and emerging artists, offering insights into India\'s dynamic creative landscape. With Neha, you\'ll explore the pulse of contemporary Indian art, discovering galleries and cultural spaces that define Mumbai\'s artistic present.',
    tags: ['art-galleries', 'contemporary-art', 'culture', 'exhibitions', 'artists'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Sophie L.', reviewText: 'Neha showed us incredible contemporary Indian art! Her insights into the modern Mumbai art scene were truly inspiring. A fantastic cultural experience.', stars: 5, date: '2025-10-18' },
      { reviewerName: 'Daniel M.', reviewText: 'A wonderful tour of Mumbai\'s art galleries. Neha has a great eye for emerging artists and explained the cultural context beautifully. Highly recommend!', stars: 5, date: '2025-10-13' },
      { reviewerName: 'Chloe F.', reviewText: 'Neha is a passionate guide to Mumbai\'s art scene. We saw some truly thought-provoking exhibitions. A great way to experience modern Indian culture.', stars: 5, date: '2025-10-08' }
    ]
  },
  {
    id: 'mumbai-005',
    city: 'Mumbai',
    name: 'Vikram Singh',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram',
    personalInfo: 'Vikram is a fascinating Dabbawala system expert and a logistics marvel guide, revealing a truly unique aspect of Mumbai\'s culture. He explains the intricate workings of this legendary lunchbox delivery system, a testament to human efficiency and dedication. With Vikram, you\'ll gain an unparalleled insight into Mumbai\'s daily rhythm and the incredible people who keep the city moving.',
    tags: ['dabbawala', 'local-culture', 'unique-experiences', 'logistics', 'street-life'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Mark W.', reviewText: 'Fascinating look at Mumbai\'s dabbawala system! Vikram explained the logistics marvel with such clarity and enthusiasm. A truly unique cultural insight.', stars: 5, date: '2025-10-22' },
      { reviewerName: 'Jessica H.', reviewText: 'Vikram provided an eye-opening tour into the incredible dabbawala system. It\'s amazing to see such efficiency in action. Highly recommend this unique experience!', stars: 5, date: '2025-10-17' },
      { reviewerName: 'Peter J.', reviewText: 'An interesting tour, but it was a bit hard to follow the dabbawalas in the bustling city. Vikram was very informative though.', stars: 4, date: '2025-10-12' }
    ]
  },
  {
    id: 'mumbai-006',
    city: 'Mumbai',
    name: 'Anjali Kapoor',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali',
    personalInfo: 'Anjali is a serene temple and spiritual sites guide, leading you through the sacred heart of Mumbai. She shares profound insights into India\'s diverse religious traditions, visiting ancient temples and peaceful spiritual havens. With Anjali, you\'ll experience a journey of introspection and cultural understanding, connecting with the spiritual essence that permeates Mumbai.',
    tags: ['temples', 'spiritual', 'religion', 'sacred-sites', 'meditation'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Rachel M.', reviewText: 'Anjali provided beautiful spiritual insights! Her temple tour was incredibly peaceful and enlightening. A truly sacred experience in Mumbai.', stars: 5, date: '2025-10-17' },
      { reviewerName: 'Thomas C.', reviewText: 'A wonderful journey through Mumbai\'s spiritual sites. Anjali is a very knowledgeable and respectful guide. Highly recommend for those seeking cultural understanding.', stars: 5, date: '2025-10-12' },
      { reviewerName: 'Sophia G.', reviewText: 'The temple tour was interesting, but some sites were very crowded. Anjali was serene, but I prefer a more intimate experience.', stars: 4, date: '2025-10-07' }
    ]
  },
  {
    id: 'mumbai-007',
    city: 'Mumbai',
    name: 'Sanjay Kumar',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sanjay',
    personalInfo: 'Sanjay is a compassionate Dharavi and community tour specialist, dedicated to sharing real Mumbai stories with respect and authenticity. He offers an eye-opening experience into the vibrant entrepreneurial spirit and close-knit communities of Dharavi. With Sanjay, you\'ll gain a deeper understanding of urban resilience and the human spirit, fostering connections that go beyond typical tourism.',
    tags: ['dharavi', 'community-tours', 'social-impact', 'authentic', 'local-life'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Thomas R.', reviewText: 'Sanjay\'s tour was eye-opening and respectful. He shared real Mumbai stories from Dharavi with such authenticity and compassion. A truly impactful experience.', stars: 5, date: '2025-10-16' },
      { reviewerName: 'Laura B.', reviewText: 'A powerful and insightful community tour. Sanjay is an excellent guide who fosters genuine connections and understanding. Highly recommend for a unique perspective.', stars: 5, date: '2025-10-11' },
      { reviewerName: 'Mark K.', reviewText: 'Sanjay is a fantastic guide, and the tour was very informative. It\'s a humbling experience to see the resilience and spirit of the Dharavi community.', stars: 5, date: '2025-10-06' },
      { reviewerName: 'Jessica P.', reviewText: 'While the tour was informative, I felt a bit uncomfortable at times, like we were intruding. Sanjay was respectful, but it\'s a challenging experience.', stars: 2, date: '2025-10-01' }
    ]
  },
  {
    id: 'mumbai-008',
    city: 'Mumbai',
    name: 'Kavita Joshi',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kavita',
    personalInfo: 'Kavita is a vibrant textile and fabric market expert, passionate about traditional Indian crafts. She guides you through bustling markets filled with colorful silks, intricate embroideries, and unique handloom products. With Kavita, you\'ll discover the artistry of Indian textiles, learn about different weaving techniques, and find exquisite souvenirs that tell a story of heritage and craftsmanship.',
    tags: ['textiles', 'fabrics', 'markets', 'traditional-crafts', 'shopping'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'Lisa H.', reviewText: 'Kavita helped me find the most beautiful fabrics! Her knowledge of traditional Indian crafts is incredible, and she made shopping a delightful experience. So many unique finds!', stars: 5, date: '2025-10-15' },
      { reviewerName: 'Sarah W.', reviewText: 'A wonderful textile market tour. Kavita is passionate about Indian fabrics and shared so much about their history and craftsmanship. Highly recommend for shoppers and craft enthusiasts.', stars: 5, date: '2025-10-10' },
      { reviewerName: 'Emily C.', reviewText: 'Kavita is a gem! She guided us to the best stalls and helped us find some exquisite traditional pieces. A truly authentic shopping experience in Mumbai.', stars: 5, date: '2025-10-05' }
    ]
  },
  {
    id: 'mumbai-009',
    city: 'Mumbai',
    name: 'Rohan Iyer',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan',
    personalInfo: 'Rohan is a charming Marine Drive and waterfront specialist, capturing the magic of sunset Mumbai. He guides you along the iconic Queen\'s Necklace, sharing local stories and the best spots for breathtaking views as the sun dips below the Arabian Sea. With Rohan, you\'ll experience the romantic allure of Mumbai\'s coastline, perfect for a leisurely evening stroll and unforgettable memories.',
    tags: ['marine-drive', 'waterfront', 'sunsets', 'romantic', 'scenic-views'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Julia & Mike', reviewText: 'Perfect sunset experience with Rohan! Marine Drive truly lives up to its name, and Rohan made it even more special with his local stories. So romantic!', stars: 5, date: '2025-10-14' },
      { reviewerName: 'Chloe S.', reviewText: 'Rohan is a fantastic guide for experiencing the beauty of Mumbai\'s waterfront. The sunset views were breathtaking, and his insights into local life were very interesting. Highly recommend!', stars: 5, date: '2025-10-09' },
      { reviewerName: 'Ben R.', reviewText: 'A lovely evening stroll along Marine Drive. Rohan was charming, but the area was quite crowded, which detracted a little from the peacefulness.', stars: 4, date: '2025-10-04' }
    ]
  },
  {
    id: 'mumbai-010',
    city: 'Mumbai',
    name: 'Meera Nair',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
    personalInfo: 'Meera is an enthusiastic cricket culture and sports expert, truly living the Mumbai cricket passion. She immerses you in the exhilarating world of Indian cricket, from local matches to iconic stadiums, sharing insights into the sport\'s profound cultural significance. With Meera, you\'ll feel the electric energy of a cricket-mad city and understand why it\'s more than just a game in Mumbai.',
    tags: ['cricket', 'sports', 'stadiums', 'local-culture', 'fan-experiences'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Ben S.', reviewText: 'Meera made cricket come alive for us! Her passion for the sport is infectious, and she explained the nuances of Indian cricket culture perfectly. A truly immersive experience!', stars: 5, date: '2025-10-13' },
      { reviewerName: 'Tom W.', reviewText: 'An exhilarating tour for cricket fans! Meera knows everything about Mumbai\'s cricket scene, from local heroes to iconic matches. Highly recommend!', stars: 5, date: '2025-10-08' },
      { reviewerName: 'Liam F.', reviewText: 'Meera is a fantastic guide, but the local match we attended was a bit chaotic. Still, it was an authentic experience of Mumbai\'s cricket passion.', stars: 4, date: '2025-10-03' }
    ]
  },

  // São Paulo guides (10)
  {
    id: 'sao-paulo-001',
    city: 'São Paulo',
    name: 'Lucas Silva',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas',
    personalInfo: 'Lucas is a dynamic street art and graffiti expert, seeing São Paulo as a vast urban canvas. He guides you through vibrant neighborhoods, revealing stunning murals and intricate graffiti that tell the city\'s stories. With Lucas, you\'ll discover the raw artistic energy of São Paulo, understanding the messages and movements behind its captivating street art scene.',
    tags: ['street-art', 'graffiti', 'urban-culture', 'art-tours', 'photography'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Carlos M.', reviewText: 'Lucas knows every amazing mural in SP! His street art tour was incredibly vibrant and insightful, revealing the urban canvas of São Paulo. A truly inspiring experience!', stars: 5, date: '2025-10-21' },
      { reviewerName: 'Sophia P.', reviewText: 'A fantastic journey through São Paulo\'s street art scene. Lucas is passionate and knowledgeable, sharing the stories behind each piece. Highly recommend for art lovers!', stars: 5, date: '2025-10-16' },
      { reviewerName: 'Daniel R.', reviewText: 'Lucas is an excellent guide! He showed us some breathtaking graffiti and explained the cultural significance. A unique way to see the city.', stars: 5, date: '2025-10-11' },
      { reviewerName: 'Emma T.', reviewText: 'The street art was impressive, but the tour involved a lot of walking in busy areas. Lucas was good, but I prefer a more relaxed pace.', stars: 3, date: '2025-10-06' }
    ]
  },
  {
    id: 'sao-paulo-002',
    city: 'São Paulo',
    name: 'Isabella Santos',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=IsabellaS',
    personalInfo: 'Isabella is a delightful Brazilian cuisine and churrascaria specialist, guiding you through São Paulo\'s meat and flavor paradise. She introduces you to the rich traditions of Brazilian barbecue and other local delicacies, ensuring an unforgettable gastronomic experience. With Isabella, you\'ll savor the authentic tastes of Brazil, from succulent grilled meats to vibrant tropical flavors.',
    tags: ['brazilian-cuisine', 'churrascaria', 'food-tours', 'restaurants', 'meat'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Peter J.', reviewText: 'Isabella found the best churrascarias! Her Brazilian cuisine tour was a meat and flavor paradise. My taste buds are still celebrating!', stars: 5, date: '2025-10-20' },
      { reviewerName: 'Laura M.', reviewText: 'A truly authentic Brazilian food experience. Isabella is passionate about her country\'s cuisine and shared so much about the traditions. Delicious and fun!', stars: 5, date: '2025-10-15' },
      { reviewerName: 'Chris S.', reviewText: 'Isabella is a fantastic guide for foodies! We tried so many incredible dishes, and she explained everything perfectly. Highly recommend for a culinary adventure.', stars: 5, date: '2025-10-10' }
    ]
  },
  {
    id: 'sao-paulo-003',
    city: 'São Paulo',
    name: 'Rafael Costa',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rafael',
    personalInfo: 'Rafael is an energetic samba and nightlife guide, showing you where São Paulo truly dances. He takes you to the most authentic samba clubs and lively venues, immersing you in the infectious rhythms and vibrant atmosphere of Brazilian music. With Rafael, you\'ll experience the exhilarating pulse of São Paulo\'s nightlife, learning to move to the beat of this incredible city.',
    tags: ['samba', 'nightlife', 'dancing', 'live-music', 'entertainment'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'Maria L.', reviewText: 'Rafael showed us the best samba clubs! His energy is infectious, and he truly knows where São Paulo dances. An unforgettable night of music and dancing!', stars: 5, date: '2025-10-19' },
      { reviewerName: 'David K.', reviewText: 'A fantastic nightlife tour! Rafael introduced us to the vibrant world of Brazilian samba and made sure we had an amazing time. Highly recommend for a lively evening.', stars: 5, date: '2025-10-14' },
      { reviewerName: 'Sophie B.', reviewText: 'Rafael is a great guide, but some of the clubs were very crowded and loud. I enjoyed the samba, but prefer a slightly calmer atmosphere.', stars: 3, date: '2025-10-09' }
    ]
  },
  {
    id: 'sao-paulo-004',
    city: 'São Paulo',
    name: 'Gabriela Oliveira',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gabriela',
    personalInfo: 'Gabriela is an insightful modern architecture and Oscar Niemeyer specialist, revealing São Paulo\'s architectural wonders. She guides you through the city\'s iconic buildings, sharing the vision and stories behind Niemeyer\'s masterpieces and other modernist gems. With Gabriela, you\'ll gain a deep appreciation for São Paulo\'s innovative design landscape and its significant contribution to global architecture.',
    tags: ['architecture', 'modern-design', 'niemeyer', 'buildings', 'design-tours'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Andrew K.', reviewText: 'Gabriela\'s architecture tour was stunning! Her insights into Oscar Niemeyer\'s work and modern Brazilian design were truly captivating. A must for architecture enthusiasts!', stars: 5, date: '2025-10-18' },
      { reviewerName: 'Jessica P.', reviewText: 'A fascinating journey through São Paulo\'s architectural wonders. Gabriela is incredibly knowledgeable and passionate about the city\'s unique buildings. Highly recommend!', stars: 5, date: '2025-10-13' },
      { reviewerName: 'Oliver T.', reviewText: 'Gabriela is an excellent guide, but the tour involved a lot of walking in the sun. The buildings were impressive, but I wish there were more shaded stops.', stars: 4, date: '2025-10-08' }
    ]
  },
  {
    id: 'sao-paulo-005',
    city: 'São Paulo',
    name: 'Pedro Almeida',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro',
    personalInfo: 'Pedro is a passionate football culture and stadium guide, truly living the São Paulo football passion. He takes you behind the scenes of legendary stadiums, sharing the history, rivalries, and fervent spirit of Brazilian soccer. With Pedro, you\'ll experience the electrifying atmosphere of a match day and understand the deep cultural significance of football in São Paulo.',
    tags: ['football', 'soccer', 'stadiums', 'sports-culture', 'fan-experience'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Diego R.', reviewText: 'Pedro made the football experience incredible! His passion for São Paulo\'s football culture is infectious, and he shared so many interesting stories. A dream come true for any soccer fan!', stars: 5, date: '2025-10-22' },
      { reviewerName: 'Liam F.', reviewText: 'An exhilarating stadium tour! Pedro knows everything about Brazilian football and made us feel like true insiders. Highly recommend for sports enthusiasts!', stars: 5, date: '2025-10-17' },
      { reviewerName: 'Chloe S.', reviewText: 'Pedro is a fantastic guide, but the match we attended was a bit one-sided. Still, it was an authentic experience of São Paulo\'s football passion.', stars: 4, date: '2025-10-12' }
    ]
  },
  {
    id: 'sao-paulo-006',
    city: 'São Paulo',
    name: 'Amanda Ferreira',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda',
    personalInfo: 'Amanda is a warm coffee culture and café specialist, deeply connected to Brazil\'s rich coffee heritage. She guides you through São Paulo\'s best cafes and roasteries, sharing the journey from bean to cup and the nuances of Brazilian coffee. With Amanda, you\'ll savor exquisite brews, learn about coffee production, and immerse yourself in the aromatic world of São Paulo\'s thriving coffee scene.',
    tags: ['coffee', 'cafes', 'brazilian-culture', 'beverages', 'tasting-tours'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Sarah P.', reviewText: 'Amanda\'s coffee tour was heaven for coffee lovers! Her knowledge of Brazil\'s coffee heritage is incredible, and we tasted some truly exquisite brews. A delightful sensory journey!', stars: 5, date: '2025-10-17' },
      { reviewerName: 'Mark J.', reviewText: 'A wonderful immersion into São Paulo\'s coffee culture. Amanda is passionate and informative, guiding us through charming cafes and roasteries. Highly recommend!', stars: 5, date: '2025-10-12' },
      { reviewerName: 'Emily R.', reviewText: 'Amanda is a fantastic guide for coffee enthusiasts! We learned so much about the process from bean to cup and enjoyed some amazing tastings. Five stars!', stars: 5, date: '2025-10-07' }
    ]
  },
  {
    id: 'sao-paulo-007',
    city: 'São Paulo',
    name: 'Bruno Martins',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bruno',
    personalInfo: 'Bruno is a knowledgeable Paulista Avenue and downtown guide, leading you through the vibrant heart of São Paulo. He unveils the historical significance and modern dynamism of this iconic avenue, from its cultural institutions to its bustling street life. With Bruno, you\'ll experience the energetic pulse of São Paulo, understanding its evolution and its role as a major South American metropolis.',
    tags: ['paulista-avenue', 'downtown', 'city-tours', 'urban-exploration', 'landmarks'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'Laura M.', reviewText: 'Bruno showed us the real São Paulo! His Paulista Avenue and downtown tour was incredibly insightful, revealing the city\'s vibrant heart. A truly engaging experience!', stars: 5, date: '2025-10-16' },
      { reviewerName: 'Thomas C.', reviewText: 'A fantastic urban exploration of São Paulo. Bruno is knowledgeable and passionate, sharing the history and dynamism of the city\'s iconic landmarks. Highly recommend!', stars: 5, date: '2025-10-11' },
      { reviewerName: 'Sophia G.', reviewText: 'Bruno is a great guide, but Paulista Avenue was very crowded. I enjoyed the insights, but prefer a less bustling environment.', stars: 4, date: '2025-10-06' }
    ]
  },
  {
    id: 'sao-paulo-008',
    city: 'São Paulo',
    name: 'Juliana Rocha',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juliana',
    personalInfo: 'Juliana is a charming Japanese district and Liberdade specialist, celebrating Brazil\'s unique Japanese heritage. She guides you through the colorful streets of Liberdade, sharing insights into its history, cuisine, and vibrant cultural fusion. With Juliana, you\'ll discover a fascinating blend of traditions, from authentic Japanese gardens to delicious Asian-Brazilian culinary delights.',
    tags: ['japanese-culture', 'liberdade', 'ethnic-neighborhoods', 'asian-cuisine', 'cultural-fusion'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Kenji T.', reviewText: 'Juliana\'s tour of Liberdade was fantastic! Her insights into Brazil\'s Japanese heritage and the cultural fusion were truly captivating. A unique and enriching experience!', stars: 5, date: '2025-10-15' },
      { reviewerName: 'Maria S.', reviewText: 'A delightful exploration of Liberdade. Juliana is passionate and knowledgeable, guiding us through charming streets and delicious Asian-Brazilian eateries. Highly recommend!', stars: 5, date: '2025-10-10' },
      { reviewerName: 'David P.', reviewText: 'Juliana is an excellent guide! We learned so much about the Japanese community in São Paulo and enjoyed some incredible food. Five stars!', stars: 5, date: '2025-10-05' }
    ]
  },
  {
    id: 'sao-paulo-009',
    city: 'São Paulo',
    name: 'Thiago Pereira',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thiago',
    personalInfo: 'Thiago is a refreshing Ibirapuera Park and green spaces guide, showcasing São Paulo\'s urban nature. He leads you through the expansive beauty of Ibirapuera, highlighting its artistic installations, serene lakes, and recreational opportunities. With Thiago, you\'ll find a peaceful escape within the bustling city, connecting with nature and enjoying the tranquility of São Paulo\'s premier park.',
    tags: ['parks', 'nature', 'outdoor-activities', 'recreation', 'green-spaces'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Emma W.', reviewText: 'Thiago made Ibirapuera Park come alive! His knowledge of the green spaces and artistic installations was fantastic. A truly refreshing escape in the city.', stars: 5, date: '2025-10-14' },
      { reviewerName: 'Oliver B.', reviewText: 'A wonderful tour of Ibirapuera Park. Thiago is passionate about urban nature and shared so many interesting facts about the park\'s history and ecology. Highly recommend!', stars: 5, date: '2025-10-09' },
      { reviewerName: 'Chloe R.', reviewText: 'Thiago is a great guide, but the park was quite busy on the weekend. I enjoyed the nature, but prefer a quieter experience.', stars: 4, date: '2025-10-04' }
    ]
  },
  {
    id: 'sao-paulo-010',
    city: 'São Paulo',
    name: 'Carolina Lima',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carolina',
    personalInfo: 'Carolina is an insightful MASP and art museums specialist, deeply connected to São Paulo\'s artistic soul. She guides you through world-class collections, offering profound interpretations of masterpieces and contemporary works. With Carolina, you\'ll explore the vibrant art scene of São Paulo, gaining a deeper understanding of its cultural significance and artistic contributions.',
    tags: ['art-museums', 'masp', 'exhibitions', 'culture', 'art-history'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Oliver B.', reviewText: 'Carolina\'s art knowledge is exceptional! Her MASP tour was incredibly insightful, revealing the artistic soul of São Paulo. A truly enriching cultural experience!', stars: 5, date: '2025-10-13' },
      { reviewerName: 'Sophia L.', reviewText: 'A fantastic exploration of São Paulo\'s art museums. Carolina is passionate and articulate, bringing the masterpieces to life with her commentary. Highly recommend!', stars: 5, date: '2025-10-08' },
      { reviewerName: 'Daniel M.', reviewText: 'Carolina is an excellent guide, but the museum was a bit crowded. I enjoyed the art, but prefer a more serene viewing experience.', stars: 4, date: '2025-10-03' }
    ]
  },

  // Cairo guides (10)
  {
    id: 'cairo-001',
    city: 'Cairo',
    name: 'Ahmed Hassan',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed',
    personalInfo: 'Ahmed is a distinguished Egyptologist and a passionate pyramids specialist, dedicated to revealing ancient mysteries. He transports you back in time to the age of pharaohs, sharing profound insights into the construction, symbolism, and enduring legacy of Egypt\'s monumental structures. With Ahmed, you\'ll experience the awe-inspiring grandeur of the pyramids and the rich tapestry of ancient Egyptian history.',
    tags: ['pyramids', 'ancient-egypt', 'history', 'archaeology', 'guided-tours'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Jennifer K.', reviewText: 'Ahmed brought ancient Egypt to life! His Egyptologist insights into the pyramids were absolutely captivating. A truly awe-inspiring experience!', stars: 5, date: '2025-10-21' },
      { reviewerName: 'Robert P.', reviewText: 'An incredible journey through ancient history. Ahmed is a passionate and knowledgeable guide, sharing fascinating stories about the pharaohs and their monumental structures. Highly recommend!', stars: 5, date: '2025-10-16' },
      { reviewerName: 'Laura S.', reviewText: 'Ahmed is a brilliant guide! He made the pyramids feel even more majestic with his detailed explanations and enthusiasm. A must-do in Cairo!', stars: 5, date: '2025-10-11' },
      { reviewerName: 'Michael D.', reviewText: 'The pyramids are amazing, but the heat was intense. Ahmed was informative, but I wish there were more shaded areas on the tour.', stars: 3, date: '2025-10-06' }
    ]
  },
  {
    id: 'cairo-002',
    city: 'Cairo',
    name: 'Fatima Ali',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima',
    personalInfo: 'Fatima is a vibrant Khan el-Khalili bazaar expert, a true master of traditional markets. She guides you through the labyrinthine alleys, helping you discover hidden treasures, negotiate like a local, and immerse yourself in the sensory delights of Cairo\'s oldest bazaar. With Fatima, every corner holds a story, and every purchase is a memorable cultural exchange.',
    tags: ['bazaar', 'markets', 'shopping', 'souvenirs', 'traditional-crafts'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Robert P.', reviewText: 'Fatima helped us navigate the bazaar perfectly! Her knowledge of Khan el-Khalili is incredible, and she made shopping for souvenirs so much fun. A true master of traditional markets!', stars: 5, date: '2025-10-20' },
      { reviewerName: 'Sarah L.', reviewText: 'A vibrant and exciting bazaar tour! Fatima is a fantastic guide, helping us find unique crafts and negotiate like locals. Highly recommend for an authentic Cairo experience.', stars: 5, date: '2025-10-15' },
      { reviewerName: 'Emily C.', reviewText: 'Fatima is a gem! She guided us through the bustling alleys with ease and helped us discover some truly beautiful traditional crafts. Five stars!', stars: 5, date: '2025-10-10' }
    ]
  },
  {
    id: 'cairo-003',
    city: 'Cairo',
    name: 'Omar Mahmoud',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Omar',
    personalInfo: 'Omar is a charming Nile River cruises and felucca specialist, offering a serene perspective of Cairo from the water. He guides you on tranquil journeys along the legendary Nile, sharing tales of ancient Egypt and the vibrant life along its banks. With Omar, you\'ll experience the timeless beauty of the Nile, especially magical during sunset, creating unforgettable memories of Cairo\'s iconic river.',
    tags: ['nile-river', 'boat-tours', 'felucca', 'sunset-cruises', 'river-views'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'Linda S.', reviewText: 'Omar\'s Nile cruise was magical! The felucca ride at sunset was absolutely breathtaking. A truly serene and unforgettable experience in Cairo.', stars: 5, date: '2025-10-19' },
      { reviewerName: 'David H.', reviewText: 'A wonderful way to see Cairo from the water. Omar is a charming guide, sharing interesting facts about the Nile and its history. Highly recommend for a relaxing evening.', stars: 5, date: '2025-10-14' },
      { reviewerName: 'Sophia K.', reviewText: 'The Nile cruise was pleasant, but the boat was a bit crowded. Omar was friendly, but it was hard to hear him at times.', stars: 3, date: '2025-10-09' }
    ]
  },
  {
    id: 'cairo-004',
    city: 'Cairo',
    name: 'Layla Ibrahim',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Layla',
    personalInfo: 'Layla is a delightful Egyptian cuisine and cooking class expert, passionate about sharing the authentic flavors of the Nile. She guides you through local markets to select fresh ingredients, then teaches you to prepare traditional dishes with warmth and expertise. With Layla, you\'ll not only savor the delicious tastes of Egypt but also take home the skills to recreate its culinary magic.',
    tags: ['egyptian-cuisine', 'cooking-classes', 'food-tours', 'local-dishes', 'spices'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Michael D.', reviewText: 'Layla\'s cooking class was incredible! She taught us to make delicious Egyptian dishes with such warmth and expertise. A truly hands-on and flavorful experience!', stars: 5, date: '2025-10-18' },
      { reviewerName: 'Jessica P.', reviewText: 'A fantastic culinary journey into Egyptian cuisine. Layla is a wonderful teacher, and we learned so much about local ingredients and spices. Highly recommend for foodies!', stars: 5, date: '2025-10-13' },
      { reviewerName: 'Oliver T.', reviewText: 'Layla is a gem! Her cooking class was not only educational but also incredibly fun. We enjoyed every moment and the delicious meal we prepared.', stars: 5, date: '2025-10-08' }
    ]
  },
  {
    id: 'cairo-005',
    city: 'Cairo',
    name: 'Karim Said',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Karim',
    personalInfo: 'Karim is a profound Coptic Cairo and religious sites specialist, deeply connected to Egypt\'s spiritual heritage. He guides you through ancient churches, monasteries, and historical sites, sharing the rich history and enduring faith of Coptic Christianity. With Karim, you\'ll embark on a journey of spiritual discovery, understanding the profound cultural and religious tapestry of Cairo.',
    tags: ['coptic-cairo', 'religious-sites', 'churches', 'history', 'spiritual-tours'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Patricia L.', reviewText: 'Karim\'s knowledge of Coptic history is amazing! His tour of Coptic Cairo was incredibly insightful, revealing a rich spiritual heritage. A truly profound experience.', stars: 5, date: '2025-10-22' },
      { reviewerName: 'Thomas R.', reviewText: 'A wonderful journey through Cairo\'s religious sites. Karim is a respectful and knowledgeable guide, sharing fascinating stories of ancient churches and monasteries. Highly recommend!', stars: 5, date: '2025-10-17' },
      { reviewerName: 'Laura B.', reviewText: 'Karim is an excellent guide, but some of the sites were very crowded. I enjoyed the history, but prefer a more serene atmosphere for spiritual tours.', stars: 4, date: '2025-10-12' }
    ]
  },
  {
    id: 'cairo-006',
    city: 'Cairo',
    name: 'Nour Mohamed',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nour',
    personalInfo: 'Nour is an insightful Islamic architecture and mosque guide, revealing Cairo\'s architectural splendor. She leads you through magnificent mosques and historic Islamic structures, sharing the intricate details of their design and their cultural significance. With Nour, you\'ll gain a deep appreciation for the artistry and history embedded in Cairo\'s stunning Islamic heritage.',
    tags: ['islamic-architecture', 'mosques', 'history', 'religion', 'architecture-tours'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Thomas C.', reviewText: 'Nour showed us breathtaking mosques! Her insights into Islamic architecture were truly captivating, revealing the intricate beauty and history. A magnificent cultural experience!', stars: 5, date: '2025-10-17' },
      { reviewerName: 'Sarah D.', reviewText: 'A fantastic tour of Cairo\'s Islamic heritage. Nour is passionate and knowledgeable, bringing the architectural splendor to life with her commentary. Highly recommend!', stars: 5, date: '2025-10-12' },
      { reviewerName: 'Emily F.', reviewText: 'Nour is an excellent guide! We learned so much about the history and significance of Cairo\'s mosques. A truly enriching and beautiful tour.', stars: 5, date: '2025-10-07' }
    ]
  },
  {
    id: 'cairo-007',
    city: 'Cairo',
    name: 'Yasmin Farouk',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yasmin',
    personalInfo: 'Yasmin is a brilliant Egyptian Museum specialist, an expert in treasures and artifacts. She navigates you through the vast collections, bringing ancient pharaohs, intricate jewelry, and monumental sculptures to life with captivating stories. With Yasmin, a visit to the museum transforms into an immersive journey through millennia of Egyptian civilization, revealing the wonders of its past.',
    tags: ['museum', 'artifacts', 'tutankhamun', 'history', 'culture'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'David H.', reviewText: 'Yasmin made the museum fascinating! Her knowledge of ancient Egyptian treasures and artifacts is incredible. A truly immersive journey through history!', stars: 5, date: '2025-10-16' },
      { reviewerName: 'Jessica M.', reviewText: 'A brilliant tour of the Egyptian Museum. Yasmin is passionate and articulate, bringing the stories of pharaohs and mummies to life. Highly recommend!', stars: 5, date: '2025-10-11' },
      { reviewerName: 'Oliver P.', reviewText: 'Yasmin is an exceptional guide! She navigated us through the vast collections with ease and made every artifact feel significant. A must-do in Cairo!', stars: 5, date: '2025-10-06' },
      { reviewerName: 'Chloe R.', reviewText: 'The museum was very crowded, and it was hard to get close to some exhibits. Yasmin was informative, but the experience was a bit overwhelming.', stars: 3, date: '2025-10-01' }
    ]
  },
  {
    id: 'cairo-008',
    city: 'Cairo',
    name: 'Mustafa Ahmed',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mustafa',
    personalInfo: 'Mustafa is an adventurous camel rides and Giza plateau expert, offering unforgettable desert adventures. He guides you across the sands with his trusty camels, providing breathtaking views of the pyramids and the Sphinx. With Mustafa, you\'ll experience the timeless allure of the Egyptian desert, creating iconic memories against the backdrop of ancient wonders.',
    tags: ['camel-rides', 'desert', 'giza', 'pyramids', 'adventure'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'Sophie K.', reviewText: 'Mustafa made our camel ride unforgettable! The desert adventure with the pyramids in the background was truly iconic. A fantastic experience!', stars: 5, date: '2025-10-15' },
      { reviewerName: 'Daniel B.', reviewText: 'A wonderful experience on the Giza plateau. Mustafa is a friendly and knowledgeable guide, ensuring we had the best views and photos. Highly recommend!', stars: 5, date: '2025-10-10' },
      { reviewerName: 'Emma T.', reviewText: 'The camel ride was fun, but a bit shorter than expected. Mustafa was good, but I wish we had more time to explore the desert.', stars: 4, date: '2025-10-05' }
    ]
  },
  {
    id: 'cairo-009',
    city: 'Cairo',
    name: 'Amina Khalil',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amina',
    personalInfo: 'Amina is a skilled traditional crafts and papyrus specialist, dedicated to keeping ancient arts alive today. She guides you through workshops and markets, demonstrating the intricate processes of papyrus making, calligraphy, and other traditional Egyptian crafts. With Amina, you\'ll not only find unique souvenirs but also gain a deep appreciation for the enduring artistic heritage of Egypt.',
    tags: ['traditional-crafts', 'papyrus', 'artisans', 'workshops', 'souvenirs'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Rachel B.', reviewText: 'Amina taught us so much about traditional crafts! Her papyrus workshop was incredibly insightful, revealing the ancient arts alive today. A truly hands-on cultural experience!', stars: 5, date: '2025-10-14' },
      { reviewerName: 'Mark S.', reviewText: 'A wonderful tour of traditional Egyptian crafts. Amina is passionate and knowledgeable, guiding us to authentic artisan workshops. Highly recommend for unique souvenirs!', stars: 5, date: '2025-10-09' },
      { reviewerName: 'Laura P.', reviewText: 'Amina is a fantastic guide! We learned so much about the history and techniques of papyrus making. A truly enriching and beautiful tour.', stars: 5, date: '2025-10-04' }
    ]
  },
  {
    id: 'cairo-010',
    city: 'Cairo',
    name: 'Hassan El-Sayed',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HassanE',
    personalInfo: 'Hassan El-Sayed is a captivating sound and light shows specialist, transforming the pyramids after dark into a spectacular experience. He guides you to the best vantage points, narrating the ancient stories that unfold against the illuminated backdrop of the Giza plateau. With Hassan, you\'ll witness a truly magical evening, where history and technology combine to create an unforgettable spectacle.',
    tags: ['sound-light-shows', 'evening-tours', 'pyramids', 'entertainment', 'night-experiences'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Mark T.', reviewText: 'Hassan\'s sound & light show tour was spectacular! The pyramids after dark were truly magical, and his narration brought the ancient stories to life. An unforgettable evening!', stars: 5, date: '2025-10-13' },
      { reviewerName: 'Jessica L.', reviewText: 'A breathtaking night experience at the Giza plateau. Hassan is an excellent guide, ensuring we had the best views of the illuminated pyramids. Highly recommend!', stars: 5, date: '2025-10-08' },
      { reviewerName: 'Oliver C.', reviewText: 'The sound and light show was impressive, but the crowd was quite large. Hassan was good, but I prefer a more intimate viewing experience.', stars: 4, date: '2025-10-03' }
    ]
  },

  // New York guides (10)
  {
    id: 'new-york-001',
    city: 'New York',
    name: 'Emily Rodriguez',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EmilyR',
    personalInfo: 'Emily is a dazzling Broadway insider and a true theatre district expert, taking you behind the curtains of NYC\'s most iconic stages. She shares captivating stories of Broadway legends, insider tips, and the magic that makes New York\'s performing arts scene unparalleled. With Emily, you\'ll experience the thrill and glamour of Broadway, from its historic theaters to its dazzling new productions.',
    tags: ['broadway', 'theatre', 'performing-arts', 'musicals', 'entertainment'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Jessica M.', reviewText: 'Emily got us amazing Broadway tickets! Her insider tips and knowledge of the theatre district made the whole experience truly magical. A dream come true for any theatre lover!', stars: 5, date: '2025-10-21' },
      { reviewerName: 'David L.', reviewText: 'An incredible journey into the heart of Broadway. Emily is a passionate and knowledgeable guide, sharing fascinating stories about the shows and stars. Highly recommend!', stars: 5, date: '2025-10-16' },
      { reviewerName: 'Sarah P.', reviewText: 'Emily is a fantastic guide! She made sure we had the best seats and gave us great recommendations for pre-show dining. A perfect evening in NYC!', stars: 5, date: '2025-10-11' },
      { reviewerName: 'Mark T.', reviewText: 'The Broadway show was great, but the theatre district was very crowded. Emily was enthusiastic, but I prefer a calmer atmosphere.', stars: 3, date: '2025-10-06' }
    ]
  },
  {
    id: 'new-york-002',
    city: 'New York',
    name: 'Marcus Johnson',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusJ',
    personalInfo: 'Marcus is an authentic hip-hop culture and Bronx specialist, guiding you to where it all began. He shares the vibrant history and evolution of hip-hop, from its roots in the Bronx to its global influence. With Marcus, you\'ll explore iconic landmarks, hear compelling stories, and feel the rhythmic pulse of a cultural movement that changed the world.',
    tags: ['hip-hop', 'bronx', 'music-culture', 'street-art', 'urban-history'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Tyler K.', reviewText: 'Marcus showed us authentic hip-hop history! His passion for the Bronx and its cultural impact is truly inspiring. A powerful and insightful tour!', stars: 5, date: '2025-10-20' },
      { reviewerName: 'Chloe S.', reviewText: 'A fantastic journey into the origins of hip-hop. Marcus is an excellent guide, sharing compelling stories and taking us to iconic landmarks. Highly recommend!', stars: 5, date: '2025-10-15' },
      { reviewerName: 'Ben R.', reviewText: 'Marcus is a true expert! He made the Bronx come alive with his knowledge of hip-hop culture and street art. A unique and unforgettable experience in NYC.', stars: 5, date: '2025-10-10' }
    ]
  },
  {
    id: 'new-york-003',
    city: 'New York',
    name: 'Sarah Goldstein',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahG',
    personalInfo: 'Sarah is a delightful food halls and culinary diversity expert, navigating NYC\'s melting pot of flavors. She guides you through bustling markets and hidden eateries, introducing you to the incredible array of cuisines that define New York\'s gastronomic scene. With Sarah, every tasting is a journey, and every dish tells a story of the city\'s rich cultural tapestry.',
    tags: ['food-halls', 'diverse-cuisine', 'food-tours', 'restaurants', 'culinary'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Paul R.', reviewText: 'Sarah found the best hidden food gems! Her culinary diversity tour was a delicious journey through NYC\'s melting pot of flavors. My taste buds are forever grateful!', stars: 5, date: '2025-10-19' },
      { reviewerName: 'Laura M.', reviewText: 'A fantastic food tour of New York! Sarah is passionate and knowledgeable, introducing us to incredible eateries and food halls. A must-do for foodies!', stars: 5, date: '2025-10-14' },
      { reviewerName: 'Chris T.', reviewText: 'Sarah is a gem! She guided us to some truly amazing culinary spots and explained the cultural significance of each dish. Five stars!', stars: 5, date: '2025-10-09' },
      { reviewerName: 'Sophia L.', reviewText: 'The food was good, but some of the food halls were very crowded. Sarah was enthusiastic, but I prefer a more relaxed dining experience.', stars: 3, date: '2025-10-04' }
    ]
  },
  {
    id: 'new-york-004',
    city: 'New York',
    name: 'David Lee',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DavidL',
    personalInfo: 'David is a sharp Wall Street and finance district guide, revealing the pulse of global finance. He shares the dramatic history of New York\'s financial heart, from its humble beginnings to its towering skyscrapers. With David, you\'ll gain a fascinating insight into the world of high finance, understanding the power and influence that shaped not just a city, but the global economy.',
    tags: ['wall-street', 'finance', 'business', 'history', 'financial-district'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'James H.', reviewText: 'David explained Wall Street history perfectly! His insights into the finance district were incredibly fascinating, revealing the pulse of global finance. A truly enlightening tour!', stars: 5, date: '2025-10-18' },
      { reviewerName: 'Olivia P.', reviewText: 'A captivating journey through New York\'s financial heart. David is a knowledgeable and articulate guide, sharing dramatic stories of power and influence. Highly recommend!', stars: 5, date: '2025-10-13' },
      { reviewerName: 'Ethan K.', reviewText: 'David is an excellent guide, but the tour felt a bit rushed at times. I enjoyed the history, but wish we had more time at each landmark.', stars: 4, date: '2025-10-08' }
    ]
  },
  {
    id: 'new-york-005',
    city: 'New York',
    name: 'Maria Sanchez',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MariaS',
    personalInfo: 'Maria is a serene Central Park and urban nature specialist, guiding you through the green heart of Manhattan. She unveils the hidden trails, iconic landmarks, and tranquil spots within this magnificent urban oasis. With Maria, you\'ll discover the natural beauty and recreational delights of Central Park, a perfect escape from the city\'s hustle and bustle.',
    tags: ['central-park', 'nature', 'outdoor-activities', 'parks', 'recreation'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Anna B.', reviewText: 'Maria\'s Central Park tour was delightful! Her knowledge of the park\'s hidden gems and natural beauty is incredible. A truly serene escape in Manhattan!', stars: 5, date: '2025-10-22' },
      { reviewerName: 'Robert D.', reviewText: 'A wonderful exploration of Central Park. Maria is passionate about urban nature and shared so many interesting facts about the park\'s history and design. Highly recommend!', stars: 5, date: '2025-10-17' },
      { reviewerName: 'Chloe F.', reviewText: 'Maria is a fantastic guide, but the park was quite busy on the weekend. I enjoyed the nature, but prefer a quieter experience.', stars: 4, date: '2025-10-12' }
    ]
  },
  {
    id: 'new-york-006',
    city: 'New York',
    name: 'Alex Chen',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexC',
    personalInfo: 'Alex is a vibrant Chinatown and Little Italy guide, an expert in New York\'s rich ethnic neighborhoods. He leads you through bustling streets, sharing stories of immigration, culture, and culinary traditions. With Alex, you\'ll experience the authentic flavors and vibrant communities of these historic districts, a true testament to New York\'s diverse heritage.',
    tags: ['chinatown', 'little-italy', 'ethnic-neighborhoods', 'food', 'culture'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Katie W.', reviewText: 'Alex knows every great spot in Chinatown! His tour of the ethnic neighborhoods was incredibly vibrant and insightful. A true taste of New York\'s diverse heritage!', stars: 5, date: '2025-10-17' },
      { reviewerName: 'Liam P.', reviewText: 'A fantastic culinary and cultural journey through Chinatown and Little Italy. Alex is passionate and knowledgeable, sharing stories of immigration and delicious food. Highly recommend!', stars: 5, date: '2025-10-12' },
      { reviewerName: 'Sophia R.', reviewText: 'Alex is an excellent guide! We learned so much about the history and traditions of these vibrant neighborhoods. Five stars!', stars: 5, date: '2025-10-07' },
      { reviewerName: 'Daniel M.', reviewText: 'The food was good, but the streets were very crowded. Alex was enthusiastic, but I prefer a more relaxed pace for exploring.', stars: 3, date: '2025-10-02' }
    ]
  },
  {
    id: 'new-york-007',
    city: 'New York',
    name: 'Rachel Cohen',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RachelC',
    personalInfo: 'Rachel is a sophisticated art galleries and Chelsea specialist, deeply immersed in New York\'s contemporary art scene. She guides you through cutting-edge exhibitions and renowned galleries, offering insights into the latest artistic trends and movements. With Rachel, you\'ll explore the dynamic world of modern art, discovering inspiring works and engaging with the creative pulse of Chelsea.',
    tags: ['art-galleries', 'contemporary-art', 'chelsea', 'exhibitions', 'artists'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Oliver S.', reviewText: 'Rachel showed us incredible galleries! Her insights into the contemporary art scene in Chelsea were truly inspiring. A fantastic cultural experience!', stars: 5, date: '2025-10-16' },
      { reviewerName: 'Jessica B.', reviewText: 'A wonderful tour of New York\'s art galleries. Rachel is passionate and knowledgeable, introducing us to cutting-edge exhibitions. Highly recommend!', stars: 5, date: '2025-10-11' },
      { reviewerName: 'Mark K.', reviewText: 'Rachel is an excellent guide! We learned so much about the artists and their works in Chelsea. A truly enriching and beautiful tour.', stars: 5, date: '2025-10-06' }
    ]
  },
  {
    id: 'new-york-008',
    city: 'New York',
    name: 'Brandon Williams',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Brandon',
    personalInfo: 'Brandon is a cool Brooklyn and hipster culture guide, showcasing NYC\'s coolest borough. He takes you to trendy cafes, vintage shops, and vibrant street art installations, sharing the unique vibe of Brooklyn\'s diverse neighborhoods. With Brandon, you\'ll experience the authentic, artistic, and effortlessly cool side of New York, far from the typical tourist paths.',
    tags: ['brooklyn', 'hipster-culture', 'coffee-shops', 'vintage', 'street-art'],
    rating: 4.7,
    reviews: [
      { reviewerName: 'Sophia L.', reviewText: 'Brandon\'s Brooklyn tour was so cool! His knowledge of hipster culture and hidden gems made it an unforgettable experience. A true taste of NYC\'s coolest borough!', stars: 5, date: '2025-10-15' },
      { reviewerName: 'Liam T.', reviewText: 'A fantastic exploration of Brooklyn. Brandon is passionate and knowledgeable, guiding us through trendy cafes and vibrant street art. Highly recommend!', stars: 5, date: '2025-10-10' },
      { reviewerName: 'Chloe R.', reviewText: 'Brandon is a great guide, but some of the areas were a bit too crowded for my liking. I enjoyed the vibe, but prefer a calmer atmosphere.', stars: 3, date: '2025-10-05' }
    ]
  },
  {
    id: 'new-york-009',
    city: 'New York',
    name: 'Jennifer Park',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer',
    personalInfo: 'Jennifer is an insightful Metropolitan Museum and art history expert, a world-class museum guide. She navigates you through the vast collections of the Met, bringing ancient civilizations, classical masterpieces, and modern art to life with engaging narratives. With Jennifer, a visit to this iconic institution becomes a profound journey through human creativity and history.',
    tags: ['met-museum', 'art-history', 'culture', 'exhibitions', 'masterpieces'],
    rating: 4.9,
    reviews: [
      { reviewerName: 'Daniel M.', reviewText: 'Jennifer made the Met come alive! Her art history expertise and engaging storytelling transformed our visit into a profound journey. A truly world-class museum guide!', stars: 5, date: '2025-10-14' },
      { reviewerName: 'Laura P.', reviewText: 'An incredible tour of the Metropolitan Museum. Jennifer is passionate and articulate, bringing ancient civilizations and masterpieces to life. Highly recommend!', stars: 5, date: '2025-10-09' },
      { reviewerName: 'Chris S.', reviewText: 'Jennifer is an exceptional guide! She navigated us through the vast collections with ease and made every exhibit feel significant. A must-do in NYC!', stars: 5, date: '2025-10-04' },
      { reviewerName: 'Sophia B.', reviewText: 'The Met is amazing, but it was very crowded, and it was hard to hear Jennifer at times. Still, her knowledge was impressive.', stars: 4, date: '2025-09-29' }
    ]
  },
  {
    id: 'new-york-010',
    city: 'New York',
    name: 'Michael Thompson',
    profilePictureUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MichaelT',
    personalInfo: 'Michael is a sophisticated rooftop bars and skyline specialist, offering breathtaking views of NYC from above. He knows all the best spots to enjoy a cocktail with unparalleled panoramic vistas, especially as the city lights up at night. With Michael, you\'ll experience the dazzling magic of the New York skyline, creating unforgettable memories against the backdrop of its iconic architecture.',
    tags: ['rooftop-bars', 'skyline', 'nightlife', 'views', 'photography'],
    rating: 4.8,
    reviews: [
      { reviewerName: 'Laura D.', reviewText: 'Michael found the best rooftop views! His knowledge of NYC\'s skyline and nightlife spots is incredible. An unforgettable evening with breathtaking panoramas!', stars: 5, date: '2025-10-13' },
      { reviewerName: 'James K.', reviewText: 'A fantastic tour of New York\'s rooftop bars. Michael is a sophisticated guide, ensuring we had the best cocktails with unparalleled views. Highly recommend!', stars: 5, date: '2025-10-08' },
      { reviewerName: 'Emily R.', reviewText: 'Michael is an excellent guide, but some of the bars were very crowded. I enjoyed the views, but prefer a more relaxed atmosphere.', stars: 3, date: '2025-10-03' }
    ]
  }
];
