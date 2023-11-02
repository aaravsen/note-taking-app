import "./note-form.style.scss"

import { useState } from "react";

const defaultFormFields = {
    title: '',
    desc: '',
};

const NoteForm = ({ initialValue,  onSubmit, onCancel }) => {


    const [formFields, setFormFields] = useState(initialValue ?? defaultFormFields);
    const { title, desc } = formFields;


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
        console.log("change", `${name}: ${value}`)
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleCancel = (event) => {
        event.preventDefault();
        onCancel();
        resetFormFields();
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(formFields);
        resetFormFields();
        console.log("form data", formFields)
    };


    return (
        <form
            method="post"
            className="form-container"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                name="title"
                className="title-input"
                placeholder="Title"
                required
                value={title}
                onChange={handleChange}
            />
            <textarea
                name="desc"
                className="desc-input"
                placeholder="Description"
                required
                value={desc}
                onChange={handleChange}
            />
            <div className="button-row">
                <button
                    type="submit"
                    className="submit-button"
                >
                  {initialValue ? "Update note" : "Add new note"}
                </button>
                <button
                    className="cancel-button"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default NoteForm;