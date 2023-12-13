import { model, models } from 'mongoose';

import { AiTemplateWithId } from '@/types';

import { AiTemplateSchema } from './aiTemplateSchema';

export const AiTemplateModel =
  models.AiTemplateModel ||
  model<AiTemplateWithId>('AiTemplateModel', AiTemplateSchema);
