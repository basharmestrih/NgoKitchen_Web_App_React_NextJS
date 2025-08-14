'use client';
import React, { useState } from 'react';
import {ImagePlus} from 'lucide-react';

const PostPicture = () => {

  return (
    
        <div className="w-1/3 h-[25rem] flex items-center justify-center bg-gray-200 rounded-lg min-h-[300px] text-gray-600 font-semibold cursor-pointer">
          <ImagePlus className="mr-2 w-10 h-10" />  Add Cover Image
        </div>
      );
};

export default PostPicture;





      