// components/NestedComponents/PostCredentials.js
'use client';
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import useCredentials from './useCredentials.js';

const PostCredentials = forwardRef((props, ref) => {
    const {
      title,
      setTitle,
      description,
      setDescription
  } = useCredentials(ref);
  return (
    <div className="flex-1 flex-col">
      <div className="flex-1 bg-gray-100 rounded-lg p-4 mb-4">
        <textarea
          placeholder="Add Your Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full h-[50px] bg-transparent resize-none outline-none text-gray-800 text-lg"
        />
      </div>
      <div className="flex-1 bg-gray-100 rounded-lg p-4 min-h-[300px]">
        <textarea
          placeholder="Write your post here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full h-full bg-transparent resize-none outline-none text-gray-800 text-lg"
        />
      </div>
    </div>
  );
});

export default PostCredentials;
