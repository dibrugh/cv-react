import React, { useEffect } from 'react'
// кастомный хук
import { useLocalStorage } from '../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';

import sun from "../../img/icons/sun.svg"
import moon from "../../img/icons/moon.svg";
import "./style.css"

export default function BtnDarkMode() {

    // 'darkMode' - key, 'light' - default value. Т.е при первичной загрузке в LocalStorage попадает darkMode: "light"
    // Теперь default value определяется в зависимости от установленно темы пользователя.
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    // Отслеживание изменения системных настроек
    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (event) => {
                const newColorScheme = event.matches ? "dark" : "light";
                setDarkMode(newColorScheme);
                }
            );
    }, [setDarkMode]);

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => currentValue === 'light' ? 'dark' : 'light')
    }

    const btnDefault = "dark-mode-btn";
    const btnActive = "dark-mode-btn dark-mode-btn_active"

    return (
        <button className={darkMode === 'dark' ? btnActive : btnDefault} onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    )
}
