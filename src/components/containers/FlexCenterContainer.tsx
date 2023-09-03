import React from 'react';

import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function FlexCenterContainer({
  children,
  className,
}: Props): JSX.Element {
  return (
    <div className='flex-center w-full py-5 text-left'>
      <div className={cn('w-full max-w-4xl', className)}>{children}</div>
    </div>
  );
}
