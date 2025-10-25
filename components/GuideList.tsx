
import React, { useState, useMemo } from 'react';
import { Guide } from '../types';
import GuideCard from './GuideCard';
import Tag from './Tag';

interface GuideListProps {
  city: string;
  guides: Guide[];
  onSelectGuide: (guide: Guide) => void;
  onClearCity: () => void;
}

const GuideList: React.FC<GuideListProps> = ({ city, guides, onSelectGuide, onClearCity }) => {
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    guides.forEach(guide => guide.expertiseTags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, [guides]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prevTags => {
      const newTags = new Set(prevTags);
      if (newTags.has(tag)) {
        newTags.delete(tag);
      } else {
        newTags.add(tag);
      }
      return newTags;
    });
  };

  const filteredGuides = useMemo(() => {
    if (selectedTags.size === 0) {
      return guides;
    }
    return guides.filter(guide => 
      Array.from(selectedTags).every(tag => guide.expertiseTags.includes(tag))
    );
  }, [guides, selectedTags]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
           <h2 className="text-3xl font-bold text-gray-900">Local Experts in <span className="text-teal-600">{city}</span></h2>
           <p className="mt-1 text-gray-600">Found {filteredGuides.length} guide{filteredGuides.length !== 1 ? 's' : ''}.</p>
        </div>
        <button onClick={onClearCity} className="mt-4 sm:mt-0 text-teal-600 hover:text-teal-800 font-semibold">&larr; Change city</button>
      </div>

      <div className="mb-8 p-4 bg-white rounded-lg shadow-sm">
        <h3 className="font-semibold text-gray-700 mb-3">Filter by expertise:</h3>
        <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
                <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`text-sm font-semibold mr-2 mb-2 px-3 py-1 rounded-full transition-colors ${
                        selectedTags.has(tag) 
                        ? 'bg-teal-600 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                    {tag}
                </button>
            ))}
        </div>
         {selectedTags.size > 0 && <button onClick={() => setSelectedTags(new Set())} className="text-sm text-gray-500 hover:text-gray-700 mt-2">Clear filters</button>}
      </div>

      {filteredGuides.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredGuides.map(guide => (
            <GuideCard key={guide.id} guide={guide} onSelect={onSelectGuide} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
            <p className="text-xl text-gray-500">No guides match your selected filters.</p>
        </div>
      )}
    </div>
  );
};

export default GuideList;
