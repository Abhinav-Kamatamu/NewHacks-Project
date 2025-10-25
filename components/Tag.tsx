
import React from 'react';

interface TagProps {
  text: string;
}

const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <span className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">
      {text}
    </span>
  );
};

export default Tag;
