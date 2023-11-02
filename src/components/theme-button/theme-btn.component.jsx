import { useContext } from "react";
import "./theme-btn.style.scss";
import { ThemeContext } from "../../contexts/theme.context";

const ThemeButton = () => {
    const {toggleTheme} = useContext(ThemeContext);

    const handleClick = () => {
        toggleTheme();
    }

    return (
        <button className="theme-btn-container" onClick={handleClick}>
            Change theme
        </button>
    );
}

export default ThemeButton;