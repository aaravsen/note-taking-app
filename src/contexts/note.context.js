import { createContext, useReducer } from 'react';

export const NoteContext = createContext();

const initialState = {
    notes:  JSON.parse(localStorage.getItem('notes')) || [], // Initialize state with notes from localStorage,
};

const noteReducer = (state, action) => {
    let updatedNotes;
    switch (action.type) {
        case 'ADD_NOTE':
            updatedNotes = [...state.notes, action.payload]; 
            localStorage.setItem('notes', JSON.stringify(updatedNotes)); // Store updated notes in localStorage
            return {
                ...state,
                notes: updatedNotes,
            };
        case 'UPDATE_NOTE':
             updatedNotes = state.notes.map((note) =>
                note.id === action.payload.id ? action.payload : note
            );
            localStorage.setItem('notes', JSON.stringify(updatedNotes)); // Store updated notes in localStorage
            return {
                ...state,
                notes: updatedNotes,
            };
        case 'DELETE_NOTE':
             updatedNotes = state.notes.filter((note) => note.id !== action.payload);
             localStorage.setItem('notes', JSON.stringify(updatedNotes)); // Store updated notes in localStorage
            return {
                ...state,
                notes: updatedNotes,
            };
        default:
            return state;
    }
};

export const NoteProvider = ({ children }) => {
    const [state, dispatch] = useReducer(noteReducer, initialState);

    const addNote = (note) => {
        dispatch({ type: 'ADD_NOTE', payload: note });
    };

    const updateNote = (note) => {
        dispatch({ type: 'UPDATE_NOTE', payload: note });
    };

    const deleteNote = (id) => {
        dispatch({ type: 'DELETE_NOTE', payload: id });
    };

    return (
        <NoteContext.Provider
            value={{
                notes: state.notes,
                addNote,
                updateNote,
                deleteNote,
            }}
        >
            {children}
        </NoteContext.Provider>
    );
};

