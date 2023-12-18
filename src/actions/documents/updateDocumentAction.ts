import { putDocument } from '@/apiCalls/documents/putDocument';
import { DocumentWithId } from '@/types';

import { toastHelper } from '../actionUtils';

export async function updateDocumentAction(
  template: DocumentWithId
): Promise<void> {
  const promises = putDocument(template);

  toastHelper(promises, 'Document', 'update');
}
