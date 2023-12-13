import { WithId } from 'mongodb';
import * as z from 'zod';

export const AiTemplate = z.object({
  name: z.string().nonempty(),
  template: z.string().nonempty(),
});

export type AiTemplate = z.infer<typeof AiTemplate>;
export type AiTemplateWithId = WithId<AiTemplate>;

export const PartialAiTemplate = AiTemplate.partial();
export type PartialAiTemplate = z.infer<typeof PartialAiTemplate>;
