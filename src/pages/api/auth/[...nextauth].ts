import NextAuth from 'next-auth';

import { authConfig } from '@/lib/auth/authConfig';

export default NextAuth(authConfig);
