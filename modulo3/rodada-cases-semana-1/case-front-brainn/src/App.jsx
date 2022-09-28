import { ThemeProvider } from "@mui/material";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { theme } from "./theme/theme";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
    </ThemeProvider>
  );
}

export default App;
