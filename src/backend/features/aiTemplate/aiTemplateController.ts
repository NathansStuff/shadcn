import { NextApiRequest, NextApiResponse } from 'next';

import { BadRequestError } from '@/exceptions/BadRequestError';
import {
  AiTemplate,
  AiTemplateWithId,
  ParamsWithId,
  PartialAiTemplate,
} from '@/types';

import {
  createNewAiTemplate,
  deleteAiTemplate,
  getAiTemplateById,
  getAllAiTemplates,
  updateAiTemplate,
} from './aiTemplateService';

// Get all AiTemplates
export async function getAllAiTemplatesHandler(
  req: NextApiRequest,
  res: NextApiResponse<AiTemplateWithId[]>
): Promise<void> {
  const AiTemplates = await getAllAiTemplates();
  res.status(200).json(AiTemplates);
}

// Get AiTemplate by id
export async function getAiTemplateByIdHandler(
  req: NextApiRequest,
  res: NextApiResponse<AiTemplateWithId>
): Promise<void> {
  const safeId = ParamsWithId.parse(req.query);
  const response = await getAiTemplateById(safeId.id);
  if (!response) throw new BadRequestError('AiTemplate not found');

  res.status(200).json(response);
}

// Create AiTemplate
export async function createAiTemplateHandler(
  req: NextApiRequest,
  res: NextApiResponse<AiTemplateWithId>
): Promise<void> {
  const safeAiTemplateData = AiTemplate.parse(req.body);
  const newAiTemplate = await createNewAiTemplate(safeAiTemplateData);
  res.status(201).json(newAiTemplate);
}

// Update AiTemplate
export async function updateAiTemplateHandler(
  req: NextApiRequest,
  res: NextApiResponse<AiTemplateWithId>
): Promise<void> {
  const safeAiTemplateData = PartialAiTemplate.parse(req.body);

  const safeId = ParamsWithId.parse(req.query);

  const result = await updateAiTemplate(safeId.id, safeAiTemplateData);
  if (result) {
    res.status(200).json(result);
  } else {
    throw new BadRequestError('AiTemplate not found');
  }
}

// Delete AiTemplate
export async function deleteAiTemplateByIdHandler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
): Promise<void> {
  const safeId = ParamsWithId.parse(req.query);
  const response = await deleteAiTemplate(safeId.id);
  if (response === null) throw new BadRequestError('AiTemplate not found');
  const message = `AiTemplate with id ${safeId.id} deleted`;
  res.status(204).json({ message });
}
