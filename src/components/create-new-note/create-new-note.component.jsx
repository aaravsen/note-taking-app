import { useState } from "react";
import NoteForm from "../note-form/note-form.component";
import "./create-new-note.style.scss";
import DialogModal from "../dialog-modal/dialog-modal.component";

const CreateNewNote = () => {



    const [openDialog, setOpenDialog] = useState(false);
    const toggleDialog = () => {
        setOpenDialog(prev => !prev);
    }

    const onSubmitForm = (formData) => {

        console.log("formData", formData);
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