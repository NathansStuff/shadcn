import { NextApiRequest, NextApiResponse } from 'next';

import { BadRequestError } from '@/exceptions/BadRequestError';
import {
  EmbedTemplate,
  EmbedTemplateWithId,
  ParamsWithId,
  PartialEmbedTemplate,
} from '@/types';

import {
  createNewEmbedTemplate,
  deleteEmbedTemplate,
  getAllEmbedTemplates,
  getEmbedTemplateById,
  updateEmbedTemplate,
} from './embedTemplateService';

// Get all EmbedTemplates
export async function getAllEmbedTemplatesHandler(
  req: NextApiRequest,
  res: NextApiResponse<EmbedTemplateWithId[]>
): Promise<void> {
  const EmbedTemplates = await getAllEmbedTemplates();
  res.status(200).json(EmbedTemplates);
}

// Get EmbedTemplate by id
export async function getEmbedTemplateByIdHandler(
  req: NextApiRequest,
  res: NextApiResponse<EmbedTemplateWithId>
): Promise<void> {
  const safeId = ParamsWithId.parse(req.query);
  const response = await getEmbedTemplateById(safeId.id);
  if (!response) throw new BadRequestError('EmbedTemplate not found');

  res.status(200).json(response);
}

// Create EmbedTemplate
export async function createEmbedTemplateHandler(
  req: NextApiRequest,
  res: NextApiResponse<EmbedTemplateWithId>
): Promise<void> {
  const safeEmbedTemplateData = EmbedTemplate.parse(req.body);
  const newEmbedTemplate = await createNewEmbedTemplate(safeEmbedTemplateData);
  res.status(201).json(newEmbedTemplate);
}

// Update EmbedTemplate
export async function updateEmbedTemplateHandler(
  req: NextApiRequest,
  res: NextApiResponse<EmbedTemplateWithId>
): Promise<void> {
  const safeEmbedTemplateData = PartialEmbedTemplate.parse(req.body);

  const safeId = ParamsWithId.parse(req.query);

  const result = await updateEmbedTemplate(safeId.id, safeEmbedTemplateData);
  if (result) {
    res.status(200).json(result);
  } else {
    throw new BadRequestError('EmbedTemplate not found');
  }
}

// Delete EmbedTemplate
export async function deleteEmbedTemplateByIdHandler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
): Promise<void> {
  const safeId = ParamsWithId.parse(req.query);
  const response = await deleteEmbedTemplate(safeId.id);
  if (response === null) throw new BadRequestError('EmbedTemplate not found');
  const message = `EmbedTemplate with id ${safeId.id} deleted`;
  res.status(204).json({ message });
}
