import React from "react";
import { ThemeProvider } from "ustudio-ui/theme";
import "./App.css";
import Main from "./components/Main";
import { FormContext } from "./context/Context";

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

export default App;
