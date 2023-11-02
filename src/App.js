import './App.scss';
import NoteList from './components/note-list/note-list.component';
import CreateNewNote from './components/create-new-note/create-new-note.component';
import ThemeButton from './components/theme-button/theme-btn.component';
import { useContext } from 'react';
import { ThemeContext } from './contexts/theme.context';

function App() {
  const {isDarkMode} = useContext(ThemeContext);
  return (
    <div className={`App ${isDarkMode ? "dark" : ""}`}>
      <NoteList />
      <ThemeButton />
      <CreateNewNote />
    </div>
  );
}

export default App;
