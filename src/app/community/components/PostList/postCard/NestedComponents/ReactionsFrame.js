import {
  AttachMoney,
  Favorite,
  FavoriteBorder,
  InsertLink,
  Share,
} from "@mui/icons-material";
import { Lobster } from 'next/font/google';
import { motion } from "framer-motion";

const lobster = Lobster({ subsets: ['latin'], weight: ['400'] });

const ReactionBar = ({ post, postlike, showDonate, toggleLike, toggleDonate }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-50 p-3 px-4 rounded-xl gap-4 shadow-inner border border-gray-100">
      <div className="flex items-center justify-around w-full sm:w-auto gap-4 md:gap-6">
        {/* Like */}
        <motion.div whileTap={{ scale: 1.2 }} onClick={toggleLike} className="cursor-pointer">
          {postlike ? (
            <Favorite className="w-7 h-7 text-red-500" />
          ) : (
            <FavoriteBorder className="w-7 h-7 text-blue-500" />
          )}
        </motion.div>

        {/* Share */}
        <motion.div whileTap={{ scale: 1.2 }} className="cursor-pointer">
          <Share className="w-7 h-7 text-blue-500" />
        </motion.div>

        {/* Link */}
        <motion.div whileTap={{ scale: 1.2 }} className="cursor-pointer">
          <InsertLink className="w-7 h-7 text-blue-500" />
        </motion.div>

        {/* Donate */}
        <motion.div whileTap={{ scale: 1.2 }} onClick={toggleDonate} className="cursor-pointer">
          <AttachMoney className={`w-7 h-7 ${showDonate ? "text-green-500" : "text-blue-500"}`} />
        </motion.div>
      </div>

      {/* Author */}
      <div className={`${lobster.className} hidden text-lg text-blue-600 sm:block`}>
        By: {post.author || "Unknown"}
      </div>
    </div>
  );
};

export default ReactionBar;
