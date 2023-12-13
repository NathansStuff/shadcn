import { NextApiRequest, NextApiResponse } from 'next';

import {
  createEmbedTemplateHandler,
  getAllEmbedTemplatesHandler,
} from '@/backend/features/embedTemplate/embedTemplateController';
import { TryCatchMiddleware } from '@/middleware';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'GET') {
    const wrappedHandler = TryCatchMiddleware(getAllEmbedTemplatesHandler);
    return await wrappedHandler(req, res);
  } else if (req.method === 'POST') {
    const wrappedHandler = TryCatchMiddleware(createEmbedTemplateHandler);
    return await wrappedHandler(req, res);
  } else {
    return res.status(404).json({ message: 'Method not found' });
  }
}
