import React from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ISelectOption } from '@/types';

import { Label } from '..';

export function SelectField({
  label,
  options,
  value,
  onClick,
}: {
  label: string;
  options: ISelectOption[];
  value: string;
  onClick: (value: string) => void;
}): JSX.Element {
  return (
    <div className='flex w-full flex-col space-y-2 '>
      <Label>{label}</Label>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline'>{value}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-96'>
          {options.map((item, index) => (
            <React.Fragment key={index}>
              <DropdownMenuItem
                onClick={(): void => onClick(item.value)}
                className={`w-full cursor-pointer ${
                  item.value === value ? 'bg-secondary/40' : ''
                }`}
              >
                {item.value}
              </DropdownMenuItem>
            </React.Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
