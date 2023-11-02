import "./note-list.style.scss"
import NoteItem from "../note-item/note-item.component";

const notes = [
    {id: 1, title: "Note1", desc: "Description1"},
    {id: 2, title: "Note2", desc: "Description2"},
    {id: 3, title: "Note3", desc: "Description3"},
    {id: 4, title: "Note4", desc: "Description4"},
    {id: 5, title: "Note5", desc: "Description5"},
    {id: 6, title: "Note6", desc: "Description6"},
    {id: 7, title: "Note7", desc: "Description7"},
]

const NoteList = () => {

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
                    return (<NoteItem key={note.id} note={note}/>)
                })
            }
        </div>
    );
}

export default NoteList;