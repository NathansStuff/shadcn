import React from 'react';

import { Input, Label } from '..';

interface LabeledInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string; // Assuming id is mandatory for associating the label with the input
}

export function LabeledInput({
  label,
  id,
  ...inputProps
}: LabeledInputProps): JSX.Element {
  return (
    <>
      <div className={inputProps.className}>
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} {...inputProps} />
      </div>
    </>
  );
}
