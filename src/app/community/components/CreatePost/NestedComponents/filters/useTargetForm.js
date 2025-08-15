// hooks/useTargetForm.js
import { useState, useImperativeHandle } from 'react';

const useTargetForm = (ref) => {
  const [country, setCountry] = useState('');
  const [targetDonation, setTargetDonation] = useState(0);
  const [selectedAge, setSelectedAge] = useState('');

  useImperativeHandle(ref, () => ({
    getValues: () => ({
      country,
      targetDonation,
      selectedAge,
    }),
  }), [country, targetDonation, selectedAge]);

  const handleIncrement = () => setTargetDonation((prev) => prev + 10);
  const handleDecrement = () => setTargetDonation((prev) => Math.max(0, prev - 10));

  const handleCheckboxChange = (e) => {
    setSelectedAge(e.target.name);
  };

  return {
    country,
    setCountry,
    targetDonation,
    handleIncrement,
    handleDecrement,
    selectedAge,
    handleCheckboxChange,
  };
};

export default useTargetForm;
