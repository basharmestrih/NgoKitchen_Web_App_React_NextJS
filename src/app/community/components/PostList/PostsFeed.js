"use client";

import { useRef,useCallback ,useState  } from "react";
import useFoodItems from "../../hooks/useFoodItems.js";
import PostFilters from "./PostFlters/PostsFilters.js";
import { Lobster } from "next/font/google";
import { GradientCircularProgress } from "../LoadingIndicator/LoadingIndicator.js";
import PostCard from "./postCard/PostCard.js"; // Make sure this path is correct

const poppins = Lobster({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function PostList() {
  const filterRef = useRef();
  const [filters, setFilters] = useState({ countries: [], ageGroup: "" });

  const { posts, loading } = useFoodItems(filters.countries, filters.ageGroup);


    const handleApply = useCallback(() => {
    const values = filterRef.current?.getFilters();
    setFilters({
      countries: values?.countries || [],
      ageGroup: values?.ageGroup || "",
    });
  }, []);
  return (
    <div className="font-lato flex items-start justify-start gap-5">
      {/* POSTS LIST */}
      <div className="w-1/2 flex flex-col items-start justify-start p-6 pr-3">
        {/* SHOW LOADING */}
        {loading ? (
          <div className="w-full flex justify-center items-center py-40">
            <GradientCircularProgress />
          </div>
        ) : (
          posts.map((post) => <PostCard key={post._id} post={post} />)
        )}
      </div>

      {/* FILTERS SECTION */}
      <PostFilters ref={filterRef}  onApply={handleApply}/>
    </div>
  );
}
