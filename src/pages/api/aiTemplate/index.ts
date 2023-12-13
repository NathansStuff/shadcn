import { NextApiRequest, NextApiResponse } from 'next';

import {
  createAiTemplateHandler,
  getAllAiTemplatesHandler,
} from '@/backend/features/aiTemplate/aiTemplateController';
import { TryCatchMiddleware } from '@/middleware';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'GET') {
    const wrappedHandler = TryCatchMiddleware(getAllAiTemplatesHandler);
    return await wrappedHandler(req, res);
  } else if (req.method === 'POST') {
    const wrappedHandler = TryCatchMiddleware(createAiTemplateHandler);
    return await wrappedHandler(req, res);
  } else {
    return res.status(404).json({ message: 'Method not found' });
  }
}
