"use client";

import { useCallback, useRef, useState } from "react";
import useFoodItems from "../../hooks/useFoodItems.js";
import PostFilters from "./PostFlters/PostsFilters.js";
import { Lobster } from "next/font/google";
import { LoadingSpinner } from "../LoadingIndicator/LoadingIndicator.js";
import PostCard from "./postCard/PostCard.js";

const poppins = Lobster({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function PostList() {
  const filterRef = useRef();
  const [filters, setFilters] = useState({ countries: [], ageGroup: "" });
  const { posts, loading, error } = useFoodItems(filters.countries, filters.ageGroup);

  const handleApply = useCallback(() => {
    const values = filterRef.current?.getFilters();
    setFilters({
      countries: values?.countries || [],
      ageGroup: values?.ageGroup || "",
    });
    if (window.innerWidth < 768) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="font-lato flex flex-col md:flex-row items-start justify-start gap-5 p-2 md:p-6">
      
      {/* FILTERS SECTION - Appears first on mobile */}
      <div className="w-full md:w-[400px] order-1 md:order-2">
        <PostFilters ref={filterRef} onApply={handleApply} />
      </div>

      {/* POSTS LIST */}
      <div className="w-full md:flex-1 flex flex-col items-start justify-start order-2 md:order-1">
        {loading ? (
          <div className="w-full flex justify-center items-center py-20 md:py-40">
            <LoadingSpinner />
          </div>
        ) : error ? (
          <div className="w-full rounded-[1.5rem] border border-red-200 bg-red-50 px-6 py-8 text-center shadow-sm">
            <p className="text-lg font-black text-red-700">Could not load posts</p>
            <p className="mt-2 text-sm font-semibold text-red-500">{error}</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="w-full rounded-[1.5rem] border border-slate-200 bg-white px-6 py-8 text-center shadow-sm">
            <p className="text-lg font-black text-slate-800">No posts found</p>
            <p className="mt-2 text-sm font-semibold text-slate-500">
              Try changing the filters or create the first campaign post.
            </p>
          </div>
        ) : (
          posts.map((post) => <PostCard key={post._id} post={post} />)
        )}
      </div>
    </div>
  );
}
