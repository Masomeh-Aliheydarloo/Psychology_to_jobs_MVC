import { useEffect, useState } from 'react';
import { IoMoon } from "react-icons/io5";//npm install react-icons
import { IoSunny } from "react-icons/io5";
const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light');

   
    useEffect(() => {
        // Add or remove dark mode class on <html> tag
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Store user preference in localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
         setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <button className=" w-8 h-8" aria-label="Toggle Dark Mode" onClick={() => toggleTheme()}>
            {

                theme==='light' && <IoSunny className="transition-transform duration-300" size='2.5rem' />
            }
            {
                theme==='dark' && <IoMoon className="transition-transform duration-300" size='2.5rem' />
            }
        </button>
    );
};

export default ThemeToggle;