import React from 'react';
import {  ThemeProvider, StylesProvider } from '@material-ui/core/styles';
// import '@maas-components/fonts';
import { createTheme } from '@mui/material';


const theme = createTheme({
    palette: {
        primary:{
            main: '#fbbb01',
        },
      secondary: {
        main: '#00ed4f'
      }
    }
  });
  

export interface AppThemeProps {
  children: JSX.Element;
}

const AppTheme: React.FC<AppThemeProps> = ({ children }: AppThemeProps) => {
  return (
    <StylesProvider injectFirst >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
};

export default AppTheme;
