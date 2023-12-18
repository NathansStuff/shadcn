import React from 'react';

import { DocumentForm, FlexCenterContainer, PageContainer } from '@/components';

function NewDocumentPage(): JSX.Element {
  return (
    <PageContainer>
      <FlexCenterContainer className='pb-20 pt-4'>
        <h3 className='text-center text-xl font-bold'>Document</h3>
        <p className='text-center'>
          A large chunk of information. This information about the document will
          impact what information gets stored, how it gets matched to the
          user&apos;s query and what the user sees in the UI when matched.
        </p>
        <DocumentForm />
      </FlexCenterContainer>
    </PageContainer>
  );
}

export default NewDocumentPage;
