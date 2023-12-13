import { model, models } from 'mongoose';

import { EmbedTemplateWithId } from '@/types';

import { EmbedTemplateSchema } from './embedTemplateSchema';

export const EmbedTemplateModel =
  models.EmbedTemplateModel ||
  model<EmbedTemplateWithId>('EmbedTemplateModel', EmbedTemplateSchema);
