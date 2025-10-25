import React from 'react';
import { MOCK_USERS } from '../constants';
import { User } from '../types';

interface LoginPageProps {
  onLogin: (user: User) => void;
  onBack: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onBack }) => {
  const guideUser = MOCK_USERS.find(u => u.type === 'guide');
  const travellerUser = MOCK_USERS.find(u => u.type === 'traveller');

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)] bg-gray-50 p-4">
       <div className="w-full max-w-md text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Role</h1>
            <p className="text-gray-600 mb-8">Select a profile to explore AuthentiCity.</p>

            <div className="space-y-6">
                {guideUser && (
                    <button 
                        onClick={() => onLogin(guideUser)}
                        className="w-full p-6 text-left bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:border-teal-400 transition-all duration-300 group"
                    >
                        <h2 className="text-xl font-bold text-teal-700">Log in as a Guide</h2>
                        <p className="text-gray-500 mt-1">Manage your profile, availability, and share your city with the world.</p>
                    </button>
                )}
                
                {travellerUser && (
                    <button 
                        onClick={() => onLogin(travellerUser)}
                        className="w-full p-6 text-left bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:border-teal-400 transition-all duration-300 group"
                    >
                        <h2 className="text-xl font-bold text-teal-700">Log in as a Traveller</h2>
                        <p className="text-gray-500 mt-1">Discover unique tours and connect with local experts in your next destination.</p>
                    </button>
                )}
            </div>
             <button onClick={onBack} className="mt-8 text-sm text-gray-500 hover:text-gray-700">&larr; Back to Welcome Page</button>
       </div>
    </div>
  );
};

export default LoginPage;
