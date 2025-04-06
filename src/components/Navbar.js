import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    // Load theme from localStorage on initial load
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-600 dark:text-purple-400">
          Anshul
        </h1>
        <ul className="flex space-x-6 font-medium text-gray-700 dark:text-gray-300">
          <li><a href="#home" className="hover:text-purple-600">Home</a></li>
          <li><a href="#about" className="hover:text-purple-600">About</a></li>
          <li><a href="#projects" className="hover:text-purple-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
          <li>
            <button onClick={toggleDarkMode} className="text-xl focus:outline-none">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}