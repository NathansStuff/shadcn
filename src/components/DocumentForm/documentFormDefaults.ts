// @script ignore-folder
import { DEFAULT_CHUNK_OVERLAP, DEFAULT_CHUNK_SIZE } from '@/constants';
import {
  Document,
  EAiInfoTemplate,
  EComponentType,
  ECountryCode,
  EEmbedTemplate,
  EIndustry,
  ENamespace,
  EStateCode,
} from '@/types';

export const documentFormDefaults: Document = {
  documentName: '',
  infoIds: [],
  defaultMetadata: {
    general: {
      sourceName: '',
      sourceLink: '',
      countryCode: ECountryCode.AUS,
      stateCode: EStateCode.NSW,
      industry: EIndustry.CONSTRUCTION,
    },
    ai: {
      aiTemplate: EAiInfoTemplate.STANDARD_V1,
    },
    embedded: {
      embeddedTemplate: EEmbedTemplate.LAW_REFERENCE,
    },
    ui: {
      uiTitle: '',
      componentType: EComponentType.PASSAGE,
    },
  },
  defaultNamespace: ENamespace.CONSTRUCTION_GPT,

  fullText: '',
  chunkSize: DEFAULT_CHUNK_SIZE,
  chunkOverlap: DEFAULT_CHUNK_OVERLAP,
};
