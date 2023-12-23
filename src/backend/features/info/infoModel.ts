import { model, models } from 'mongoose';

import { InfoWithId } from '@/types';

import { InfoSchema } from './infoSchema';

export const InfoModel =
  models.InfoModel || model<InfoWithId>('InfoModel', InfoSchema);
