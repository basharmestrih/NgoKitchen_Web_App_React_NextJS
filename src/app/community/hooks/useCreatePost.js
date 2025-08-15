// hooks/useCreatePost.js

import { useState } from "react";

const useCreatePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const createPost = async ({ title, description, image, author, country, targetDonation, selectedAge}) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, image,author, country, targetDonation, selectedAge }),
      });

      const data = await res.json();
      console.log(data);

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setSuccess(true);
      return data;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { createPost, loading, error, success };
};

export default useCreatePost;
