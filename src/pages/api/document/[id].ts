import { NextApiRequest, NextApiResponse } from 'next';

import {
  deleteDocumentByIdHandler,
  getDocumentByIdHandler,
  updateDocumentHandler,
} from '@/backend/features/document/documentController';
import { TryCatchMiddleware } from '@/middleware';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'PUT') {
    const wrappedHandler = TryCatchMiddleware(updateDocumentHandler);
    return await wrappedHandler(req, res);
  } else if (req.method === 'GET') {
    const wrappedHandler = TryCatchMiddleware(getDocumentByIdHandler);
    return await wrappedHandler(req, res);
  } else if (req.method === 'DELETE') {
    const wrappedHandler = TryCatchMiddleware(deleteDocumentByIdHandler);
    return await wrappedHandler(req, res);
  } else {
    return res.status(404).json({ message: 'Method not found' });
  }
}
