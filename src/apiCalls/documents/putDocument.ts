import { DocumentWithId } from '@/types';

import { updateRequest } from '../fetch';

export async function putDocument(
  template: DocumentWithId
): Promise<DocumentWithId> {
  const res = await updateRequest<DocumentWithId>(
    `/api/document/${template._id}`,
    template
  );

  return res.data;
}
