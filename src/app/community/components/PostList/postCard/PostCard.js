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
    <div className="bg-white w-full shadow-lg rounded-xl overflow-hidden mb-8 border border-gray-200">
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover"
        />
      )}

      <div className="p-2 py-2">
        <PostBody post={post} />
        <div className="flex justify-center items-center">
          <ReactionBar
            post={post}
            postlike={liked}
            showDonate={showDonate}
            toggleLike={toggleLike}
            toggleDonate={toggleDonate}
          />
        </div>

        {showDonate && (
          <div className="mt-4 flex justify-center items-center gap-x-20">
            <div className="flex items-center gap-2 border px-3 py-1 rounded-md bg-gray-50">
              <button
                onClick={decrementTarget}
                className="px-2 py-1 text-sm font-bold"
              >
                -
              </button>
              <span className="font-medium">{target} $</span>
              <button
                onClick={incrementTarget}
                className="px-2 py-1 text-sm font-bold"
              >
                +
              </button>
            </div>

            <button
              onClick={hideDonate}
              className="text-sm font-semibold text-green-600 hover:underline"
            >
              Donate Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
