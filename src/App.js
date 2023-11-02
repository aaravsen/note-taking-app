import './App.scss';
import NoteItem from './components/note-item/note-item.component';

function App() {
  return (
    <div className="App">
     <NoteItem note={{title: "New Note", desc: "New Description"}}/>
     <NoteItem note={{title: "New Note", desc: "New Description"}}/>
    </div>
  );
}

export default App;
