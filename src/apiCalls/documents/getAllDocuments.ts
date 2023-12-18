import { BASE_URL } from '@/constants';
import { DocumentWithId } from '@/types';

import { getRequest } from '../fetch';

export async function getAllDocuments(): Promise<DocumentWithId[] | null> {
  try {
    const response = await getRequest<DocumentWithId[] | null>(
      `${BASE_URL}/api/documents`
    );

    return response.data;
  } catch (error) {
    return null;
  }
}
