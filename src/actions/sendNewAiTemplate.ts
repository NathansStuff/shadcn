import toast from 'react-hot-toast';

import { postAiTemplate } from '@/apiCalls/postAiTemplate';
import { AiTemplate } from '@/types';

export async function sendNewAiTemplate(template: AiTemplate): Promise<void> {
  const promises = postAiTemplate(template);

  toast.promise(promises, {
    loading: 'Creating Ai Template...',
    success: 'Ai Template created!',
    error: 'Error creating Ai Template',
  });

  try {
    const newTemplate = await promises;
    window.location.href = `/aiTemplate/${newTemplate._id}`;
  } catch (err) {
    console.log(err);
  }
}
