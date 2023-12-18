import { BASE_URL } from '@/constants';
import { EmbedTemplateWithId } from '@/types';

import { getRequest } from '../fetch';

export async function getDocument(
  id: string
): Promise<EmbedTemplateWithId | null> {
  try {
    const response = await getRequest<EmbedTemplateWithId | null>(
      `${BASE_URL}/api/embedTemplate/${id}`
    );

    return response.data;
  } catch (error) {
    return null;
  }
}
