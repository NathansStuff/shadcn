import { Schema } from 'mongoose';

import { AiTemplateWithId } from '@/types';

export const AiTemplateSchema = new Schema<AiTemplateWithId>(
  {
    name: {
      type: String,
      required: true,
    },
    template: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
