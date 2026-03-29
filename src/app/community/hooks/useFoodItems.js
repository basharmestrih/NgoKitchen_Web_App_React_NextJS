import { useQuery } from "@tanstack/react-query";

const fetchFilteredItems = async (selectedCountries, selectedage) => {
  const res = await fetch("/api/allposts", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    const payload = await res.json().catch(() => null);
    throw new Error(payload?.error || "Failed to fetch posts");
  }

  const allItems = await res.json();

  return allItems.filter((item) => {
    const countryMatch = !selectedCountries?.length || selectedCountries.includes(item.country?.toUpperCase());
    const ageMatch = !selectedage?.length || selectedage.includes(item.selectedAge);
    return countryMatch && ageMatch;
  });
};


export default function useFoodItems(selectedCountries = [],selectedage=[]) {
  const {
    data: filteredItems = [],
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["filteredFoodItems", selectedCountries,selectedage],
    queryFn: () => fetchFilteredItems(selectedCountries,selectedage),
    staleTime: 1000 * 60 * 60,
  });

  return {
    posts: filteredItems,
    loading,
    error: error?.message || "",
  };
}
