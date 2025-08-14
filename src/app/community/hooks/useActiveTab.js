// hooks/useActiveTab.js
import { useState } from 'react';

const useActiveTab = (initialTab = 'create') => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const changeTab = (tabName) => {
    setActiveTab(tabName);
  };

  return { activeTab, changeTab };
};

export default useActiveTab;
