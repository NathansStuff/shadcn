import toast from 'react-hot-toast';

import { postChunks } from '@/apiCalls/postChunk';
import { postDocument } from '@/apiCalls/postDocument';
import { Document } from '@/types';

export async function sendDocument(document: Document): Promise<void> {
  // Start both asynchronous operations concurrently
  const promises = Promise.all([
    postChunks(document.fullText),
    postDocument(document),
  ]);

  toast.promise(promises, {
    loading: 'Creating document...',
    success: 'Document created!',
    error: 'Error creating document',
  });

  const [chunks, savedDocument] = await promises;

  console.log(chunks);
  console.log(savedDocument);
}

// todo: toast notifications
// on success, wipe form
// cancel chunks
// save document
// forward to document page
// on document page, button for create new chunks
// on document page, button for edit document
// then show form for info
