import React from 'react';

import { getEmbedTemplate } from '@/apiCalls/embedTemplate/getEmbedTemplate';
import {
  EmbedTemplateForm,
  FlexCenterContainer,
  PageContainer,
} from '@/components';

type Props = {
  params: { id: string };
};

async function ExistingEmbedTemplatePage({
  params: { id },
}: Props): Promise<JSX.Element> {
  const template = await getEmbedTemplate(id);
  if (!template) {
    return <div>Template not found</div>;
  }
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
        <EmbedTemplateForm existingTemplate={template} />
      </FlexCenterContainer>
    </PageContainer>
  );
}

export default ExistingEmbedTemplatePage;
