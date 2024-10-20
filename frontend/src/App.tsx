import Login from "./pages/Login.tsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { themeOptions } from "./main.tsx";

function App() {
  const theme = createTheme(themeOptions);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </>
  );
}

export default App;
