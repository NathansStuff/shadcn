import React from 'react';
import Link from 'next/link';

import { AiTemplateWithId, EmbedTemplateWithId } from '@/types';

import { Button } from '../ui';

interface Props {
  templates: AiTemplateWithId[] | EmbedTemplateWithId[] | null;
  type: 'ai' | 'embed';
}

export function TemplatesList({ templates, type }: Props): JSX.Element {
  return (
    <>
      <div className='flex-center w-full py-4'>
        <Link href={`/${type}Template/new`}>
          <Button>Create New</Button>
        </Link>
      </div>
      <div className='flex flex-col space-y-4'>
        {templates?.map((template) => {
          return (
            <div
              key={template._id.toString()}
              className='flex justify-between space-x-4 rounded border  p-4 shadow'
            >
              <p className='mb-2 text-lg font-semibold'>{template.name}</p>
              <Link href={`/${type}Template/${template._id}`}>
                <Button>Edit</Button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TemplatesList;
