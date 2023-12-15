import { deleteAiTemplate } from '@/apiCalls/aiTemplate/deleteAiTemplate';

import { toastHelper } from '../actionUtils';

export async function deleteAiTemplateAction(id: string): Promise<void> {
  const promises = deleteAiTemplate(id);

  toastHelper(promises, 'Ai Template', 'delete');

  try {
    await promises;
    window.location.href = `/aiTemplate`;
  } catch (err) {
    console.log(err);
  }
}
