import React, { useEffect, useReducer} from 'react';
import notesReducer from "../reducers/notes";
import NoteList from './NoteList';
import AddNoteForm from "./AddNoteForm";
import NotesContext from '../context/notes-contect';


const NoteApp = () =>{

    // const [notes, setNotes] = useState([]);
    const [notes, dispatch] = useReducer(notesReducer,[]);


    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes'))

        if(notes) {
            dispatch({type: 'POPULATE_NOTES', notes})
            // setNotes(notesData)
        }
    }, []);

    useEffect(() =>{
        localStorage.setItem('notes', JSON.stringify(notes))
    },[notes]);

    return (
        <NotesContext.Provider value={{ notes, dispatch }}>
            <h1>Notes</h1>
            <NoteList/>
            <AddNoteForm dispatch={dispatch}/>
        </NotesContext.Provider>
    )
};

export {NoteApp as default}