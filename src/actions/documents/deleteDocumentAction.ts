import { deleteDocument } from '@/apiCalls/documents/deleteDocument';

import { toastHelper } from '../actionUtils';

export async function deleteDocumentAction(id: string): Promise<void> {
  const promises = deleteDocument(id);

  toastHelper(promises, 'Document', 'delete');

  try {
    await promises;
    window.location.href = `/documents`;
  } catch (err) {
    console.log(err);
  }
}
