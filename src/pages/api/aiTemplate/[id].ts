import { NextApiRequest, NextApiResponse } from 'next';

import {
  deleteAiTemplateByIdHandler,
  getAiTemplateByIdHandler,
  updateAiTemplateHandler,
} from '@/backend/features/aiTemplate/aiTemplateController';
import { TryCatchMiddleware } from '@/middleware';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'PUT') {
    const wrappedHandler = TryCatchMiddleware(updateAiTemplateHandler);
    return await wrappedHandler(req, res);
  } else if (req.method === 'GET') {
    const wrappedHandler = TryCatchMiddleware(getAiTemplateByIdHandler);
    return await wrappedHandler(req, res);
  } else if (req.method === 'DELETE') {
    const wrappedHandler = TryCatchMiddleware(deleteAiTemplateByIdHandler);
    return await wrappedHandler(req, res);
  } else {
    return res.status(404).json({ message: 'Method not found' });
  }
}
