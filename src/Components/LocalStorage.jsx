import React from 'react';
import { useState, useEffect } from 'react';
import '../Styles/Local.css';
const LocalStorage = () => {

const [theme, setTheme] = useState(
() => localStorage.getItem("theme") || "light"
);

useEffect(() => {
localStorage.setItem("theme", theme);
}, [theme]);

const toggleTheme = () => {
setTheme(theme === "light" ? "dark" : "light");
};
return (
<div className={`app ${theme}`}>
<h1>Current theme: {theme}</h1>
<button onClick={toggleTheme}>
Switch to {theme === "light" ? "dark" : "light"}
</button>
</div>
);
};
export default LocalStorage;