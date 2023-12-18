import { BASE_URL } from '@/constants';
import { DocumentWithId } from '@/types';

import { getRequest } from '../fetch';

export async function getDocument(id: string): Promise<DocumentWithId | null> {
  try {
    const response = await getRequest<DocumentWithId | null>(
      `${BASE_URL}/api/document/${id}`
    );

    return response.data;
  } catch (error) {
    return null;
  }
}
