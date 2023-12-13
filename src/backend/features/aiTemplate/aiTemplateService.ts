import { AiTemplate, AiTemplateWithId } from '@/types';

import {
  createAiTemplate,
  deleteAiTemplateById,
  findAiTemplateById,
  findAllAiTemplates,
  updateAiTemplateById,
} from './aiTemplateDal';

// Get all AiTemplates
export async function getAllAiTemplates(): Promise<AiTemplateWithId[]> {
  const AiTemplates = await findAllAiTemplates();
  return AiTemplates;
}

// Get AiTemplate by id
export async function getAiTemplateById(
  id: string
): Promise<AiTemplateWithId | null> {
  const AiTemplate = await findAiTemplateById(id);
  return AiTemplate;
}

// Create AiTemplate
export async function createNewAiTemplate(
  AiTemplate: AiTemplate
): Promise<AiTemplateWithId> {
  const newAiTemplate = await createAiTemplate(AiTemplate);
  return newAiTemplate;
}

// Update AiTemplate
export async function updateAiTemplate(
  id: string,
  updatedData: Partial<AiTemplate>
): Promise<AiTemplateWithId | null> {
  const AiTemplate = await updateAiTemplateById(id, updatedData);
  return AiTemplate;
}

// Delete AiTemplate
export async function deleteAiTemplate(id: string): Promise<void | null> {
  const response = await deleteAiTemplateById(id);
  return response;
}
