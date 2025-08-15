import React from 'react';
import { Lobster } from 'next/font/google';

  const poppins = Lobster({
  subsets: ['latin'],
  weight: ['400'], // or '600', '700', etc.
  display: 'swap', 
});

const PostBody = ({ post }) => {
  return (
    <div className="p-0">
      {/* Title and Country */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-2xl text-center font-bold">{post.title}</h2>
        <div className="w-20 h-10 bg-blue-500 text-white flex items-center font-bold justify-center rounded shadow-lg">
          {post.country}
        </div>
      </div>

      {/* Target Donation */}
      <div className="flex justify-between mb-2">
        <p className={`text-xl text-blue-500 font-poetsen`}>
          {post.targetDonation} $
        </p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-400 font-bold text-start mb-3">
        {post.description}
      </p>
    </div>
  );
};

export default PostBody;
