import React from 'react';

import { getAllEmbedTemplates } from '@/apiCalls/embedTemplate/getAllEmbedTemplates';
import { PageContainer, TemplatesList } from '@/components';

async function EmbedTemplatePage(): Promise<JSX.Element> {
  const templates = await getAllEmbedTemplates();

  return (
    <PageContainer>
      <TemplatesList templates={templates} type='embed' />
    </PageContainer>
  );
}

export default EmbedTemplatePage;
