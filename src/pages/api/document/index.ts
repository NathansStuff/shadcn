import { NextApiRequest, NextApiResponse } from 'next';

import {
  createDocumentHandler,
  getAllDocumentsHandler,
} from '@/backend/features/document/documentController';
import { TryCatchMiddleware } from '@/middleware';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'GET') {
    const wrappedHandler = TryCatchMiddleware(getAllDocumentsHandler);
    return await wrappedHandler(req, res);
  } else if (req.method === 'POST') {
    const wrappedHandler = TryCatchMiddleware(createDocumentHandler);
    return await wrappedHandler(req, res);
  } else {
    return res.status(404).json({ message: 'Method not found' });
  }
}
