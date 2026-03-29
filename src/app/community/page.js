"use client";

import React from 'react';
import Navbar from "./components/Header/Navbar.js";
import CreatePost from "./components/CreatePost/CreatePost.js";
import PostList from "./components/PostList/PostsFeed.js";
import useActiveTab from './hooks/useActiveTab';
import MyPosts from './components/MyPosts/myposts.js';

export default function PostsPage() {
  const { activeTab, changeTab } = useActiveTab();

  return (
    <div>
      <Navbar activeTab={activeTab} changeTab={changeTab} />

      <div className="font-orbitron mt-2">
        {activeTab === 'create' && <CreatePost />}
        {activeTab === 'myposts' && <MyPosts />}
        {activeTab === 'allposts' && <PostList />}
      </div>
    </div>
  );
}
