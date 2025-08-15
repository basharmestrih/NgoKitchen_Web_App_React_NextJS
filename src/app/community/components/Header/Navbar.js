import React from 'react';

const Navbar = ({ activeTab, changeTab }) => {
  return (
    <nav className="font-saira
     mx-auto mt-2 bg-gray-700 shadow-md rounded-lg w-[500px] px-10 py-4 flex gap-10 items-center justify-between">
      {['create', 'myposts', 'allposts'].map((tab) => (
        <div key={tab} className="relative">
          {activeTab === tab && (
            <div className="absolute inset-0 -left-4 -right-4 -top-2 -bottom-2 rounded-full bg-blue-500 opacity-20  z-0"></div>
          )}
          <button
            onClick={() => changeTab(tab)}
            className={`relative z-10 font-semibold ${
              activeTab === tab ? 'text-blue-400' : 'text-gray-100'
            }`}
          >
            {tab === 'create' ? 'Create Post' : tab === 'myposts' ? 'My Posts' : 'All Posts'}
          </button>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
