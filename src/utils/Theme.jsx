import ThemeToggle from "@/utils/ThemeToggle";
import { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

// Tema oscuro
const darkTheme = {
  body: "#101418",
  text: "white",
  textDesc: "#b0b9be",
  colorSecondary: "#293138",
  actionColor: "#1e93f0",
  iconsBlack: "none",
  iconsWhite: "block",
  scrollBack: "#2a2e34",
  scrollBarra: "#323f4a",
};

// Tema claro
const lightTheme = {
  body: "#fefffe",
  text: "#252525",
  textDesc: "#b0b9be",
  colorSecondary: "#f1f2f6",
  actionColor: "#1e93f0",
  iconsBlack: "black",
  iconsWhite: "none",
  scrollBack: "#ddd",
  scrollBarra: "#8d8d8d",
};

// Estilos globales
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
  }

`;

const Theme = ({ defaultTheme, children }) => {

  const [theme, setTheme] = useState(defaultTheme || "dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <ThemeToggle toggleTheme={toggleTheme} />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme
