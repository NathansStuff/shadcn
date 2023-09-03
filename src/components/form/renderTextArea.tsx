import { Control, FieldValues, Path } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel, Textarea } from '..';

export function renderTextarea<T extends FieldValues>(
  label: string,
  placeholder: string,
  name: Path<T>,
  control: Control<T>,
  className?: string // Optional, if you want to pass different classes in the future
): JSX.Element {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }): JSX.Element => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              className={className || 'min-h-[240px]'}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
