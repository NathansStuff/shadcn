import React from 'react';

import { getAllDocuments } from '@/apiCalls/documents/getAllDocuments';
import { DocumentsList, PageContainer } from '@/components';

async function EmbedTemplatePage(): Promise<JSX.Element> {
  const documents = await getAllDocuments();

  return (
    <PageContainer>
      <DocumentsList templates={documents} />
    </PageContainer>
  );
}

export default EmbedTemplatePage;
