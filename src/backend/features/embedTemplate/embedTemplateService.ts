import { EmbedTemplate, EmbedTemplateWithId } from '@/types';

import {
  createEmbedTemplate,
  deleteEmbedTemplateById,
  findAllEmbedTemplates,
  findEmbedTemplateById,
  updateEmbedTemplateById,
} from './embedTemplateDal';

// Get all EmbedTemplates
export async function getAllEmbedTemplates(): Promise<EmbedTemplateWithId[]> {
  const EmbedTemplates = await findAllEmbedTemplates();
  return EmbedTemplates;
}

// Get EmbedTemplate by id
export async function getEmbedTemplateById(
  id: string
): Promise<EmbedTemplateWithId | null> {
  const EmbedTemplate = await findEmbedTemplateById(id);
  return EmbedTemplate;
}

// Create EmbedTemplate
export async function createNewEmbedTemplate(
  EmbedTemplate: EmbedTemplate
): Promise<EmbedTemplateWithId> {
  const newEmbedTemplate = await createEmbedTemplate(EmbedTemplate);
  return newEmbedTemplate;
}

// Update EmbedTemplate
export async function updateEmbedTemplate(
  id: string,
  updatedData: Partial<EmbedTemplate>
): Promise<EmbedTemplateWithId | null> {
  const EmbedTemplate = await updateEmbedTemplateById(id, updatedData);
  return EmbedTemplate;
}

// Delete EmbedTemplate
export async function deleteEmbedTemplate(id: string): Promise<void | null> {
  const response = await deleteEmbedTemplateById(id);
  return response;
}
