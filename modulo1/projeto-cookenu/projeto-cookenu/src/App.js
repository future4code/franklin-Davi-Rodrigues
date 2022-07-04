import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import Router from "./routes/Router";
import theme from "./constants/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Router />
    </ThemeProvider>
  );
}

export default App;
