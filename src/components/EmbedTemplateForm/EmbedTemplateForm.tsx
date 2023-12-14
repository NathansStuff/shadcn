'use client';

import { FormEvent, useState } from 'react';

import { EmbedTemplate, EmbedTemplateWithId } from '@/types';

import { Button, Input, Label, Textarea } from '../ui';

interface EmbedTemplateFormProps {
  existingTemplate?: EmbedTemplateWithId;
}

export function EmbedTemplateForm({
  existingTemplate,
}: EmbedTemplateFormProps): JSX.Element {
  // Initialize state with existingTemplate if available, otherwise default to empty values
  const [embedTemplate, setEmbedTemplate] = useState<EmbedTemplate>({
    name: existingTemplate?.name || '',
    template: existingTemplate?.template || '',
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (existingTemplate) {
      console.log('Updating existing template', embedTemplate);
      // Logic for updating an existing template
    } else {
      console.log('Creating new template', embedTemplate);
      // Logic for creating a new template
    }
  }

  const submitButtonText = existingTemplate ? 'Update' : 'Create';

  return (
    <form onSubmit={handleSubmit} className='w-full space-y-8'>
      <div>
        <Label htmlFor='name'>Name</Label>
        <Input
          id='name'
          type='text'
          value={embedTemplate.name}
          onChange={(e): void =>
            setEmbedTemplate({ ...embedTemplate, name: e.target.value })
          }
        />
      </div>
      <p>
        When creating the template, use:
        <br /> -{`{{content}}`} for the chunked text.
        <br /> -{`{{documentName}}`} for the title of the document the text is
        from. <br />
        <br />
        Example: <br />
        The following is an extract from {`{{documentName}}`}.
        <br />
        {`{{content}}`}
      </p>
      <div>
        <Label htmlFor='template'>Template</Label>
        <Textarea
          id='template'
          value={embedTemplate.template}
          onChange={(e): void =>
            setEmbedTemplate({ ...embedTemplate, template: e.target.value })
          }
          className='h-40'
        />
      </div>
      <Button type='submit'>{submitButtonText}</Button>
    </form>
  );
}
