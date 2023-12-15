import { AiTemplateWithId } from '@/types';

import { updateRequest } from './fetch';

export async function putAiTemplate(
  template: AiTemplateWithId
): Promise<AiTemplateWithId> {
  const res = await updateRequest<AiTemplateWithId>(
    `/api/aiTemplate/${template._id}`,
    template
  );

  return res.data;
}
