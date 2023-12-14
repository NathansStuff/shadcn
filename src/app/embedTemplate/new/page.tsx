
import React from 'react';

import {
  EmbedTemplateForm,
  FlexCenterContainer,
  PageContainer,
} from '@/components';

function NewEmbedTemplatePage(): JSX.Element {
  return (
    <PageContainer>
      <FlexCenterContainer className='pb-20 pt-4'>
        <h3 className='text-center text-xl font-bold'>Embed Template</h3>
        <p className='text-center'>
          When a user asks a question, step 1 is to match the question against
          all the pieces of information the AI is trained on.
          <br />
          Given a chunk of text, we will want to contextualize it to give it a
          better match.
        </p>
        <EmbedTemplateForm />
      </FlexCenterContainer>
    </PageContainer>
  );
}

export default NewEmbedTemplatePage;
