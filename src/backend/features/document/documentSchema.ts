import { Schema } from 'mongoose';

import {
  DocumentWithId,
  EAiInfoTemplate,
  EComponentType,
  ECountryCode,
  EEmbedTemplate,
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
      ai: {
        aiTemplate: {
          type: String,
          required: true,
          enum: EAiInfoTemplate,
        },
      },
      embedded: {
        embeddedTemplate: {
          type: String,
          required: true,
          enum: EEmbedTemplate,
        },
      },
      ui: {
        uiTitle: {
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

    defaultNamespace: { type: String, required: true },

    // Chunk info
    fullText: { type: String, required: true },
    chunkSize: { type: Number, required: true },
    chunkOverlap: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
