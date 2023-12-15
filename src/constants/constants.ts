import assert from 'assert';

assert.ok('NEXT_PUBLIC_ENV', 'NEXT_PUBLIC_ENV is not defined');
export const NEXT_PUBLIC_ENV = process.env.NEXT_PUBLIC_ENV || '';

assert.ok('NEXT_PUBLIC_BASE_URL', 'NEXT_PUBLIC_BASE_URL is not defined');
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';

// ***** Chunks *****
export const DEFAULT_CHUNK_SIZE = 2000;
export const DEFAULT_CHUNK_OVERLAP = 100;

// ***** Database *****
export const MONGO_URI = process.env.MONGO_URI || '';

// ***** OpenAI *****
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';

// ***** Pinecone *****
export const PINECONE_API_KEY = process.env.PINECONE_API_KEY || '';
export const PINECONE_ENV = process.env.PINECONE_ENV || '';

export const PINECONE_DEFAULT_INDEX_NAME =
  process.env.PINECONE_DEFAULT_INDEX_NAME || '';

export const PINECONE_DEFAULT_NAMESPACE =
  process.env.PINECONE_DEFAULT_NAMESPACE || '';
