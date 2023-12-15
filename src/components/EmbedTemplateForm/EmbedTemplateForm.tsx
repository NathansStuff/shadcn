'use client';

import { FormEvent, useState } from 'react';

import { createEmbedTemplateAction } from '@/actions/embedTemplate/createEmbedTemplateAction';
import { deleteEmbedTemplateAction } from '@/actions/embedTemplate/deleteEmbedTemplateAction';
import { updateEmbedTemplateAction } from '@/actions/embedTemplate/updateEmbedTemplateAction';
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

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    if (existingTemplate) {
      // Logic for updating an existing template
      const updatedTemplate: EmbedTemplateWithId = {
        _id: existingTemplate._id,
        name: embedTemplate.name,
        template: embedTemplate.template,
      };

      await updateEmbedTemplateAction(updatedTemplate);
    } else {
      // Logic for creating a new template
      const newTemplate: EmbedTemplate = {
        name: embedTemplate.name,
        template: embedTemplate.template,
      };
      await createEmbedTemplateAction(newTemplate);
    }
  }

  const submitButtonText = existingTemplate ? 'Update' : 'Create';

  async function handleDelete(): Promise<void> {
    if (!existingTemplate) return;
    await deleteEmbedTemplateAction(existingTemplate._id.toString());
  }

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
      <div className='flex items-center justify-between'>
        <Button type='submit'>{submitButtonText}</Button>
        {existingTemplate && (
          <Button onClick={handleDelete} type='button' variant='destructive'>
            Delete
          </Button>
        )}
      </div>
    </form>
  );
}
