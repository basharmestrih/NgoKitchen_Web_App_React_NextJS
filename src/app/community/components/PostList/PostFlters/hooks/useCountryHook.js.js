import { useState } from "react";

export function useCountryHook() {
  const [country, setCountry] = useState([]);

  const handleClick = (clickedCountry) => {
    const updatedSelected = country.includes(clickedCountry)
      ? country.filter((c) => c !== clickedCountry)
      : [...country, clickedCountry];

    setCountry(updatedSelected);
  };

  return {
    country,
    handleClick,
  };
}
