'use client';

import React from 'react';

import { sendDocument } from '@/actions';
import { Document } from '@/types';

import { DocumentForm } from '.';

function CreateDocumentForm(): JSX.Element {
  function onSubmit(values: Document): void {
    sendDocument(values);
  }

  return <DocumentForm handleSubmit={onSubmit} />;
}

export default CreateDocumentForm;
