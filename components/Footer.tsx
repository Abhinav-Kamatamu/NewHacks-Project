
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} AuthentiCity. Humanising travel, one story at a time.</p>
      </div>
    </footer>
  );
};

export default Footer;
