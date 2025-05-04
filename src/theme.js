// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#C8E8E4', // light turquoise
    },
    text: {
      primary: '#000000',
    },
    primary: {
      main: '#2b6777', // dark blue-gray
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#7bb6c6', // turquoise-blue for AppBar and Footer
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightBold: 700,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

export default theme;
