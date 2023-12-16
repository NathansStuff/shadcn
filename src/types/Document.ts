import { WithId } from 'mongodb';
import * as z from 'zod';

import { DEFAULT_CHUNK_OVERLAP, DEFAULT_CHUNK_SIZE } from '@/constants';
import { EComponentType, ECountryCode, EIndustry } from '@/types/enums';
import { EStateCode } from '@/types/enums/EStateCode';

export const Document = z.object({
  documentName: z.string().nonempty(),
  defaultMetadata: z.object({
    general: z.object({
      sourceName: z.string().nonempty(), // eg full law name
      sourceLink: z.string().nonempty(), // link to source of data - full link
      countryCode: z.nativeEnum(ECountryCode),
      stateCode: z.nativeEnum(EStateCode),
      industry: z.nativeEnum(EIndustry),
    }),
    templates: z.object({
      aiTemplateId: z.string().nonempty(), // eg Standard - what template was used to take text => aiText
      embeddedTemplateId: z.string().nonempty(), // eg LawReference => Used for building the vector text from the chunkedText
    }),
    ui: z.object({
      title: z.string().nonempty(), // title, user facing
      componentType: z.nativeEnum(EComponentType), // eg Passage => Used for deciding UI component
    }),
  }),
  // Chunk info
  fullText: z.string().nonempty(),
  chunkSize: z.number().default(DEFAULT_CHUNK_SIZE),
  chunkOverlap: z.number().default(DEFAULT_CHUNK_OVERLAP),
  infoIds: z.array(z.string()).default([]),
});

export type Document = z.infer<typeof Document>;
export type DocumentWithId = WithId<Document>;

export const PartialDocument = Document.partial();
export type PartialDocument = z.infer<typeof PartialDocument>;
