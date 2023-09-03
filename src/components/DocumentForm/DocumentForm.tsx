'use client';

import { Control, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { sendDocument } from '@/actions';
import { DocumentFormSchema } from '@/types';
import {
  aiInfoTemplateCodes,
  componentTypeCodes,
  countryCodes,
  embedTemplateCodes,
  industryCodes,
  namespaceCodes,
  stateCodes,
} from '@/types/enums';

import {
  Button,
  FlexCenterContainer,
  FlexRowContainer,
  Form,
  renderInputField,
  renderSelectField,
  renderTextarea,
} from '..';

import { documentFormDefaults } from './documentFormDefaults';

export function DocumentForm(): JSX.Element {
  const form = useForm<DocumentFormSchema>({
    resolver: zodResolver(DocumentFormSchema),
    defaultValues: documentFormDefaults,
  });

  function onSubmit(values: DocumentFormSchema): void {
    console.log(values);
    sendDocument(values);
  }

  return (
    <FlexCenterContainer className='pt-4 pb-20'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
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
  control: Control<DocumentFormSchema>;
};

function DocumentValuesSection({ control }: ControlProps): JSX.Element {
  return (
    <>
      <h3 className='text-center text-xl font-bold'>
        Document Values (specific to this document)
      </h3>
      <FlexRowContainer>
        {renderInputField(
          'Document Name',
          'Enter document name',
          'documentName',
          control
        )}
        <FlexRowContainer>
          {renderInputField(
            'Split Text Size',
            'Enter chunk size',
            'chunkSize',
            control
          )}
          {renderInputField(
            'Chunk overlap',
            'Enter chunk overlap',
            'chunkOverlap',
            control
          )}
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
      {renderInputField(
        'Default UI Title',
        'Enter default UI title',
        'defaultMetadata.ui.uiTitle',
        control
      )}
      <FlexRowContainer>
        {renderInputField(
          'Default Source Link',
          'Enter default source link',
          'defaultMetadata.general.sourceLink',
          control
        )}
        {renderInputField(
          'Default Source Name',
          'Enter default source name',
          'defaultMetadata.general.sourceName',
          control
        )}
      </FlexRowContainer>
      <MetadataSelectionFields control={control} />
    </>
  );
}

function MetadataSelectionFields({ control }: ControlProps): JSX.Element {
  return (
    <>
      <FlexRowContainer>
        {renderSelectField(
          'Select what country this applies to',
          'Country',
          'defaultMetadata.general.countryCode',
          countryCodes,
          control
        )}
        {renderSelectField(
          'Select what state this applies to',
          'State',
          'defaultMetadata.general.stateCode',
          stateCodes,
          control
        )}
        {renderSelectField(
          'Select what industry this applies to',
          'Industry',
          'defaultMetadata.general.industry',
          industryCodes,
          control
        )}
        {renderSelectField(
          'Select namespace (used for filtering results)',
          'Namespace',
          'defaultNamespace',
          namespaceCodes,
          control
        )}
      </FlexRowContainer>
      <FlexRowContainer>
        {renderSelectField(
          'Select what ai prompt template to apply',
          'Ai Prompt Template',
          'defaultMetadata.ai.aiTemplate',
          aiInfoTemplateCodes,
          control
        )}
        {renderSelectField(
          'Select what embed template to apply',
          'Embed Template',
          'defaultMetadata.embedded.embeddedTemplate',
          embedTemplateCodes,
          control
        )}
        {renderSelectField(
          'Select what UI component this will use',
          'UI Component',
          'defaultMetadata.ui.componentType',
          componentTypeCodes,
          control
        )}
      </FlexRowContainer>
    </>
  );
}
