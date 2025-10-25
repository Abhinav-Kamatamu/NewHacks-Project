import React from 'react';
import { Guide } from '../types';
import StarRating from './StarRating';
import Tag from './Tag';

interface GuideProfileProps {
  guide: Guide;
  onBack: () => void;
}

const GuideProfile: React.FC<GuideProfileProps> = ({ guide, onBack }) => {

  const handleStartChat = () => {
    alert(`Starting a chat with ${guide.name}!\n\n(This is a placeholder for the direct messaging feature.)`);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button onClick={onBack} className="mb-8 text-teal-600 hover:text-teal-800 font-semibold flex items-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Back to Guides
      </button>

      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-full w-full object-cover md:w-64" src={guide.photoUrl} alt={guide.name} />
          </div>
          <div className="p-8 flex-grow">
            <h1 className="text-4xl font-bold text-gray-900">{guide.name}</h1>
            <p className="text-lg text-gray-500 mt-1">Your local expert in {guide.city}</p>
            <div className="flex items-center my-4">
              <StarRating rating={guide.rating} />
              <span className="text-gray-600 text-md ml-3">{guide.rating.toFixed(1)} average rating from {guide.reviews.length} reviews</span>
            </div>
            
            <div className="mt-6">
                <span className="text-white text-sm font-semibold bg-orange-500 py-1 px-3 rounded-full">{guide.priceModel}</span>
            </div>
            
            <button 
              onClick={handleStartChat}
              className="mt-6 w-full md:w-auto bg-teal-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-600 transition duration-300 text-lg">
                Start a Chat with {guide.name.split(' ')[0]}
            </button>
          </div>
        </div>

        <div className="p-8 border-t border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{guide.bio}</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Expertise</h2>
          <div className="flex flex-wrap">
            {guide.expertiseTags.map(tag => <Tag key={tag} text={tag} />)}
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Availability</h2>
          <p className="text-gray-700">{guide.availability}</p>
        </div>

        <div className="p-8 border-t border-gray-200 bg-gray-50">
           <h2 className="text-2xl font-semibold text-gray-800 mb-6">What Travelers Are Saying</h2>
           <div className="space-y-6">
                {guide.reviews.map(review => (
                    <div key={review.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex items-center mb-2">
                            <StarRating rating={review.rating}/>
                            <p className="ml-auto text-sm text-gray-500">{review.date}</p>
                        </div>
                        <p className="text-gray-700 italic">"{review.comment}"</p>
                        <p className="text-right font-semibold text-gray-600 mt-2">- {review.author}</p>
                    </div>
                ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default GuideProfile;
