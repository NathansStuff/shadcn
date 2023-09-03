import { ISelectOption } from '../ISelectOption';

export enum ENamespace {
  CONSTRUCTION_GPT = 'CONSTRUCTION_GPT',
}

export const namespaceCodes: ISelectOption[] = [
  {
    name: 'Construction GPT',
    value: ENamespace.CONSTRUCTION_GPT,
  },
];
