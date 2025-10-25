import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Search, MapPin, Star, Calendar, Tag, Send, X, Sparkles, User, Clock, DollarSign } from 'lucide-react';

// Mock data - replace with Firestore queries
const MOCK_GUIDES = [
  {
    id: 1,
    name: "Maria Santos",
    city: "Barcelona",
    rating: 4.9,
    reviews: 47,
    expertise: ["Street Art", "Local Cuisine", "Hidden Cafés"],
    availability: "Mon, Wed, Fri mornings",
    bio: "Born and raised in El Raval, I love showing visitors the Barcelona that locals actually live in - not just the touristy spots!",
    price: "Tip-based",
    image: "MS"
  },
  {
    id: 2,
    name: "James Chen",
    city: "Barcelona",
    rating: 4.8,
    reviews: 32,
    expertise: ["Architecture", "History", "Photography"],
    availability: "Weekends",
    bio: "Architecture photographer and history buff. Let me show you Barcelona's Gothic Quarter through my lens.",
    price: "€30/tour",
    image: "JC"
  },
  {
    id: 3,
    name: "Sophie Laurent",
    city: "Barcelona",
    rating: 5.0,
    reviews: 28,
    expertise: ["Food Markets", "Wine Tasting", "Cooking"],
    availability: "Tue, Thu evenings",
    bio: "Chef turned food tour guide. I'll take you to markets where even locals shop and teach you to spot the best ingredients.",
    price: "Tip-based",
    image: "SL"
  }
];

const CITIES = ["Barcelona", "Toronto", "London", "Mumbai", "Montréal", "Paris"];

export default function AuthentiCity() {
  const [view, setView] = useState('home'); // home, browse, guide-detail, chat
  const [selectedCity, setSelectedCity] = useState('');
  const [guides, setGuides] = useState([]);
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [showAIChat, setShowAIChat] = useState(false);
  const [aiMessages, setAiMessages] = useState([]);
  const [aiInput, setAiInput] = useState('');
  const [isAIThinking, setIsAIThinking] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiSetup, setShowApiSetup] = useState(false);
  const chatEndRef = useRef(null);

  // Configuration object - easily customizable
  const CONFIG = {
    GEMINI_API_ENDPOINT: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
    APP_NAME: 'AuthentiCity',
    TAGLINE: 'Discover cities through local eyes'
  };

  useEffect(() => {
    if (selectedCity) {
      setGuides(MOCK_GUIDES.filter(g => g.city === selectedCity));
    }
  }, [selectedCity]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [aiMessages]);

  const allTags = [...new Set(MOCK_GUIDES.flatMap(g => g.expertise))];

  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         guide.bio.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !filterTag || guide.expertise.includes(filterTag);
    return matchesSearch && matchesTag;
  });

  const sendAIMessage = async () => {
    if (!aiInput.trim()) return;
    
    if (!apiKey) {
      setShowApiSetup(true);
      return;
    }

    const userMessage = aiInput;
    setAiInput('');
    setAiMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsAIThinking(true);

    try {
      const context = `You are an AI assistant for AuthentiCity, a platform connecting travelers with local guides. 
      Current city: ${selectedCity}
      Available guides: ${JSON.stringify(guides.map(g => ({ name: g.name, expertise: g.expertise, bio: g.bio, price: g.price })))}
      
      Help the traveler find the perfect guide based on their interests. Be friendly, conversational, and make specific recommendations.`;

      const response = await fetch(`${CONFIG.GEMINI_API_ENDPOINT}?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${context}\n\nUser: ${userMessage}`
            }]
          }]
        })
      });

      const data = await response.json();
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 
                        "I'm having trouble connecting right now. Please check your API key.";
      
      setAiMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      setAiMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Sorry, I couldn't connect. Please verify your Gemini API key in settings." 
      }]);
    } finally {
      setIsAIThinking(false);
    }
  };

  // Home View
  if (view === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MapPin className="text-purple-600" size={28} />
              <h1 className="text-2xl font-bold text-gray-800">{CONFIG.APP_NAME}</h1>
            </div>
            <button
              onClick={() => setShowApiSetup(true)}
              className="text-sm text-gray-600 hover:text-purple-600 flex items-center gap-1"
            >
              <Sparkles size={16} />
              API Setup
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            {CONFIG.TAGLINE}
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Connect with passionate locals who share authentic experiences, hidden gems, and genuine stories
          </p>

          {/* City Selection */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <label className="block text-lg font-semibold text-gray-700 mb-4">
              Where are you traveling?
            </label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
            >
              <option value="">Select a city</option>
              {CITIES.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {selectedCity && (
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setView('browse')}
                className="px-8 py-4 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition flex items-center gap-2"
              >
                <Search size={20} />
                Browse Guides
              </button>
              <button
                onClick={() => {
                  setShowAIChat(true);
                  setAiMessages([{
                    role: 'assistant',
                    content: `Hi! I'm your AI travel assistant for ${selectedCity}. Tell me about your interests and what kind of experience you're looking for, and I'll recommend the perfect local guide for you!`
                  }]);
                }}
                className="px-8 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition flex items-center gap-2"
              >
                <Sparkles size={20} />
                Get AI Recommendations
              </button>
            </div>
          )}
        </div>

        {/* API Setup Modal */}
        {showApiSetup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Gemini API Setup</h3>
                <button onClick={() => setShowApiSetup(false)}>
                  <X size={24} />
                </button>
              </div>
              <p className="text-gray-600 mb-4">
                Enter your Gemini API key to enable AI-powered guide recommendations.
              </p>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter your Gemini API key"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none mb-4"
              />
              <button
                onClick={() => setShowApiSetup(false)}
                className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700"
              >
                Save API Key
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Get your API key at: https://makersuite.google.com/app/apikey
              </p>
            </div>
          </div>
        )}

        {/* AI Chat Modal */}
        {showAIChat && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl w-full max-w-2xl h-[600px] flex flex-col">
              <div className="flex justify-between items-center p-4 border-b">
                <div className="flex items-center gap-2">
                  <Sparkles className="text-purple-600" size={24} />
                  <h3 className="text-xl font-bold">AI Guide Finder</h3>
                </div>
                <button onClick={() => setShowAIChat(false)}>
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {aiMessages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg ${
                      msg.role === 'user' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isAIThinking && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={aiInput}
                    onChange={(e) => setAiInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendAIMessage()}
                    placeholder="Describe your ideal experience..."
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                  />
                  <button
                    onClick={sendAIMessage}
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Browse Guides View
  if (view === 'browse') {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <button onClick={() => setView('home')} className="text-gray-600 hover:text-purple-600">
                  ← Back
                </button>
                <h1 className="text-2xl font-bold text-gray-800">Guides in {selectedCity}</h1>
              </div>
              <button
                onClick={() => setShowAIChat(true)}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg flex items-center gap-2 text-sm hover:bg-purple-700"
              >
                <Sparkles size={16} />
                Ask AI
              </button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search guides..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
                />
              </div>
              <select
                value={filterTag}
                onChange={(e) => setFilterTag(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
              >
                <option value="">All Expertise</option>
                {allTags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map(guide => (
              <div
                key={guide.id}
                onClick={() => {
                  setSelectedGuide(guide);
                  setView('guide-detail');
                }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden"
              >
                <div className="h-32 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-purple-600">
                    {guide.image}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{guide.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="text-yellow-400 fill-yellow-400" size={16} />
                    <span className="font-semibold">{guide.rating}</span>
                    <span className="text-gray-500 text-sm">({guide.reviews} reviews)</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{guide.bio}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {guide.expertise.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{guide.availability}</span>
                    </div>
                    <div className="flex items-center gap-1 font-semibold text-purple-600">
                      <DollarSign size={14} />
                      <span>{guide.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Guide Detail View
  if (view === 'guide-detail' && selectedGuide) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <button onClick={() => setView('browse')} className="text-gray-600 hover:text-purple-600">
              ← Back to guides
            </button>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center text-4xl font-bold text-purple-600">
                {selectedGuide.image}
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">{selectedGuide.name}</h1>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="text-yellow-400 fill-yellow-400" size={20} />
                    <span className="text-xl font-semibold">{selectedGuide.rating}</span>
                    <span className="text-gray-500">({selectedGuide.reviews} reviews)</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-600">{selectedGuide.price}</div>
                  <div className="text-sm text-gray-500">per tour</div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <User size={18} />
                  About Me
                </h3>
                <p className="text-gray-600">{selectedGuide.bio}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Tag size={18} />
                  Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedGuide.expertise.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Calendar size={18} />
                  Availability
                </h3>
                <p className="text-gray-600">{selectedGuide.availability}</p>
              </div>

              <button
                onClick={() => setView('chat')}
                className="w-full py-4 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Message {selectedGuide.name.split(' ')[0]}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Chat View
  if (view === 'chat' && selectedGuide) {
    return (
      <div className="h-screen flex flex-col bg-gray-50">
        <header className="bg-white shadow-sm p-4">
          <div className="max-w-4xl mx-auto flex items-center gap-3">
            <button onClick={() => setView('guide-detail')} className="text-gray-600 hover:text-purple-600">
              ← Back
            </button>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-sm font-bold text-white">
              {selectedGuide.image}
            </div>
            <div>
              <div className="font-semibold">{selectedGuide.name}</div>
              <div className="text-sm text-gray-500">Usually replies within an hour</div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-lg shadow max-w-[80%]">
                Hi! Thanks for reaching out. I'd love to show you around {selectedGuide.city}! What kind of experience are you looking for?
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-t p-4">
          <div className="max-w-4xl mx-auto flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
            />
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}