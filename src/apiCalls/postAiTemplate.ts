import { AiTemplate, AiTemplateWithId } from '@/types';

import { postRequest } from './fetch';

export async function postAiTemplate(
  template: AiTemplate
): Promise<AiTemplateWithId> {
  const res = await postRequest<AiTemplateWithId>('/api/aiTemplate', template);

  return res.data;
}
