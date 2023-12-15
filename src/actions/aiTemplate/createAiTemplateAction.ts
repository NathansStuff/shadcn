import { postAiTemplate } from '@/apiCalls/aiTemplate/postAiTemplate';
import { AiTemplate } from '@/types';

import { toastHelper } from '../actionUtils';

export async function createAiTemplateAction(template: AiTemplate): Promise<void> {
  const promises = postAiTemplate(template);

  toastHelper(promises, 'Ai Template', 'create');

  try {
    const newTemplate = await promises;
    window.location.href = `/aiTemplate/${newTemplate._id}`;
  } catch (err) {
    console.log(err);
  }
}
