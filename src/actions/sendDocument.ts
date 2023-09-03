import { postChunks } from '@/apiCalls/postChunk';
import { postDocument } from '@/apiCalls/postDocument';
import { Document } from '@/types';

export async function sendDocument(document: Document): Promise<void> {
  // Start both asynchronous operations concurrently
  const [chunks, savedDocument] = await Promise.all([
    postChunks(document.fullText),
    postDocument(document),
  ]);

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
