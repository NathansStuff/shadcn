import { NextApiRequest, NextApiResponse } from 'next';

import {
  deleteInfoByIdHandler,
  getInfoByIdHandler,
  updateInfoHandler,
} from '@/backend/features/info/infoController';
import { TryCatchMiddleware } from '@/middleware';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'PUT') {
    const wrappedHandler = TryCatchMiddleware(updateInfoHandler);
    return await wrappedHandler(req, res);
  } else if (req.method === 'GET') {
    const wrappedHandler = TryCatchMiddleware(getInfoByIdHandler);
    return await wrappedHandler(req, res);
  } else if (req.method === 'DELETE') {
    const wrappedHandler = TryCatchMiddleware(deleteInfoByIdHandler);
    return await wrappedHandler(req, res);
  } else {
    return res.status(404).json({ message: 'Method not found' });
  }
}
