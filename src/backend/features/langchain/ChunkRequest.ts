import * as z from 'zod';

export const ChunkRequest = z.object({
  text: z.string().nonempty(),
  chunkSize: z.number().int().positive().optional(),
  chunkOverlap: z.number().int().positive().optional(),
});

export type ChunkRequest = z.infer<typeof ChunkRequest>;
