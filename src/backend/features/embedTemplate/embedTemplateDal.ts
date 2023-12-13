import { mongoDBConnect } from '@/middleware';
import { EmbedTemplate, EmbedTemplateWithId } from '@/types';

import { EmbedTemplateModel } from './embedTemplateModel';

// Get all EmbedTemplate
export async function findAllEmbedTemplates(): Promise<EmbedTemplateWithId[]> {
  await mongoDBConnect();
  return await EmbedTemplateModel.find();
}

// Get EmbedTemplate by ID
export async function findEmbedTemplateById(
  id: string
): Promise<EmbedTemplateWithId | null> {
  await mongoDBConnect();
  return await EmbedTemplateModel.findById(id);
}

// Create a new EmbedTemplate
export async function createEmbedTemplate(
  data: EmbedTemplate
): Promise<EmbedTemplateWithId> {
  await mongoDBConnect();
  return await EmbedTemplateModel.create(data);
}

// Update EmbedTemplate by ID
export async function updateEmbedTemplateById(
  id: string,
  data: Partial<EmbedTemplateWithId>
): Promise<EmbedTemplateWithId | null> {
  await mongoDBConnect();
  return await EmbedTemplateModel.findByIdAndUpdate(id, data, {
    new: true,
  });
}

// Delete EmbedTemplate by ID
export async function deleteEmbedTemplateById(id: string): Promise<void | null> {
  await mongoDBConnect();
  return await EmbedTemplateModel.findByIdAndDelete(id);
}
