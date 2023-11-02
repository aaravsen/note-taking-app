import { useContext, useState } from "react";
import DialogModal from "../dialog-modal/dialog-modal.component";
import NoteForm from "../note-form/note-form.component";
import "./create-new-note.style.scss";
import { NoteContext } from "../../contexts/note.context";

const CreateNewNote = () => {

    const { addNote } = useContext(NoteContext);


    const [openDialog, setOpenDialog] = useState(false);
    const toggleDialog = () => {
        setOpenDialog(prev => !prev);
    }

    const onSubmitForm = (formData) => {
        const { title, desc } = formData;

        const newNote = {
            id: Date.now(), // You can use a better ID generation method
            title,
            desc
        }
        addNote(newNote);
        toggleDialog();
    }
    const onCancel = () => {
        toggleDialog();

    }

    return (
        <>
            <button className="create-note-container" onClick={toggleDialog}>
                Create new note
            </button>
            <DialogModal isOpen={openDialog}>
                <NoteForm onSubmit={onSubmitForm} onCancel={onCancel} />
            </DialogModal>
        </>
    );
}

export default CreateNewNote;