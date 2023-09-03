import { ISelectOption } from '../ISelectOption';

export enum EStateCode {
  ALL = 'ALL',
  NSW = 'NSW',
}

export const stateCodes: ISelectOption[] = [
  {
    name: 'All',
    value: EStateCode.ALL,
  },
  {
    name: 'New South Wales',
    value: EStateCode.NSW,
  },
];
