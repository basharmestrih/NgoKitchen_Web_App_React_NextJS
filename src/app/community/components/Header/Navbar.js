import React from 'react';

const Navbar = ({ activeTab, changeTab }) => {
  return (
    <nav className="font-saira mx-auto mt-4 mb-6 bg-gray-800 shadow-xl rounded-2xl 
      w-[95%] max-w-[550px] px-4 md:px-10 py-4 flex gap-2 md:gap-10 items-center justify-around md:justify-between transition-all">
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
