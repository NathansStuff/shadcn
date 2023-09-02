'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export function LoginIsRequiredClient(): void {
  const session = useSession();
  const router = useRouter();

  // Redirect if session is not available
  useEffect(() => {
    if (!session) router.push('/');
  }, [session, router]);
}
