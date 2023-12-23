import { WithId } from 'mongodb';
import * as z from 'zod';

export const Info = z.object({
  documentId: z.string().nonempty(),
  text: z.string().nonempty(),
  vectors: z.array(z.number()),
});

export type Info = z.infer<typeof Info>;
export type InfoWithId = WithId<Info>;

export const InfoRequest = z.object({
  documentId: z.string().nonempty(),
  text: z.string().nonempty(),
  // Vectors are not required because they are generated by the backend
});

export type InfoRequest = z.infer<typeof InfoRequest>;

export const PartialInfoRequest = Info.partial();
export type PartialInfoRequest = z.infer<typeof PartialInfoRequest>;
