import { NextApiRequest, NextApiResponse } from 'next';

import { ChunkRequest } from './ChunkRequest';
import { chunkData, embedOpenaiQuery } from './langchainService';

export async function langchainChunkDataHandler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { text, chunkSize, chunkOverlap } = ChunkRequest.parse(req.body);
  const chunks = await chunkData(text, chunkSize, chunkOverlap);
  res.status(200).json(chunks);
}

export async function langchainEmbedOpenaiQueryHandler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const chunks = await embedOpenaiQuery(req.body.text);
  res.status(200).json(chunks);
}
