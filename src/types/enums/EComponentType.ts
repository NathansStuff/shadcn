import { ISelectOption } from '..';

export enum EComponentType {
  PASSAGE = 'PASSAGE',
}

export const componentTypeCodes: ISelectOption[] = [
  {
    name: 'Passage',
    value: EComponentType.PASSAGE,
  },
];
