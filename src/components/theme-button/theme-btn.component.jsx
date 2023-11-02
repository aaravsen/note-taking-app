import "./theme-btn.style.scss";

const ThemeButton = ({onClick}) => {
  
    return (
        <button className="theme-btn-container" onClick={onClick}>
            Change theme
        </button>
    );
}

export default ThemeButton;