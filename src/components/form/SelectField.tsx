import { Control, FieldValues, Path } from 'react-hook-form';

import { ISelectOption } from '@/types';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '..';
interface SelectFieldProps<T extends FieldValues> {
  label: string;
  placeholder: string;
  name: Path<T>;
  control: Control<T>;
  options: ISelectOption[];
}

export function SelectField<T extends FieldValues>(
  props: SelectFieldProps<T>
): JSX.Element {
  const { label, placeholder, name, control, options } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }): JSX.Element => (
        <FormItem className='w-full'>
          <FormLabel>{label}</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value as string}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option, i) => (
                <SelectItem key={i} value={option.value}>
                  {option.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
