import { AiTemplateWithId } from '@/types';

import { getRequest } from '.';

export async function getAiTemplate(
  id: string
): Promise<AiTemplateWithId | null> {
  try {
    const response = await getRequest<AiTemplateWithId | null>(
      `http://localhost:3000/api/aiTemplate/${id}`
    );

    return response.data;
  } catch (error) {
    return null;
  }
}
