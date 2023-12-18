import { postDocument } from '@/apiCalls/postDocument';
import { Document } from '@/types';

import { toastHelper } from '../actionUtils';

export async function createDocumentAction(document: Document): Promise<void> {
  const promises = postDocument(document);

  toastHelper(promises, 'Document', 'create');

  try {
    const newTemplate = await promises;
    window.location.href = `/documents/${newTemplate._id}`;
  } catch (err) {
    console.log(err);
  }
}
