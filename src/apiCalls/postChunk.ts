import { Chunk } from '@/types/Chunk';

import { postRequest } from './fetch';

export async function postChunks(text: string): Promise<Chunk[]> {
  const products = await postRequest<Chunk[]>('/api/langchain/chunk', { text });

  return products.data;
}
