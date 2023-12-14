'use client';

import { Control, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  aiInfoTemplateCodes,
  componentTypeCodes,
  countryCodes,
  Document,
  embedTemplateCodes,
  industryCodes,
  namespaceCodes,
  stateCodes,
} from '@/types';

import {
  Button,
  FlexCenterContainer,
  FlexRowContainer,
  Form,
  InputField,
  renderTextarea,
  SelectField,
} from '..';

import { documentFormDefaults } from './documentFormDefaults';
interface DocumentFormProps {
  handleSubmit: (document: Document) => void;
  defaultValues?: Document;
}

export function DocumentForm({
  handleSubmit,
  defaultValues,
}: DocumentFormProps): JSX.Element {
  const form = useForm<Document>({
    resolver: zodResolver(Document),
    defaultValues: defaultValues ?? documentFormDefaults,
  });

  return (
    <FlexCenterContainer className='pb-20 pt-4'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className='w-full space-y-8'
        >
          <DocumentValuesSection control={form.control} />
          <DefaultValuesSection control={form.control} />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </FlexCenterContainer>
  );
}

export default DocumentForm;

type ControlProps = {
  control: Control<Document>;
};

function DocumentValuesSection({ control }: ControlProps): JSX.Element {
  return (
    <>
      <h3 className='text-center text-xl font-bold'>
        Document Values (specific to this document)
      </h3>
      <FlexRowContainer>
        <InputField
          label='Document Name'
          placeholder='Enter document name'
          name='documentName'
          control={control}
        />
        <FlexRowContainer>
          <InputField
            label='Split Text Size'
            placeholder='Enter chunk size'
            name='chunkSize'
            control={control}
          />
          <InputField
            label='Chunk overlap'
            placeholder='Enter chunk overlap'
            name='chunkOverlap'
            control={control}
          />
        </FlexRowContainer>
      </FlexRowContainer>
      {renderTextarea('Full Text', 'Enter full text', 'fullText', control)}
    </>
  );
}

function DefaultValuesSection({ control }: ControlProps): JSX.Element {
  return (
    <>
      <h3 className='text-center text-xl font-bold'>
        Default Values (used by all the info chunks this generates)
      </h3>
      <InputField
        label='Default UI Title'
        placeholder='Enter default UI title'
        name='defaultMetadata.ui.uiTitle'
        control={control}
      />
      <FlexRowContainer>
        <InputField
          label='Default Source Link'
          placeholder='Enter default source link'
          name='defaultMetadata.general.sourceLink'
          control={control}
        />
        <InputField
          label='Default Source Name'
          placeholder='Enter default source name'
          name='defaultMetadata.general.sourceName'
          control={control}
        />
      </FlexRowContainer>
      <MetadataSelectionFields control={control} />
    </>
  );
}

function MetadataSelectionFields({ control }: ControlProps): JSX.Element {
  return (
    <>
      <FlexRowContainer>
        <SelectField
          label='Select what country this applies to'
          placeholder='Select language'
          name='defaultMetadata.general.countryCode'
          control={control}
          options={countryCodes}
        />
        <SelectField
          label='Select what state this applies to'
          placeholder='State'
          name='defaultMetadata.general.stateCode'
          control={control}
          options={stateCodes}
        />
        <SelectField
          label='Select what industry this applies to'
          placeholder='Industry'
          name='defaultMetadata.general.industry'
          control={control}
          options={industryCodes}
        />
        <SelectField
          label='Select namespace (used for filtering results)'
          placeholder='Namespace'
          name='defaultNamespace'
          control={control}
          options={namespaceCodes}
        />
      </FlexRowContainer>
      <FlexRowContainer>
        <SelectField
          label='Select what ai prompt template to apply'
          placeholder='Ai Prompt Template'
          name='defaultMetadata.ai.aiTemplate'
          control={control}
          options={aiInfoTemplateCodes}
        />
        <SelectField
          label='Select what embed template to apply'
          placeholder='Embed Template'
          name='defaultMetadata.embedded.embeddedTemplate'
          control={control}
          options={embedTemplateCodes}
        />
        <SelectField
          label='Select what UI component this will use'
          placeholder='UI Component'
          name='defaultMetadata.ui.componentType'
          control={control}
          options={componentTypeCodes}
        />
      </FlexRowContainer>
    </>
  );
}
