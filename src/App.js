import { useState } from 'react';
import './App.scss';
import NoteList from './components/note-list/note-list.component';
import ThemeButton from './components/theme-button/theme-btn.component';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : ""}`}>
      <NoteList />
      <ThemeButton onClick={toggleTheme} />
    </div>
  );
}

export default App;
