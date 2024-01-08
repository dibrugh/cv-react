export default function detectDarkMode() {
    // Проверка темной темы на уровне системных настроек
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return 'dark';
    }
    return 'light';
}