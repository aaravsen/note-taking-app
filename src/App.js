import { useState } from 'react';
import './App.scss';
import NoteList from './components/note-list/note-list.component';
import ThemeButton from './components/theme-button/theme-btn.component';
import CreateNewNote from './components/create-new-note/create-new-note.component';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    // if (isDarkMode) {
    //   setIsDarkMode(false);
    // } else {
    //   setIsDarkMode(true);
      
    // }

    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : ""}`}>
      <NoteList />
      <ThemeButton onClick={toggleTheme} />
      <CreateNewNote />
    </div>
  );
}

export default App;
