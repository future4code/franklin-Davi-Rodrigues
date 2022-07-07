import React from "react"
import theme from './constants/theme'
import { ThemeProvider } from '@mui/material/styles'
import Router from "./routes/Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Router />
    </ThemeProvider>
  );
}

export default App;
