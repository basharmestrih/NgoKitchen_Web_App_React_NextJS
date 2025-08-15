import { useState } from "react";

export function useAgeHook() {
  const [selected, setSelected] = useState("");

  const handleSetAgeGroups = (event) => {
    const { name } = event.target;

    if (selected === name) {
      setSelected("");
    } else {
      setSelected(name);
    }
  };

  return {
    selected,
    handleSetAgeGroups,
  };
}
