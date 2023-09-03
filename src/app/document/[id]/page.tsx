import React from 'react';

import { getDocument } from '@/apiCalls/getDocument';
import { PageContainer } from '@/components';

type Props = {
  params: { id: string };
};

async function DocumentIdPage({ params: { id } }: Props): Promise<JSX.Element> {
  const { document, success } = await getDocument(id);
  if (!success) {
    return <div>Document not found</div>;
  }
  return <PageContainer>{document?.chunkOverlap}</PageContainer>;
}

export default DocumentIdPage;
