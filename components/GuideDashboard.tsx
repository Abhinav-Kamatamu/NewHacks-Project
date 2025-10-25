import React, { useState } from 'react';
import { Guide } from '../types';
import GuideProfile from './GuideProfile';
import Tag from './Tag';

interface GuideDashboardProps {
  guide: Guide;
  onProfileUpdate: (updatedGuide: Guide) => void;
}

const GuideDashboard: React.FC<GuideDashboardProps> = ({ guide, onProfileUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Guide>(guide);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const tagsArray = e.target.value.split(',').map(tag => tag.trim());
      setFormData(prev => ({ ...prev, expertiseTags: tagsArray }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onProfileUpdate(formData);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Edit Your Profile</h1>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Your Bio</label>
                <textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    rows={6}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                />
                 <p className="mt-2 text-sm text-gray-500">This is your chance to tell travellers your story. Be personal and engaging!</p>
            </div>
             <div>
                <label htmlFor="expertiseTags" className="block text-sm font-medium text-gray-700">Expertise Tags</label>
                <input
                    type="text"
                    id="expertiseTags"
                    name="expertiseTags"
                    value={formData.expertiseTags.join(', ')}
                    onChange={handleTagsChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                />
                 <p className="mt-2 text-sm text-gray-500">Separate tags with a comma (e.g., Street Art, History, Hidden Cafés).</p>
            </div>
             <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700">Availability</label>
                <input
                    type="text"
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                />
            </div>
            <div className="flex justify-end gap-4">
                <button type="button" onClick={() => setIsEditing(false)} className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition">Cancel</button>
                <button type="submit" className="bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-700 transition">Save Changes</button>
            </div>
        </form>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Your Guide Dashboard</h1>
                <p className="mt-1 text-gray-600">This is how travellers see your profile. Keep it up to date!</p>
            </div>
            <button 
                onClick={() => setIsEditing(true)} 
                className="mt-4 sm:mt-0 bg-teal-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-600 transition duration-300"
            >
                Edit Profile
            </button>
        </div>
        <GuideProfile guide={guide} onBack={() => {}} />
    </div>
  );
};

export default GuideDashboard;
