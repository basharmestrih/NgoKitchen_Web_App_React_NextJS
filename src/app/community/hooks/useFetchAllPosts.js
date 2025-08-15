// hooks/useFoodItems.js
import { useEffect, useState } from "react";
export default function useFetchPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/allposts",{
          next: { revalidate: 3600 }, // Revalidate every 1 hour
        });
       
        const data = await res.json();
        setPosts(data);
        console.log(data)
      } catch (error) {
        console.error("Failed to fetch food items", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading };
}
