import { ISelectOption } from '..';

export enum EEmbedTemplate {
  LAW_REFERENCE = 'LAW_REFERENCE',
}

export const embedTemplateCodes: ISelectOption[] = [
  {
    name: 'Law Reference',
    value: EEmbedTemplate.LAW_REFERENCE,
  },
];
