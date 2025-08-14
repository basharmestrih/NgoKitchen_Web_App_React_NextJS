// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomeRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, [router]);

  return null; // or a loading spinner if you prefer
};

export default HomeRedirect;
