import { Document, DocumentWithId } from '@/types';

import { postRequest } from './fetch';

export async function postDocument(
  document: Document
): Promise<DocumentWithId> {
  const products = await postRequest<DocumentWithId>('/api/document', document);

  return products.data;
}
