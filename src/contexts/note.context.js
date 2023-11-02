import { createContext, useReducer } from 'react';

export const NoteContext = createContext();

const initialState = {
    notes:  []
};

const noteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, action.payload],
            };
        case 'UPDATE_NOTE':
             const updatedNotes = state.notes.map((note) =>
                note.id === action.payload.id ? action.payload : note
            );
            return {
                ...state,
                notes: updatedNotes,
            };
        case 'DELETE_NOTE':
             const filteredNotes = state.notes.filter((note) => note.id !== action.payload);

            return {
                ...state,
                notes: filteredNotes,
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

