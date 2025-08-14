"use client";

import { useEffect, useState } from "react";
import FoodPage from "./storepage.js";

export default function Page() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      console.log("🌐 [Client] Fetching /api/foodmeals");

      try {
        const res = await fetch("/api/foodmeals");
        console.log("📥 [Client] Response status:", res.status);

        const data = await res.json();
        console.log("🍽️ [Client] Items received:", data);

        setItems(data);
      } catch (error) {
        console.error("❌ [Client] Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <p>Loading...</p>;

  return <FoodPage items={items} />;
}
