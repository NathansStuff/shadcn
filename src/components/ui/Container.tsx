import React from 'react';

import { Header } from '@/components/Header';

type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props): JSX.Element {
  return (
    <div className='md:w-4xl mx-auto  max-w-7xl'>
      <Header />
      {children}
    </div>
  );
}

export default Container;
