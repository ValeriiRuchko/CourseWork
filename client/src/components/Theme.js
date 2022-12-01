import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#E9DAC1',
    },
    secondary: {
      main: '#9ED2C6',
    },
    background: {
      paper: '#9ED2C6',
    },
    text: {
      primary: '#000000',
    },
  },
});

export default theme;