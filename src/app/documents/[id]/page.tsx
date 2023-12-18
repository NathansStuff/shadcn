import React from 'react';

import { getDocument } from '@/apiCalls/getDocument';
import { DocumentForm, FlexCenterContainer, PageContainer } from '@/components';

type Props = {
  params: { id: string };
};

async function ExistingDocumentPage({
  params: { id },
}: Props): Promise<JSX.Element> {
  const document = await getDocument(id);
  if (!document) {
    return <div>Template not found</div>;
  }

  return (
    <PageContainer>
      <FlexCenterContainer className='pb-20 pt-4'>
        <h3 className='text-center text-xl font-bold'>Document</h3>

        <DocumentForm existingTemplate={document} />
      </FlexCenterContainer>
    </PageContainer>
  );
}

export default ExistingDocumentPage;
