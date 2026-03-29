"use client";

import React, { useRef, useState } from "react";
import PostCredentials from "./NestedComponents/credentials/PostCredentials";
import PostPicture from "./NestedComponents/credentials/PostPicture";
import TargetForm from "./NestedComponents/filters/PostFiltersAdder";
import { useSession } from "next-auth/react";
import useCreatePost from "../../hooks/useCreatePost.js";

const CreatePost = () => {
  const { data: session } = useSession();
  const author = session?.user?.name || "Anonymous";
  const { createPost, loading, success, error } = useCreatePost();
  const credentialsRef = useRef();
  const filtersRef = useRef();
  const [image, setImage] = useState("");

  const handlePostClick = async () => {
    const { title, description } = credentialsRef.current.getValues();
    const { country, targetDonation, selectedAge } = filtersRef.current.getValues();
    const postData = {
      title,
      description,
      image,
      author,
      country,
      targetDonation,
      selectedAge,
    };

    await createPost(postData);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      {/* Desktop: Side-by-Side | Mobile: Stacked */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:flex-1">
           <PostCredentials ref={credentialsRef} />
        </div>
        <div className="w-full md:w-1/3">
           <PostPicture image={image} onChange={setImage} />
        </div>
      </div>

      <div className="mt-8">
        <TargetForm
          ref={filtersRef}
          OnPost={handlePostClick}
          success={success}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default CreatePost;
