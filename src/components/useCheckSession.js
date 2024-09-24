"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SessionUsers from '@/libs/SessionUsers';

const useCheckSession = () => {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const session = await SessionUsers({}); // Pass empty object as context

      if (session) {
        router.push('/admin/dashboard');
      }
    };

    checkSession();
  }, [router]);
};

export default useCheckSession;