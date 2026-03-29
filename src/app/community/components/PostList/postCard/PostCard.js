// components/PostCard/PostCard.js
"use client";

import { useState } from "react";
import ReactionBar from "./NestedComponents/ReactionsFrame.js"; // assuming this is your like/share bar
import PostBody from "./NestedComponents/postBody.js"; // assuming this displays post content
import Image from "next/image";

export default function PostCard({ post }) {
  const [showDonate, setShowDonate] = useState(false);
  const [target, setTarget] = useState(50);
  const [liked, setLiked] = useState(false);

  const toggleDonate = () => {
    setShowDonate((prev) => !prev);
  };

  const hideDonate = () => {
    setShowDonate(false);
  };

  const incrementTarget = () => {
    setTarget((prev) => prev + 50);
  };

  const decrementTarget = () => {
    setTarget((prev) => Math.max(1, prev - 50));
  };

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

return (
    <div className="bg-white w-full shadow-lg rounded-xl overflow-hidden mb-6 border border-gray-200">
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[250px] md:h-96 object-cover"
        />
      )}

      <div className="p-4">
        <PostBody post={post} />
        
        <div className="mt-2">
          <ReactionBar
            post={post}
            postlike={liked}
            showDonate={showDonate}
            toggleLike={() => setLiked(!liked)}
            toggleDonate={() => setShowDonate(!showDonate)}
          />
        </div>

        {showDonate && (
          <div className="mt-4 p-3 bg-blue-50 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 border-2 border-blue-200 px-4 py-2 rounded-xl bg-white">
              <button onClick={() => setTarget(Math.max(1, target - 50))} className="text-xl font-bold text-blue-600">-</button>
              <span className="font-bold text-lg">{target} $</span>
              <button onClick={() => setTarget(target + 50)} className="text-xl font-bold text-blue-600">+</button>
            </div>

            <button
              onClick={() => setShowDonate(false)}
              className="w-full sm:w-auto bg-green-600 text-white px-8 py-2 rounded-xl font-bold shadow-md active:scale-95 transition-transform"
            >
              Donate Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
