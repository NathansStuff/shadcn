import { AiTemplateWithId } from '@/types';

import { deleteRequest } from '../fetch';

export async function deleteAiTemplate(id: string): Promise<void> {
  await deleteRequest<AiTemplateWithId>(`/api/aiTemplate/${id}`);
}
