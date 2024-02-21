import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

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
    if(theme === 'dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    
    setTheme(theme == 'dark' ? 'light' : 'dark')
  }
  

  return (
    <div className="bg:white dark:bg-slate-900">
      <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme}/>
    </div>
  );
};
export default App; 