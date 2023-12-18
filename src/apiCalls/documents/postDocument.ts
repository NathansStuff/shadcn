import { DocumentWithId, EmbedTemplate } from '@/types';

import { postRequest } from '../fetch';

export async function postDocument(
  template: EmbedTemplate
): Promise<DocumentWithId> {
  const res = await postRequest<DocumentWithId>('/api/documents', template);

  return res.data;
}
