import assert from 'assert';

assert.ok('NEXT_PUBLIC_NODE_ENV', 'NEXT_PUBLIC_NODE_ENV is not defined');
export const NEXT_PUBLIC_NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV || '';
