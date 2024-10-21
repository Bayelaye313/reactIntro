import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

function Header({ title }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      style={{
        background: theme ? "#333" : "#fff",
        color: theme ? "#fff" : "#000",
      }}
    >
      <h1> {title} </h1>
      <button onClick={toggleTheme}>
        Switch to {theme ? "Light" : "Dark"} Theme
      </button>
    </header>
  );
}

export default Header;
