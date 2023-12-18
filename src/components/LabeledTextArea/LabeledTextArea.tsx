import React from 'react';

import { Label, Textarea } from '..';

interface LabeledInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string; // Assuming id is mandatory for associating the label with the input
}

export function LabeledTextArea({
  label,
  id,
  ...inputProps
}: LabeledInputProps): JSX.Element {
  return (
    <>
      <div>
        <Label htmlFor={id}>{label}</Label>
        <Textarea id={id} {...inputProps} />
      </div>
    </>
  );
}
