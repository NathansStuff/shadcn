import { EmbedTemplateWithId } from '@/types';

import { updateRequest } from '../fetch';

export async function putEmbedTemplate(
  template: EmbedTemplateWithId
): Promise<EmbedTemplateWithId> {
  const res = await updateRequest<EmbedTemplateWithId>(
    `/api/embedTemplate/${template._id}`,
    template
  );

  return res.data;
}
