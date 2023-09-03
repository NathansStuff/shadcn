import { ISelectOption } from '../ISelectOption';

export enum EIndustry {
  CONSTRUCTION = 'CONSTRUCTION',
}
export const industryCodes: ISelectOption[] = [
  {
    name: 'Construction',
    value: EIndustry.CONSTRUCTION,
  },
];
