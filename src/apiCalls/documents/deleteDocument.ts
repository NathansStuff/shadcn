import { DocumentWithId } from '@/types';

import { deleteRequest } from '../fetch';

export async function deleteDocument(id: string): Promise<void> {
  await deleteRequest<DocumentWithId>(`/api/document/${id}`);

  return;
}
