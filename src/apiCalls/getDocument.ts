import { Document } from '@/types';

import { getRequest } from '.';

export async function getDocument(
  id: string
): Promise<{ document: Document | null; success: boolean }> {
  try {
    const response = await getRequest<Document | null>(
      `http://localhost:3000/api/document/${id}`
    );
    const document = response.data;

    const success = Document.safeParse(document).success;

    return { document, success };
  } catch (error) {
    return { document: null, success: false };
  }
}
