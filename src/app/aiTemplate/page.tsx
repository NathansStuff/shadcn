import React from 'react';

import { getAllAiTemplates } from '@/apiCalls/aiTemplate/getAllAiTemplates';
import { PageContainer, TemplatesList } from '@/components';

async function AiTemplatePage(): Promise<JSX.Element> {
  const templates = await getAllAiTemplates();

  return (
    <PageContainer>
      <TemplatesList templates={templates} type='ai' />
    </PageContainer>
  );
}

export default AiTemplatePage;
