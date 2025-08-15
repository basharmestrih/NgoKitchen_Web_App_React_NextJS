// hooks/useTargetForm.js
import { useState, useImperativeHandle } from 'react';

const useCredentials = (ref) => {
      const [title, setTitle] = useState('');
      const [description, setDescription] = useState('');
  

  useImperativeHandle(ref, () => ({
    getValues: () => ({
      title,
      description,
      
    }),
  }), [title, description]);

  return {
    title,
    setTitle,
    description,
    setDescription,
  };
};

export default useCredentials;
