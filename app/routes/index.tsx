import * as React from 'react';
import type { MetaFunction } from 'remix';
import { Link } from 'remix';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import theme from '../src/theme';
// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: 'luisplatzer.de',
    description: 'Welcome to remix!',
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      
    </ThemeProvider>
  );
}
