import { Schema } from 'mongoose';

import {
  DocumentWithId,
  EComponentType,
  ECountryCode,
  EIndustry,
  EStateCode,
} from '@/types';

export const DocumentSchema = new Schema<DocumentWithId>(
  {
    documentName: { type: String, required: true },
    infoIds: { type: [String], default: [] },

    // Default values for new info
    defaultMetadata: {
      general: {
        sourceName: {
          type: String,
          required: true,
        },
        sourceLink: {
          type: String,
          required: true,
        },
        countryCode: {
          type: String,
          required: true,
          enum: ECountryCode,
        },
        stateCode: {
          type: String,
          required: true,
          enum: EStateCode,
        },
        industry: {
          type: String,
          required: true,
          enum: EIndustry,
        },
      },
      templates: {
        aiTemplateId: {
          type: String,
          required: true,
        },
        embeddedTemplateId: {
          type: String,
          required: true,
        },
      },
      ui: {
        title: {
          type: String,
          required: true,
        },
        componentType: {
          type: String,
          required: true,
          enum: EComponentType,
        },
      },
    },

    // Chunk info
    fullText: { type: String, required: true },
    chunkSize: { type: Number, required: true },
    chunkOverlap: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
