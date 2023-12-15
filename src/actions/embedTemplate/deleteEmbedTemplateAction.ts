import { deleteEmbedTemplate } from '@/apiCalls/embedTemplate/deleteEmbedTemplate';

import { toastHelper } from '../actionUtils';

export async function deleteEmbedTemplateAction(id: string): Promise<void> {
  const promises = deleteEmbedTemplate(id);

  toastHelper(promises, 'Embed Template', 'delete');

  try {
    await promises;
    window.location.href = `/embedTemplate`;
  } catch (err) {
    console.log(err);
  }
}
