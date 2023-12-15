import React from 'react';

import {
  AiTemplateForm,
  FlexCenterContainer,
  PageContainer,
} from '@/components';

function NewAiTemplatePage(): JSX.Element {
  return (
    <PageContainer>
      <FlexCenterContainer className='pb-20 pt-4'>
        <h3 className='text-center text-xl font-bold'>Ai Template</h3>
        <p className='text-center'>
          When a user asks a question, step 1 is to match the question against
          all the pieces of information the AI is trained on.
          <br />
          Given a chunk of text, we will want to contextualize it to give it a
          better match.
        </p>
        <AiTemplateForm />
      </FlexCenterContainer>
    </PageContainer>
  );
}

export default NewAiTemplatePage;
