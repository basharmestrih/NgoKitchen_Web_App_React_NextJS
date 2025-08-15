import { Heart, ShareNetwork, LinkSimple, CurrencyDollar, ArrowSquareOut } from "phosphor-react";
import { Lobster } from 'next/font/google';
import { motion } from "framer-motion";
import { useRef } from 'react';

const poppins = Lobster({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

const iconVariants = {
  hover: { scale: 1.2 },
  tap: { scale: 1.4 },
};

const ReactionBar = ({ post, postlike, showDonate, toggleLike, toggleDonate }) => {
  // Refs to track clicked state for each icon
  const likedRef = useRef(postlike[post._id] || false);
  const donatedRef = useRef(showDonate[post._id] || false);

  const handleLikeClick = () => {
    toggleLike(post._id);
    likedRef.current = !likedRef.current; // Toggle the liked state
  };

  const handleDonateClick = () => {
    toggleDonate(post._id);
    donatedRef.current = !donatedRef.current; // Toggle the donated state
  };

  return (
    <div className="flex justify-between bg-gray-100 p-2 gap-40 px-5 rounded-md items-center shadow-md">
      <div className="flex gap-4">
        
        {/* Like */}
        <motion.div
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={handleLikeClick}
          className="cursor-pointer group"
        >
          <Heart
            weight={likedRef.current ? "fill" : "regular"}
            className={`w-7 h-7 transition-colors duration-300 ${
              likedRef.current
                ? "text-red-500 group-hover:text-red-600"
                : "text-blue-500 group-hover:text-red-400"
            }`}
          />
        </motion.div>

        {/* Share */}
        <motion.div
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
          className="cursor-pointer group"
        >
          <ShareNetwork className="w-7 h-7 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
        </motion.div>

        {/* Link */}
        <motion.div
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
          className="cursor-pointer group"
        >
          <LinkSimple className="w-7 h-7 text-blue-500 group-hover:text-indigo-400 transition-colors duration-300" />
        </motion.div>

        {/* Donate */}
        <motion.div
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={handleDonateClick}
          className="cursor-pointer group"
        >
          <CurrencyDollar
            weight={donatedRef.current ? "fill" : "regular"}
            className={`w-7 h-7 transition-colors duration-300 ${
              donatedRef.current
                ? "text-green-500 group-hover:text-green-600"
                : "text-blue-500 group-hover:text-green-400"
            }`}
          />
        </motion.div>

        {/* External */}
        <motion.div
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
          className="cursor-pointer group"
        >
          <ArrowSquareOut className="w-6 h-6 text-blue-500 group-hover:text-purple-400 transition-colors duration-300" />
        </motion.div>
      </div>

      {/* Author */}
      <div className={`${poppins.className} text-xl text-blue-500`}>
        By: {post.author || "Unknown"}
      </div>
    </div>
  );
};

export default ReactionBar;
