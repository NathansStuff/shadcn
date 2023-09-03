import { ISelectOption } from '../ISelectOption';

export enum ECountryCode {
  AUS = 'AUS',
}

export const countryCodes: ISelectOption[] = [
  {
    name: 'Australia',
    value: ECountryCode.AUS,
  },
];
