import { mongoDBConnect } from '@/middleware';
import { AiTemplate, AiTemplateWithId } from '@/types';

import { AiTemplateModel } from './aiTemplateModel';

// Get all AiTemplate
export async function findAllAiTemplates(): Promise<AiTemplateWithId[]> {
  await mongoDBConnect();
  return await AiTemplateModel.find();
}

// Get AiTemplate by ID
export async function findAiTemplateById(
  id: string
): Promise<AiTemplateWithId | null> {
  await mongoDBConnect();
  return await AiTemplateModel.findById(id);
}

// Create a new AiTemplate
export async function createAiTemplate(
  data: AiTemplate
): Promise<AiTemplateWithId> {
  await mongoDBConnect();
  return await AiTemplateModel.create(data);
}

// Update AiTemplate by ID
export async function updateAiTemplateById(
  id: string,
  data: Partial<AiTemplateWithId>
): Promise<AiTemplateWithId | null> {
  await mongoDBConnect();
  return await AiTemplateModel.findByIdAndUpdate(id, data, {
    new: true,
  });
}

// Delete AiTemplate by ID
export async function deleteAiTemplateById(id: string): Promise<void | null> {
  await mongoDBConnect();
  return await AiTemplateModel.findByIdAndDelete(id);
}
