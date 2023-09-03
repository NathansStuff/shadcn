'use client';

import { Provider } from 'react-redux';

import { store } from '@/context/store';

import { ThemeProvider } from './ThemeProvider';

function ClientProvider({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <Provider store={store}>
      {/* <Toaster position='top-right' /> */}
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        {children}
      </ThemeProvider>
    </Provider>
  );
}

export default ClientProvider;
