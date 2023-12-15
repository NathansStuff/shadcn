import { EmbedTemplateWithId } from '@/types';

import { deleteRequest } from '../fetch';

export async function deleteEmbedTemplate(id: string): Promise<void> {
  await deleteRequest<EmbedTemplateWithId>(`/api/embedTemplate/${id}`);

  return;
}
