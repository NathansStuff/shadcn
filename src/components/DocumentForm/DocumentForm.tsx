'use client';

import React, { FormEvent, useState } from 'react';

import { createDocumentAction } from '@/actions/documents/createDocumentAction';
import { deleteDocumentAction } from '@/actions/documents/deleteDocumentAction';
import { updateDocumentAction } from '@/actions/documents/updateDocumentAction';
import { DEFAULT_CHUNK_OVERLAP, DEFAULT_CHUNK_SIZE } from '@/constants';
import {
  componentTypeCodes,
  countryCodes,
  Document,
  DocumentWithId,
  EComponentType,
  ECountryCode,
  EIndustry,
  EStateCode,
  industryCodes,
  ISelectOption,
  stateCodes,
} from '@/types';

import { Button, LabeledInput, LabeledTextArea, SelectField } from '..';

interface Props {
  existingTemplate?: DocumentWithId;
}

export function DocumentForm({ existingTemplate }: Props): JSX.Element {
  // Initialize state with existingTemplate if available, otherwise default to empty values
  const [document, setDocument] = useState<Document>({
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
  });

  // todo: pull these from api
  const aiTemplateIds: ISelectOption[] = [
    {
      name: 'Template 1',
      value: '1',
    },
    {
      name: 'Template 2',
      value: '2',
    },
    {
      name: 'Template 3',
      value: '3',
    },
  ];
  const embeddedTemplateIds: ISelectOption[] = [
    {
      name: 'Template 1',
      value: '1',
    },
    {
      name: 'Template 2',
      value: '2',
    },
    {
      name: 'Template 3',
      value: '3',
    },
  ];

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    if (existingTemplate) {
      // Logic for updating an existing template
      const updatedTemplate: DocumentWithId = {
        _id: existingTemplate._id,
        ...document,
      };

      await updateDocumentAction(updatedTemplate);
    } else {
      // Logic for creating a new template
      await createDocumentAction(document);
    }
  }

  const submitButtonText = existingTemplate ? 'Update' : 'Create';

  async function handleDelete(): Promise<void> {
    if (!existingTemplate) return;
    await deleteDocumentAction(existingTemplate._id.toString());
  }

  function handleStateClick(e: string): void {
    setDocument({
      ...document,
      defaultMetadata: {
        ...document.defaultMetadata,
        general: {
          ...document.defaultMetadata.general,
          stateCode: e as EStateCode,
        },
      },
    });
  }

  function handleCountryClick(e: string): void {
    setDocument({
      ...document,
      defaultMetadata: {
        ...document.defaultMetadata,
        general: {
          ...document.defaultMetadata.general,
          countryCode: e as ECountryCode,
        },
      },
    });
  }

  function handleIndustryClick(e: string): void {
    setDocument({
      ...document,
      defaultMetadata: {
        ...document.defaultMetadata,
        general: {
          ...document.defaultMetadata.general,
          industry: e as EIndustry,
        },
      },
    });
  }

  function handleAiTemplateClick(e: string): void {
    setDocument({
      ...document,
      defaultMetadata: {
        ...document.defaultMetadata,
        templates: {
          ...document.defaultMetadata.templates,
          aiTemplateId: e as string,
        },
      },
    });
  }

  function handleEmbeddedTemplateClick(e: string): void {
    setDocument({
      ...document,
      defaultMetadata: {
        ...document.defaultMetadata,
        templates: {
          ...document.defaultMetadata.templates,
          embeddedTemplateId: e as string,
        },
      },
    });
  }

  function handleComponentTypeClick(e: string): void {
    setDocument({
      ...document,
      defaultMetadata: {
        ...document.defaultMetadata,
        ui: {
          ...document.defaultMetadata.ui,
          componentType: e as EComponentType,
        },
      },
    });
  }

  return (
    <form onSubmit={handleSubmit} className='w-full space-y-8'>
      <div>
        <LabeledInput
          label='Document Name'
          id='name'
          type='text'
          value={document.documentName}
          onChange={(e): void =>
            setDocument({ ...document, documentName: e.target.value })
          }
        />
        <h1 className='text-center text-3xl '>Metadata</h1>
        <h3 className='text-center text-xl'>General</h3>
        <LabeledInput
          label='Source Name'
          id='name'
          type='text'
          value={document.defaultMetadata.general.sourceName}
          onChange={(e): void =>
            setDocument({
              ...document,
              defaultMetadata: {
                ...document.defaultMetadata,
                general: {
                  ...document.defaultMetadata.general,
                  sourceName: e.target.value,
                },
              },
            })
          }
        />
        <LabeledInput
          label='Source Link'
          id='name'
          type='text'
          value={document.defaultMetadata.general.sourceLink}
          onChange={(e): void =>
            setDocument({
              ...document,
              defaultMetadata: {
                ...document.defaultMetadata,
                general: {
                  ...document.defaultMetadata.general,
                  sourceLink: e.target.value,
                },
              },
            })
          }
        />
      </div>
      <div className='flex w-full space-x-4'>
        <SelectField
          label='Select what country this applies to'
          options={countryCodes}
          onClick={handleCountryClick}
          value={document.defaultMetadata.general.countryCode}
        />
        <SelectField
          label='Select what state this applies to'
          options={stateCodes}
          onClick={handleStateClick}
          value={document.defaultMetadata.general.stateCode}
        />
        <SelectField
          label='Select what industry this applies to'
          options={industryCodes}
          onClick={handleIndustryClick}
          value={document.defaultMetadata.general.industry}
        />
      </div>
      <h3 className='text-center text-xl'>Templates</h3>
      <div className='flex-center w-full space-x-4'>
        <SelectField
          label='Select what ai template this applies to'
          options={aiTemplateIds}
          onClick={handleAiTemplateClick}
          value={document.defaultMetadata.templates.aiTemplateId}
        />
        <SelectField
          label='Select what embedded template this applies to'
          options={embeddedTemplateIds}
          onClick={handleEmbeddedTemplateClick}
          value={document.defaultMetadata.templates.embeddedTemplateId}
        />
      </div>
      <h3 className='text-center text-xl'>UI</h3>
      <div className='flex-center space-x-4'>
        <LabeledInput
          label='Title'
          id='name'
          type='text'
          value={document.defaultMetadata.ui.title}
          onChange={(e): void =>
            setDocument({
              ...document,
              defaultMetadata: {
                ...document.defaultMetadata,
                ui: { ...document.defaultMetadata.ui, title: e.target.value },
              },
            })
          }
          className='w-full'
        />
        <SelectField
          label='Select what embedded template this applies to'
          options={componentTypeCodes}
          onClick={handleComponentTypeClick}
          value={document.defaultMetadata.ui.componentType}
        />
      </div>
      <h3 className='text-center text-xl'>Text</h3>
      <LabeledTextArea
        label='Full Text'
        id='name'
        value={document.fullText}
        onChange={(e): void =>
          setDocument({ ...document, fullText: e.target.value })
        }
        className='h-96'
      />
      <LabeledInput
        label='Chunk Size'
        id='name'
        type='text'
        value={document.chunkSize}
        onChange={(e): void =>
          setDocument({ ...document, chunkSize: Number(e.target.value) })
        }
      />
      <LabeledInput
        label='Chunk Overlap'
        id='name'
        type='text'
        value={document.chunkOverlap}
        onChange={(e): void =>
          setDocument({ ...document, chunkOverlap: Number(e.target.value) })
        }
      />
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
