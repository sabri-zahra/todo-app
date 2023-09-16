import { PropsWithChildren, useCallback } from 'react';
import { createTheme, ThemeOptions, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { useAppSelector } from '@/store';

import { darkTheme, lightTheme } from './themeColors';
import { ThemeMode } from '@/types';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const mode = useAppSelector((state) => state.theme.mode);

  const theme = useCallback(
    (mode: ThemeMode): ThemeOptions =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'dark' ? darkTheme : lightTheme),
        },
      }),
    [],
  );

  return <MuiThemeProvider theme={theme(mode)}>{children}</MuiThemeProvider>;
};
