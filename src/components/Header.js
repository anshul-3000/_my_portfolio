import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <header className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
          SDE Intern
        </h1>

        <nav className="space-x-6 hidden sm:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        <button onClick={() => setDarkMode(!darkMode)} className="text-xl text-gray-700 dark:text-gray-300">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
}