import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcher = ({ customStyles }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className={`text-spacecadet dark:text-robineggblue focus:outline-none bg-white border border-robineggblue dark:bg-spacecadet ${customStyles} shadow`}
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
