'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  DEFAULT_CHUNK_OVERLAP,
  DEFAULT_CHUNK_SIZE,
} from '@/constants/constants';
import {
  aiInfoTemplateCodes,
  componentTypeCodes,
  countryCodes,
  EAiInfoTemplate,
  EComponentType,
  ECountryCode,
  EEmbedTemplate,
  EIndustry,
  embedTemplateCodes,
  industryCodes,
} from '@/types/enums';
import { ENamespace, namespaceCodes } from '@/types/enums/ENamespace';
import { EStateCode, stateCodes } from '@/types/enums/EStateCode';
import { ISelectOption } from '@/types/ISelectOption';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from '../ui';
import { FlexCenterContainer, FlexRowContainer } from '..';

import { DocumentFormSchema } from './DocumentFormSchema';

type FieldName =
  | 'documentName'
  | 'defaultSourceLink'
  | 'defaultNamespace'
  | 'fullText'
  | 'chunkSize'
  | 'chunkOverlap'
  | 'defaultMetadata.general.countryCode'
  | 'defaultMetadata.general.industry'
  | 'defaultMetadata.general.sourceLink'
  | 'defaultMetadata.general.sourceName'
  | 'defaultMetadata.ai.aiTemplate'
  | 'defaultMetadata.embedded.embeddedTemplate'
  | 'defaultMetadata.ui.uiTitle'
  | 'defaultMetadata.general.stateCode'
  | 'defaultMetadata.ui.componentType';

export function DocumentForm(): JSX.Element {
  const form = useForm<DocumentFormSchema>({
    resolver: zodResolver(DocumentFormSchema),
    defaultValues: {
      documentName: '',
      defaultSourceLink: '',
      defaultMetadata: {
        general: {
          sourceName: '',
          sourceLink: '',
          countryCode: ECountryCode.AUS,
          stateCode: EStateCode.NSW,
          industry: EIndustry.CONSTRUCTION,
        },
        ai: {
          aiTemplate: EAiInfoTemplate.STANDARD_V1,
        },
        embedded: {
          embeddedTemplate: EEmbedTemplate.LAW_REFERENCE,
        },
        ui: {
          uiTitle: '',
          componentType: EComponentType.PASSAGE,
        },
      },
      defaultNamespace: ENamespace.CONSTRUCTION_GPT,

      fullText: '',
      chunkSize: DEFAULT_CHUNK_SIZE,
      chunkOverlap: DEFAULT_CHUNK_OVERLAP,
    },
  });

  function onSubmit(values: DocumentFormSchema): void {
    console.log(values);
  }

  function renderFormField(
    label: string,
    placeholder: string,
    name: FieldName
  ): JSX.Element {
    return (
      <FormField
        control={form.control}
        name={name}
        render={({ field }): JSX.Element => (
          <FormItem className='w-full'>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input placeholder={placeholder} {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    );
  }

  function renderFormContent(
    label: string,
    placeholder: string,
    name: FieldName,
    options: ISelectOption[]
  ): JSX.Element {
    return (
      <FormField
        control={form.control}
        name={name}
        render={({ field }): JSX.Element => (
          <FormItem className='w-full'>
            <FormLabel>{label}</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value as string}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {options.map((option, i) => (
                  <SelectItem key={i} value={option.value}>
                    {option.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }

  return (
    <FlexCenterContainer>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full space-y-8'
        >
          <h3 className='text-center text-xl font-bold'>
            Document Values (specific to this document)
          </h3>{' '}
          <FlexRowContainer>
            {renderFormField(
              'Document Name',
              'Enter document name',
              'documentName'
            )}
            <FlexRowContainer>
              {renderFormField(
                'Split Text Size',
                'Enter chunk size',
                'chunkSize'
              )}
              {renderFormField(
                'Chunk overlap',
                'Enter chunk overlap',
                'chunkOverlap'
              )}
            </FlexRowContainer>
          </FlexRowContainer>
          <FormField
            control={form.control}
            name='fullText'
            render={({ field }): JSX.Element => (
              <FormItem>
                <FormLabel>Full Text</FormLabel>
                <FormControl>
                  <Textarea
                    className='min-h-[240px]'
                    placeholder='Enter full text'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <h3 className='text-center text-xl font-bold'>
            Default Values (used by all the info chunks this generates)
          </h3>
          {renderFormField(
            'Default UI Title',
            'Enter default UI title',
            'defaultMetadata.ui.uiTitle'
          )}
          <FlexRowContainer>
            {renderFormField(
              'Default Source Link',
              'Enter default source link',
              'defaultSourceLink'
            )}
            {renderFormField(
              'Default Source Name',
              'Enter default source name',
              'defaultMetadata.general.sourceName'
            )}
          </FlexRowContainer>
          <FlexRowContainer>
            {renderFormContent(
              'Select what country this applies to',
              'Country',
              'defaultMetadata.general.countryCode',
              countryCodes
            )}
            {renderFormContent(
              'Select what state this applies to',
              'State',
              'defaultMetadata.general.stateCode',
              stateCodes
            )}
            {renderFormContent(
              'Select what industry this applies to',
              'Industry',
              'defaultMetadata.general.industry',
              industryCodes
            )}
          </FlexRowContainer>
          <FlexRowContainer>
            {renderFormContent(
              'Select what ai prompt template to apply',
              'Ai Prompt Template',
              'defaultMetadata.ai.aiTemplate',
              aiInfoTemplateCodes
            )}
            {renderFormContent(
              'Select what embed template to apply',
              'Embed Template',
              'defaultMetadata.embedded.embeddedTemplate',
              embedTemplateCodes
            )}
            {renderFormContent(
              'Select what UI component this will use',
              'UI Component',
              'defaultMetadata.ui.componentType',
              componentTypeCodes
            )}
            {renderFormContent(
              'Select namespace (used for filtering results)',
              'Namespace',
              'defaultNamespace',
              namespaceCodes
            )}
          </FlexRowContainer>
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </FlexCenterContainer>
  );
}

export default DocumentForm;
