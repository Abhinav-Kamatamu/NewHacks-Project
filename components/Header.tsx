import React from 'react';
import { User } from '../types';

interface HeaderProps {
    user: User | null;
    onLogoClick: () => void;
    onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogoClick, onLogout }) => {
  return (
    <header className="bg-white shadow-md w-full">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={onLogoClick} className="flex-shrink-0 text-2xl font-bold text-teal-600 hover:text-teal-700 transition">
              AuthentiCity
            </button>
          </div>
          {user && (
            <div className="flex items-center gap-4">
                <span className="text-gray-600 hidden sm:block">Welcome, {user.name}!</span>
                <button 
                    onClick={onLogout}
                    className="bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg text-sm hover:bg-teal-600 transition duration-300"
                >
                    Logout
                </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
