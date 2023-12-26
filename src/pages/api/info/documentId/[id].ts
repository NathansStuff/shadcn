import { NextApiRequest, NextApiResponse } from 'next';

import { getInfoByDocumentIdHandler } from '@/backend/features/info/infoController';
import { TryCatchMiddleware } from '@/middleware';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'GET') {
    const wrappedHandler = TryCatchMiddleware(getInfoByDocumentIdHandler);
    return await wrappedHandler(req, res);
  } else {
    return res.status(404).json({ message: 'Method not found' });
  }
}
