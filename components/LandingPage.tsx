import React from 'react';

interface LandingPageProps {
  onLoginClick: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLoginClick }) => {
  return (
    <div className="relative text-center bg-white py-20 sm:py-32 flex items-center justify-center min-h-[calc(100vh-128px)]">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: "url('https://picsum.photos/seed/welcome/1600/900')" }}>
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          Welcome to <span className="text-teal-600">AuthentiCity</span>.
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600">
          We connect travellers with passionate local experts for genuine, unforgettable experiences. Ditch the script and discover the real city through the eyes of someone who calls it home.
        </p>
        <div className="mt-10 max-w-md mx-auto">
          <button
            onClick={onLoginClick}
            className="w-full px-8 py-4 text-lg font-bold text-white bg-teal-600 rounded-lg shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-transform transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
