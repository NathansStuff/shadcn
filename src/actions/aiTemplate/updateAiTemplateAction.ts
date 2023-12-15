import { putAiTemplate } from '@/apiCalls/aiTemplate/putAiTemplate';
import { AiTemplateWithId } from '@/types';

import { toastHelper } from '../actionUtils';

export async function updateAiTemplateAction(
  template: AiTemplateWithId
): Promise<void> {
  const promises = putAiTemplate(template);

  toastHelper(promises, 'Ai Template', 'update');
}
