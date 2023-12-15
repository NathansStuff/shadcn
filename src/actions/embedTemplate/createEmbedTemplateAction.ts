import { postEmbedTemplate } from '@/apiCalls/embedTemplate/postEmbedTemplate';
import { EmbedTemplate } from '@/types';

import { toastHelper } from '../actionUtils';

export async function createEmbedTemplateAction(
  template: EmbedTemplate
): Promise<void> {
  const promises = postEmbedTemplate(template);

  toastHelper(promises, 'Embed Template', 'create');

  try {
    const newTemplate = await promises;
    window.location.href = `/embedTemplate/${newTemplate._id}`;
  } catch (err) {
    console.log(err);
  }
}
