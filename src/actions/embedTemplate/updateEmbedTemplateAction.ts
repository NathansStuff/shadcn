import { putEmbedTemplate } from '@/apiCalls/embedTemplate/putEmbedTemplate';
import { EmbedTemplateWithId } from '@/types';

import { toastHelper } from '../actionUtils';

export async function updateEmbedTemplateAction(
  template: EmbedTemplateWithId
): Promise<void> {
  const promises = putEmbedTemplate(template);

  toastHelper(promises, 'Embed Template', 'update');
}
