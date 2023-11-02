import { useContext, useState } from "react";
import "./note-item.style.scss";
import { NoteContext } from "../../contexts/note.context";
import DialogModal from "../../components/dialog-modal/dialog-modal.component";
import NoteForm from "../../components/note-form/note-form.component";

const NoteItem = ({note}) => {
    const { updateNote, deleteNote } = useContext(NoteContext);
    const [openDialog, setOpenDialog] = useState(false);


    const handleDelete = () => {
        deleteNote(note.id);
    }

    const toggleDialog = () => {
        setOpenDialog(prev => !prev);
    }

    const onSubmitForm = (formData) => {
        const { title, desc } = formData;

        const updatedNote = {
            id: note.id, // You can use a better ID generation method
            title,
            desc
        }
        updateNote(updatedNote);
        toggleDialog();
    }
    const onCancel = () => {
        toggleDialog();

    }

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
            <DialogModal isOpen={openDialog}>
                <NoteForm initialValue={{title: note.title, desc: note.desc}} onSubmit={onSubmitForm} onCancel={onCancel} />
            </DialogModal>
        </div>
    );
}

export default NoteItem;