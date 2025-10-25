
import React from 'react';
import { Guide } from '../types';
import StarRating from './StarRating';
import Tag from './Tag';

interface GuideCardProps {
  guide: Guide;
  onSelect: (guide: Guide) => void;
}

const GuideCard: React.FC<GuideCardProps> = ({ guide, onSelect }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <img className="w-full h-48 object-cover" src={guide.photoUrl} alt={guide.name} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{guide.name}</h3>
        <div className="flex items-center mb-3">
          <StarRating rating={guide.rating} />
          <span className="text-gray-600 text-sm ml-2">{guide.rating.toFixed(1)} ({guide.reviews.length} reviews)</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{guide.bio.substring(0, 100)}...</p>
        <div className="mb-4">
          {guide.expertiseTags.slice(0, 3).map(tag => <Tag key={tag} text={tag} />)}
        </div>
        <button
          onClick={() => onSelect(guide)}
          className="mt-auto w-full bg-teal-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default GuideCard;
