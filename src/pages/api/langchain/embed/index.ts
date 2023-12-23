import { NextApiRequest, NextApiResponse } from 'next';

import { langchainEmbedOpenaiQueryHandler } from '@/backend/features/langchain/langchainController';
import { TryCatchMiddleware } from '@/middleware';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'POST') {
    const wrappedHandler = TryCatchMiddleware(langchainEmbedOpenaiQueryHandler);
    return await wrappedHandler(req, res);
  } else {
    return res.status(404).json({ message: 'Method not found' });
  }
}
