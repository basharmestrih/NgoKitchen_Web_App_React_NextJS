import { useState, useMemo } from "react";

export default function useFilteredItems(items) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const countryMatch = selectedCountry ? item.country === selectedCountry : true;
      const categoryMatch = selectedCategory ? item.category === selectedCategory : true;
      return countryMatch && categoryMatch;
    });
  }, [items, selectedCountry, selectedCategory]);

  return {
    filteredItems,
    selectedCountry,
    setSelectedCountry,
    selectedCategory,
    setSelectedCategory
  };
}
