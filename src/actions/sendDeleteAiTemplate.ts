import toast from 'react-hot-toast';

import { deleteAiTemplate } from '@/apiCalls/deleteAiTemplate';

export async function sendDeleteAiTemplate(id: string): Promise<void> {
  const promises = deleteAiTemplate(id);

  toast.promise(promises, {
    loading: 'Deleting Ai Template...',
    success: 'Ai Template deleted!',
    error: 'Error deleting Ai Template',
  });

  try {
    await promises;
    window.location.href = `/aiTemplate`;
  } catch (err) {
    console.log(err);
  }
}
