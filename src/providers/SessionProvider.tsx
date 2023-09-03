'use client';

import { Session } from 'next-auth';
import { SessionProvider as Provider } from 'next-auth/react';

type Props = {
  session: Session | null;
  children: React.ReactNode;
};

function SessionProvider({ children, session }: Props): JSX.Element {
  return <Provider session={session}>{children}</Provider>;
}

export default SessionProvider;
