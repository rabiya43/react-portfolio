import React, { createContext, useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'dark'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                primary: { main: '#2b6777' },
                secondary: { main: '#7bb6c6', contrastText: '#000000' }, 
                background: { default: '#f5f5f5' },
              }
            : {
                primary: { main: '#90caf9' },
                secondary: { main: '#ba68c8' },
                background: { default: '#121212' },
              }),
        },
        typography: {
          fontFamily: '"Segoe UI", sans-serif',
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;