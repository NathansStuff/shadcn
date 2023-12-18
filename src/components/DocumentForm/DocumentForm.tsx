'use client';

import React, { FormEvent, useState } from 'react';

import { createDocumentAction } from '@/actions/documents/createDocumentAction';
import { deleteDocumentAction } from '@/actions/documents/deleteDocumentAction';
import { updateDocumentAction } from '@/actions/documents/updateDocumentAction';
import { DEFAULT_CHUNK_OVERLAP, DEFAULT_CHUNK_SIZE } from '@/constants';
import {
  Document,
  DocumentWithId,
  EComponentType,
  ECountryCode,
  EIndustry,
  EStateCode,
} from '@/types';

import { Button, Input, Label } from '..';

interface Props {
  existingTemplate?: DocumentWithId;
}

export function DocumentForm({ existingTemplate }: Props): JSX.Element {
  // Initialize state with existingTemplate if available, otherwise default to empty values
  const [embedTemplate, setEmbedTemplate] = useState<Document>({
    documentName: existingTemplate?.documentName || '',
    defaultMetadata: existingTemplate?.defaultMetadata || {
      general: existingTemplate?.defaultMetadata?.general || {
        sourceName:
          existingTemplate?.defaultMetadata?.general?.sourceName || '',
        sourceLink:
          existingTemplate?.defaultMetadata?.general?.sourceLink || '',
        countryCode:
          existingTemplate?.defaultMetadata?.general?.countryCode ||
          ECountryCode.AUS,
        stateCode:
          existingTemplate?.defaultMetadata?.general?.stateCode ||
          EStateCode.NSW,
        industry:
          existingTemplate?.defaultMetadata?.general?.industry ||
          EIndustry.CONSTRUCTION,
      },

      templates: existingTemplate?.defaultMetadata?.templates || {
        aiTemplateId:
          existingTemplate?.defaultMetadata?.templates?.aiTemplateId || '',
        embeddedTemplateId:
          existingTemplate?.defaultMetadata?.templates?.embeddedTemplateId ||
          '',
      },
      ui: existingTemplate?.defaultMetadata?.ui || {
        title: existingTemplate?.defaultMetadata?.ui?.title || '',
        componentType:
          existingTemplate?.defaultMetadata?.ui?.componentType ||
          EComponentType.PASSAGE,
      },
    },
    fullText: existingTemplate?.fullText || '',
    chunkSize: existingTemplate?.chunkSize || DEFAULT_CHUNK_SIZE,
    chunkOverlap: existingTemplate?.chunkOverlap || DEFAULT_CHUNK_OVERLAP,
    infoIds: existingTemplate?.infoIds || [],
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    if (existingTemplate) {
      // Logic for updating an existing template
      const updatedTemplate: DocumentWithId = {
        _id: existingTemplate._id,
        ...embedTemplate,
      };

      await updateDocumentAction(updatedTemplate);
    } else {
      // Logic for creating a new template
      await createDocumentAction(embedTemplate);
    }
  }

  const submitButtonText = existingTemplate ? 'Update' : 'Create';

  async function handleDelete(): Promise<void> {
    if (!existingTemplate) return;
    await deleteDocumentAction(existingTemplate._id.toString());
  }

  return (
    <form onSubmit={handleSubmit} className='w-full space-y-8'>
      <div>
        <Label htmlFor='name'>Document Name</Label>
        <Input
          id='name'
          type='text'
          value={embedTemplate.documentName}
          onChange={(e): void =>
            setEmbedTemplate({ ...embedTemplate, documentName: e.target.value })
          }
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
