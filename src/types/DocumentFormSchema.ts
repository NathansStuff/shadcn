import * as z from 'zod';

import {
  EAiInfoTemplate,
  EComponentType,
  ECountryCode,
  EEmbedTemplate,
  EIndustry,
} from '@/types/enums';
import { ENamespace } from '@/types/enums/ENamespace';
import { EStateCode } from '@/types/enums/EStateCode';

export const DocumentFormSchema = z.object({
  documentName: z.string().nonempty(),

  defaultMetadata: z.object({
    general: z.object({
      sourceName: z.string().nonempty(), // eg full law name
      sourceLink: z.string().nonempty(), // link to source of data - full link
      countryCode: z.nativeEnum(ECountryCode),
      stateCode: z.nativeEnum(EStateCode),
      industry: z.nativeEnum(EIndustry),
    }),
    ai: z.object({
      aiTemplate: z.nativeEnum(EAiInfoTemplate), // eg Standard - what template was used to take text => aiText
    }),
    embedded: z.object({
      embeddedTemplate: z.nativeEnum(EEmbedTemplate), // eg LawReference => Used for building the vector text from the chunkedText
    }),
    ui: z.object({
      uiTitle: z.string().nonempty(), // title, user facing
      componentType: z.nativeEnum(EComponentType), // eg Passage => Used for deciding UI component
    }),
  }),

  defaultNamespace: z.nativeEnum(ENamespace),

  // Chunk info
  fullText: z.string().nonempty(),
  chunkSize: z.number(),
  chunkOverlap: z.number(),
});

export type DocumentFormSchema = z.infer<typeof DocumentFormSchema>;
