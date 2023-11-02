import "./note-item.style.scss";

const NoteItem = ({note}) => {

    const toggleDialog = () => {}
    const handleDelete = () => {}
   
    return (
        <div className="note-item-container">
            <div className="note-item-data">
                <h3>{note.title}</h3>
                <p>{note.desc}</p>
            </div>
            <div className="note-item-menu">
                <button className="note-menu-btn" onClick={toggleDialog}>Update</button>
                <button className="note-menu-btn" onClick={handleDelete} >Delete</button>
            </div>

        </div>
    );
}

export default NoteItem;