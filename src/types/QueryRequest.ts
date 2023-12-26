import * as z from 'zod';

import { ECountryCode, EIndustry, EStateCode } from '.';

export const QueryRequest = z.object({
  text: z.string().nonempty(),
  countryCode: z.nativeEnum(ECountryCode),
  stateCode: z.nativeEnum(EStateCode),
  industry: z.nativeEnum(EIndustry),
});

export type QueryRequest = z.infer<typeof QueryRequest>;
