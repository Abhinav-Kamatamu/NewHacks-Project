
import React, { useState } from 'react';

interface HomeProps {
  onCitySelect: (city: string) => void;
}

const Home: React.FC<HomeProps> = ({ onCitySelect }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onCitySelect(city.trim());
    }
  };

  return (
    <div className="relative text-center bg-white py-20 sm:py-32 flex items-center justify-center" style={{ minHeight: 'calc(100vh - 128px)' }}>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: "url('https://picsum.photos/seed/travel/1600/900')" }}>
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          Experience a city <span className="text-teal-600">through local eyes</span>.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
          Connect with passionate locals for authentic, unforgettable tours. Ditch the script, discover the real city.
        </p>
        <form onSubmit={handleSubmit} className="mt-10 max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter a city (e.g., Montreal, Mumbai, Barcelona)"
              className="flex-grow w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 text-base font-bold text-white bg-teal-600 rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
            >
              Find a Guide
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
