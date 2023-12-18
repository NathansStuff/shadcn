import React from 'react';
import Link from 'next/link';

import { DocumentWithId } from '@/types';

import { Button } from '../ui';

interface Props {
  templates: DocumentWithId[] | null;
}

export function DocumentsList({ templates }: Props): JSX.Element {
  return (
    <>
      <div className='flex-center w-full py-4'>
        <Link href={`/documents/new`}>
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
              <p className='mb-2 text-lg font-semibold'>
                {template.defaultMetadata.ui.title}
              </p>
              <Link href={`/documents/${template._id}`}>
                <Button>Edit</Button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DocumentsList;
