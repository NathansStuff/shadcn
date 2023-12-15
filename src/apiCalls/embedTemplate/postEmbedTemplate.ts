import { EmbedTemplate, EmbedTemplateWithId } from '@/types';

import { postRequest } from '../fetch';

export async function postEmbedTemplate(
  template: EmbedTemplate
): Promise<EmbedTemplateWithId> {
  const res = await postRequest<EmbedTemplateWithId>(
    '/api/embedTemplate',
    template
  );

  return res.data;
}
