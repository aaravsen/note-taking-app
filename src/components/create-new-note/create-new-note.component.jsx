import { useState } from "react";
import "./create-new-note.style.scss";
import DialogModal from "../dialog-modal/dialog-modal.component";

const CreateNewNote = () => {

    const [openDialog, setOpenDialog] = useState(false);
    const toggleDialog = () => {
        setOpenDialog(prev => !prev);
    }



    return (
        <>
            <button className="create-note-container" onClick={toggleDialog}>
                Create new note
            </button>
            <DialogModal isOpen={openDialog}>
                <h1>DialogModal Goes here</h1>
                <button onClick={toggleDialog}>Close DialogModal</button>
            </DialogModal>
        </>
    );
}

export default CreateNewNote;