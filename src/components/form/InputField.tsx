import { Control, FieldValues, Path } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel, Input } from '..';

interface InputFieldProps<T extends FieldValues> {
  label: string;
  placeholder: string;
  name: Path<T>;
  control: Control<T>;
}

export function InputField<T extends FieldValues>(
  props: InputFieldProps<T>
): JSX.Element {
  const { label, placeholder, name, control } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }): JSX.Element => (
        <FormItem className='w-full'>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
