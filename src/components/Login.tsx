'use client';

import Image from 'next/image';
import { signIn, SignInResponse } from 'next-auth/react';

function Login(): JSX.Element {
  return (
    <div className='flex-center h-screen flex-col bg-[#11A37F] text-center'>
      <Image src='https://links.papareact.com/2i6' width={300} height={300} alt='logo' />
      <button
        onClick={(): Promise<SignInResponse | undefined> => signIn('google', { callbackUrl: '/' })}
        className='animate-pulse text-3xl font-bold text-white'
      >
        Sign In to use ConstructionGPT
      </button>
    </div>
  );
}

export default Login;
