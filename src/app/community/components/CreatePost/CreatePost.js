// components/CreatePost.js
'use client';
import React, { useRef } from 'react';
import PostCredentials from './NestedComponents/credentials/PostCredentials';
import PostPicture from './NestedComponents/credentials/PostPicture';
import TargetForm from './NestedComponents/filters/PostFiltersAdder';
import { useSession } from 'next-auth/react';
import useCreatePost from '../../hooks/useCreatePost.js';
const CreatePost = () => {
  const { data: session } = useSession();
  const author = session?.user?.name || 'Anonymous';
  const { createPost, loading ,success , error} = useCreatePost();
  const credentialsRef = useRef();
  const filtersRef = useRef();

  const handlePostClick = async() => {
    const { title, description } = credentialsRef.current.getValues();
    const { country, targetDonation, selectedAge } = filtersRef.current.getValues();
    const postData = {
      title,
      description,
      image: '/sample.jpg',
      author,
      country,
      targetDonation,
      selectedAge,
    };

    console.log('Creating post:', postData);
    await createPost(postData);
  };
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex gap-6">
        <PostCredentials ref={credentialsRef} />
        <PostPicture />
      </div>
       <div className="max-w-5xl mx-auto p-6"></div>

    <TargetForm
  ref={filtersRef}
  OnPost={handlePostClick}
  success={success}
  error={error}
  loading={loading}
/>
      <div className="mt-6">
      </div>
    </div>
  );
};

export default CreatePost;
