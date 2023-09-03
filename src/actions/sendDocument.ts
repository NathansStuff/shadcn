import { postChunks } from '@/apiCalls/postChunk';
import { DocumentFormSchema } from '@/types';

export async function sendDocument(
  document: DocumentFormSchema
): Promise<void> {
  console.log('s');
  const chunks = await postChunks(document.fullText);

  console.log(chunks);
}
