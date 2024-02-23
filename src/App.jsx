import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";


const App = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };

  return (
    <AuthContextProvider>
      <div className="bg:white dark:bg-slate-900">
        <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </AuthContextProvider>
  );
};
export default App;
