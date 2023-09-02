/* eslint-disable @typescript-eslint/no-explicit-any */
// The type of middleware and store are too complex to type
import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { NEXT_PUBLIC_NODE_ENV } from '@/constants/constants';

import displayReducer from './display/displaySlice';

// Create the root reducer independently to obtain the RootState type
export const rootReducer = combineReducers({
  display: displayReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>): any {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export function getMiddleware(env: string): any[] {
  const middleware: any[] = [];
  if (env !== 'production' && env !== 'test') {
    middleware.push(logger);
  }
  return middleware;
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getMiddleware(NEXT_PUBLIC_NODE_ENV)),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
