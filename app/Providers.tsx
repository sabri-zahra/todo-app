'use client';
import type { FC, PropsWithChildren } from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { CssBaseline } from '@mui/material';

import { ThemeProvider } from '@/theme/themeProviders';
import { store } from '../store';

const persister = persistStore(store);

/**
 * we cant use context api inside server components.
 * this component is responsible for wrapping server components and passing down provider values
 * @param {ReactNode} children
 */
const Providers: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persister}>
        <ThemeProvider>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default Providers;
