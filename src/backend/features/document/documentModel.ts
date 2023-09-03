import { model, models } from 'mongoose';

import { DocumentWithId } from '@/types';

import { DocumentSchema } from './documentSchema';

export const DocumentModel =
  models.DocumentModel ||
  model<DocumentWithId>('DocumentModel', DocumentSchema);
