import { useState, useEffect } from "react";
import * as notesAPI from '../../utilities/notes-api';

import './NotesPage.css';

import NoteAddForm from "../../components/NoteAddForm/NoteAddForm";
import NotesList from "../../components/NotesList/NotesList";


// --> takes prop from App Page ()
export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(function() {
    async function getNotes() {
      const notes = await notesAPI.index();
      setNotes(notes);
    }
    
    getNotes()
  }, []);

  function toggleOrder() {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc'
    setSortOrder(newOrder);
  }

  function handleSort(evt) {
    toggleOrder();
    const formatNotes = notes.sort(function(noteA, noteB) {
      const aDate = new Date(noteA.createdAt)
      const bDate = new Date(noteB.createdAt)
      
      if (sortOrder === 'asc') return bDate - aDate
      if (sortOrder === 'desc') return aDate - bDate
    })
    setNotes([...formatNotes]);
  }

  return (
    <main className='NotesPage'>
      <NoteAddForm notes={notes} setNotes={setNotes} sortOrder={sortOrder} />
      {
        notes.length !== 0 ? 
        <div>
          <h1>Notes Page</h1>
          <button onClick={handleSort}>
            {sortOrder === 'desc' ? 'Descending Order' : 'Ascending Order'}
          </button>
          <NotesList notes={notes} setNotes={setNotes} />
        </div>
        :
        <h2>No Notes Yet!</h2>
      }
    </main>
  );
}


// array sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://owlcation.com/stem/creating-a-sortable-list-in-react-js