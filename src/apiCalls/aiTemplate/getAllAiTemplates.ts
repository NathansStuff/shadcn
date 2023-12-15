import { BASE_URL } from '@/constants';
import { AiTemplateWithId } from '@/types';

import { getRequest } from '..';

export async function getAllAiTemplates(): Promise<AiTemplateWithId[] | null> {
  try {
    const response = await getRequest<AiTemplateWithId[] | null>(
      `${BASE_URL}/api/aiTemplate`
    );

    return response.data;
  } catch (error) {
    return null;
  }
}
