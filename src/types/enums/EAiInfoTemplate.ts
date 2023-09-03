import { ISelectOption } from "..";

export enum EAiInfoTemplate {
    STANDARD_V1 = 'STANDARD_V1',
}
export const aiInfoTemplateCodes: ISelectOption[] = [
  {
    name: 'Standard V1',
    value: EAiInfoTemplate.STANDARD_V1,
  },
];
