import { NextApiRequest, NextApiResponse } from 'next';

import { BadRequestError } from '@/exceptions/BadRequestError';
import {
  Document,
  DocumentWithId,
  ParamsWithId,
  PartialDocument,
} from '@/types';

import {
  createNewDocument,
  deleteDocument,
  getAllDocuments,
  getDocumentById,
  updateDocument,
} from './documentService';

// Get all Documents
export async function getAllDocumentsHandler(
  req: NextApiRequest,
  res: NextApiResponse<DocumentWithId[]>
): Promise<void> {
  const Documents = await getAllDocuments();
  res.status(200).json(Documents);
}

// Get Document by id
export async function getDocumentByIdHandler(
  req: NextApiRequest,
  res: NextApiResponse<DocumentWithId>
): Promise<void> {
  const safeId = ParamsWithId.parse(req.query);
  const response = await getDocumentById(safeId.id);
  if (!response) throw new BadRequestError('Document not found');

  res.status(200).json(response);
}

// Create Document
export async function createDocumentHandler(
  req: NextApiRequest,
  res: NextApiResponse<DocumentWithId>
): Promise<void> {
  const safeDocumentData = Document.parse(req.body);
  const newDocument = await createNewDocument(safeDocumentData);
  res.status(201).json(newDocument);
}

// Update Document
export async function updateDocumentHandler(
  req: NextApiRequest,
  res: NextApiResponse<DocumentWithId>
): Promise<void> {
  const safeDocumentData = PartialDocument.parse(req.body);

  const safeId = ParamsWithId.parse(req.query);

  const result = await updateDocument(safeId.id, safeDocumentData);
  if (result) {
    res.status(200).json(result);
  } else {
    throw new BadRequestError('Document not found');
  }
}

// Delete Document
export async function deleteDocumentByIdHandler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
): Promise<void> {
  const safeId = ParamsWithId.parse(req.query);
  const response = await deleteDocument(safeId.id);
  if (response === null) throw new BadRequestError('Document not found');
  const message = `Document with id ${safeId.id} deleted`;
  res.status(204).json({ message });
}

// // Get Document and all its Info
// export async function getInfosByDocumentIdHandler(
//   req: NextApiRequest,
//   res: NextApiResponse<DocumentWithInfoIds | null>
// ): Promise<void> {
//   const safeId = ParamsWithId.parse(req.params);
//   const response = await getInfosByDocumentId(safeId.id);
//   if (!response) throw new BadRequestError('Document not found');

//   res.status(200).json(response);
// }
