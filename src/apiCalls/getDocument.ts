import { DocumentWithId } from '@/types';

import { getRequest } from '.';

export async function getDocument(id: string): Promise<DocumentWithId | null> {
  try {
    const response = await getRequest<DocumentWithId | null>(
      `http://localhost:3000/api/document/${id}`
    );
    const document = response.data;

    return document;
  } catch (error) {
    return null;
  }
}
