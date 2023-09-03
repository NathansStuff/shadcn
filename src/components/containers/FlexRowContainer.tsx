import React from 'react';

import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function FlexRowContainer({ children, className }: Props): JSX.Element {
  return (
    <div className={cn('flex-center w-full space-x-4 ', className)}>
      {children}
    </div>
  );
}
