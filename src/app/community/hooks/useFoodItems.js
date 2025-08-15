import { useQuery } from '@tanstack/react-query';

const fetchFilteredItems = async (selectedCountries, selectedage) => {
  const res = await fetch("/api/allposts", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Failed to fetch food items");

  const allItems = await res.json();

  return allItems.filter((item) => {
    const countryMatch = !selectedCountries?.length || selectedCountries.includes(item.country?.toUpperCase());
    const ageMatch = !selectedage?.length || selectedage.includes(item.selectedAge); // Adjust this key if needed
    return countryMatch && ageMatch;
  });
};


export default function useFoodItems(selectedCountries = [],selectedage=[]) {
  const {
    data: filteredItems = [],
    isLoading: loading,
  } = useQuery({
    queryKey: ["filteredFoodItems", selectedCountries,selectedage],
    queryFn: () => fetchFilteredItems(selectedCountries,selectedage),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  console.log("filtered items:", filteredItems);
  return { posts: filteredItems, loading };
}
