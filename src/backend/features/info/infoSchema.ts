import { Schema } from 'mongoose';

import { InfoWithId } from '@/types/Info';

export const InfoSchema = new Schema<InfoWithId>(
  {
    text: {
      type: String,
      required: true,
    },
    vectors: {
      type: [Number],
      required: true,
    },
    documentId: {
      type: String,
      required: true,
    },
    countryCode: {
      type: String,
      required: true,
    },
    stateCode: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
