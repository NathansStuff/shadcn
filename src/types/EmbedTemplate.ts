import { WithId } from 'mongodb';
import * as z from 'zod';

export const EmbedTemplate = z.object({
  name: z.string().nonempty(),
  template: z.string().nonempty(),
});

export type EmbedTemplate = z.infer<typeof EmbedTemplate>;
export type EmbedTemplateWithId = WithId<EmbedTemplate>;

export const PartialEmbedTemplate = EmbedTemplate.partial();
export type PartialEmbedTemplate = z.infer<typeof PartialEmbedTemplate>;
