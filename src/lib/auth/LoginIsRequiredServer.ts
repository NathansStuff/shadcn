import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { authConfig } from './authConfig';

export async function LoginIsRequiredServer(): Promise<undefined> {
  const session = await getServerSession(authConfig);
  if (!session) return redirect('/login');
}
