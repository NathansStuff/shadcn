'use client';

import { FormEvent, useState } from 'react';

import { sendDeleteAiTemplate } from '@/actions/sendDeleteAiTemplate';
import { sendNewAiTemplate } from '@/actions/sendNewAiTemplate';
import { sendUpdateAiTemplate } from '@/actions/sendUpdateAiTemplate';
import { AiTemplate, AiTemplateWithId } from '@/types';

import { Button, Input, Label, Textarea } from '../ui';

interface AiTemplateFormProps {
  existingTemplate?: AiTemplateWithId;
}

export function AiTemplateForm({
  existingTemplate,
}: AiTemplateFormProps): JSX.Element {
  // Initialize state with existingTemplate if available, otherwise default to empty values
  const [AiTemplate, setAiTemplate] = useState<AiTemplate>({
    name: existingTemplate?.name || '',
    template: existingTemplate?.template || '',
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    if (existingTemplate) {
      console.log('Updating existing template', AiTemplate);
      // Logic for updating an existing template
      const updatedTemplate: AiTemplateWithId = {
        _id: existingTemplate._id,
        name: AiTemplate.name,
        template: AiTemplate.template,
      };

      await sendUpdateAiTemplate(updatedTemplate);
    } else {
      // Logic for creating a new template
      const newTemplate: AiTemplate = {
        name: AiTemplate.name,
        template: AiTemplate.template,
      };
      await sendNewAiTemplate(newTemplate);
    }
  }

  async function handleDelete(): Promise<void> {
    if (!existingTemplate) return;
    await sendDeleteAiTemplate(existingTemplate._id.toString());
  }

  const submitButtonText = existingTemplate ? 'Update' : 'Create';

  return (
    <form onSubmit={handleSubmit} className='w-full space-y-8'>
      <div>
        <Label htmlFor='name'>Name</Label>
        <Input
          id='name'
          type='text'
          value={AiTemplate.name}
          onChange={(e): void =>
            setAiTemplate({ ...AiTemplate, name: e.target.value })
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
          value={AiTemplate.template}
          onChange={(e): void =>
            setAiTemplate({ ...AiTemplate, template: e.target.value })
          }
          className='h-40'
        />
      </div>
      <div className='flex items-center justify-between'>
        <Button type='submit'>{submitButtonText}</Button>
        {existingTemplate && (
          <Button onClick={handleDelete} variant='destructive'>
            Delete
          </Button>
        )}
      </div>
    </form>
  );
}
