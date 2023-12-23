import { NextApiRequest, NextApiResponse } from 'next';

import {
  createInfoHandler,
  getAllInfosHandler,
} from '@/backend/features/info/infoController';
import { TryCatchMiddleware } from '@/middleware';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'GET') {
    const wrappedHandler = TryCatchMiddleware(getAllInfosHandler);
    return await wrappedHandler(req, res);
  } else if (req.method === 'POST') {
    const wrappedHandler = TryCatchMiddleware(createInfoHandler);
    return await wrappedHandler(req, res);
  } else {
    return res.status(404).json({ message: 'Method not found' });
  }
}
