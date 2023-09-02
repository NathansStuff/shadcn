import React from 'react';

type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props): JSX.Element {
  return <div className='md:w-4xl mx-auto  max-w-7xl'>{children}</div>;
}

export default Container;
