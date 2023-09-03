import * as z from 'zod';

export const ParamsWithId = z.object({
  id: z.string().nonempty(),
});

export type ParamsWithId = z.infer<typeof ParamsWithId>;
