import { Schema } from 'mongoose';

import { EmbedTemplateWithId } from '@/types';

export const EmbedTemplateSchema = new Schema<EmbedTemplateWithId>(
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
