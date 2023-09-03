import assert from 'assert';

assert.ok('NEXT_PUBLIC_NODE_ENV', 'NEXT_PUBLIC_NODE_ENV is not defined');
export const NEXT_PUBLIC_NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV || '';

// ***** Chunks *****
export const DEFAULT_CHUNK_SIZE = 2000;
export const DEFAULT_CHUNK_OVERLAP = 100;
