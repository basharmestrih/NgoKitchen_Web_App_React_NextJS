import { useState, useMemo } from "react";

export default function useFilteredItems(items) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredItems = useMemo(() => {
    const arr = Array.isArray(items) ? items : [];
    const normalize = (value) => String(value ?? "").trim().toLowerCase();

    return arr.filter((item) => {
      const normalizedCountry = normalize(item?.country);
      const normalizedSelectedCountry = normalize(selectedCountry);
      const normalizedSelectedCategory = normalize(selectedCategory);

      const countryMatch = selectedCountry
        ? normalizedCountry === normalizedSelectedCountry
        : true;

      const categoryCandidates = [
        item?.name,
        item?.title,
        item?.category,
      ]
        .map(normalize)
        .filter(Boolean);

      const categoryMatch = selectedCategory
        ? categoryCandidates.some(
            (value) =>
              value === normalizedSelectedCategory ||
              value.includes(normalizedSelectedCategory)
          )
        : true;

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
