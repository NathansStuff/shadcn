import { BASE_URL } from '@/constants';
import { AiTemplateWithId } from '@/types';

import { getRequest } from '..';

export async function getAiTemplate(
  id: string
): Promise<AiTemplateWithId | null> {
  try {
    const response = await getRequest<AiTemplateWithId | null>(
      `${BASE_URL}/api/aiTemplate/${id}`
    );

    return response.data;
  } catch (error) {
    return null;
  }
}
