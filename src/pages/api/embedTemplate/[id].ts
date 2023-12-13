import { NextApiRequest, NextApiResponse } from 'next';

import {
  deleteEmbedTemplateByIdHandler,
  getEmbedTemplateByIdHandler,
  updateEmbedTemplateHandler,
} from '@/backend/features/embedTemplate/embedTemplateController';
import { TryCatchMiddleware } from '@/middleware';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'PUT') {
    const wrappedHandler = TryCatchMiddleware(updateEmbedTemplateHandler);
    return await wrappedHandler(req, res);
  } else if (req.method === 'GET') {
    const wrappedHandler = TryCatchMiddleware(getEmbedTemplateByIdHandler);
    return await wrappedHandler(req, res);
  } else if (req.method === 'DELETE') {
    const wrappedHandler = TryCatchMiddleware(deleteEmbedTemplateByIdHandler);
    return await wrappedHandler(req, res);
  } else {
    return res.status(404).json({ message: 'Method not found' });
  }
}
