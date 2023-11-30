import React, { useEffect, useRef } from 'react'
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
    const btnRef = useRef(null);

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark');
            btnRef.current.classList.add('dark-mode-btn_active');
        } else {
            document.body.classList.remove('dark');
            btnRef.current.classList.remove('dark-mode-btn_active');
        }
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => currentValue === 'light' ? 'dark' : 'light')
    }

    return (
        <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    )
}
