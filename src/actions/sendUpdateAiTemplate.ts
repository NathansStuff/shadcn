import toast from 'react-hot-toast';

import { putAiTemplate } from '@/apiCalls/putAiTemplate';
import { AiTemplateWithId } from '@/types';

export async function sendUpdateAiTemplate(
  template: AiTemplateWithId
): Promise<void> {
  const promises = putAiTemplate(template);

  toast.promise(promises, {
    loading: 'Updating Ai Template...',
    success: 'Ai Template updated!',
    error: 'Error updating Ai Template',
  });
}
