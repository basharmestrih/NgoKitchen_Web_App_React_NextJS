"use client";

import { useEffect, useState } from "react";
import FoodPage from "./storepage.js";
import { LoadingSpinner } from "../community/components/LoadingIndicator/LoadingIndicator.js";

export default function Page() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {

      try {
        const res = await fetch("/api/foodmeals");

        const data = await res.json();

        setItems(data);
      } catch (error) {
        console.error("❌ [Client] Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <LoadingSpinner size={72} />
      </div>
    );
  }

  return <FoodPage items={items} />;
}
