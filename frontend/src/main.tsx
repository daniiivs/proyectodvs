import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App.tsx";
import { ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#3d7961"
    },
    secondary: {
      main: "#964a64"
    },
    error: {
      main: "rgba(211,47,47,0.84)"
    },
    warning: {
      main: "rgba(237,108,2,0.78)"
    },
    info: {
      main: "rgba(2,136,209,0.8)"
    },
    success: {
      main: "rgba(46,125,50,0.82)"
    }
  }
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
    <App />
  </StrictMode>
);
