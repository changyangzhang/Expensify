import React, { useState, useContext } from "react";
import NotesContext from '../context/notes-contect';

const AddNoteForm = () =>{
    const { dispatch } = useContext(NotesContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addNote = (e) => {
        e.preventDefault();
        // setNotes([
        //     ...notes,
        //     { title, body }
        // ]);
        dispatch({
            type: 'ADD_NOTE',
            title,
            body
        });
        setTitle('');
        setBody('')
    };

    return (
        <>
        <p>Add note</p>
        <form onSubmit={addNote}>
            <input value={title} onChange={(e) => setTitle(e.target.value)}/>
            <textarea value={body} onChange={(e) => setBody(e.target.value)}/>
            <button>add note</button>
        </form>
        </>
    )
};
export {AddNoteForm as default}