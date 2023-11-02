import "./note-list.style.scss"
import NoteItem from "../note-item/note-item.component";
import { useContext } from "react";
import { NoteContext } from "../../contexts/note.context";

const NoteList = () => {
    const { notes } = useContext(NoteContext);

    if (notes.length === 0) {
        return (<div className="empty-list-container">
            <h1>No notes have been created yet.</h1>
            <h3>Create new notes to get started!</h3>
        </div>)
    }

    return (
        <div className="note-list-container">
            {
                notes.map(note => {
                    return (<NoteItem note={note}/>)

                })
            }
        </div>
    );
}

export default NoteList;