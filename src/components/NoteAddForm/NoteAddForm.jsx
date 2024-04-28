import { useState } from "react";
import * as notesAPI from "../../utilities/notes-api";

import './NoteAddForm.css';


// --> takes prop from NotesPage  (sortOrder)
// --> takes prop from NotesList  (notes, setNotes, sortOrder)
export default function NoteAddForm({ sortOrder, notes, setNotes }) {
  const [newNote, setNewNote] = useState('');
  const [error, setError] = useState('');

  // Create note
  function handleChange(evt) {
    setNewNote(evt.target.value);
    setError('');
  }
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const note = await notesAPI.create(newNote); // create note notes.API.create stored in note
      sortOrder === 'asc' ? setNotes([...notes, note]) : setNotes([note, ...notes]); // prepends list
      setNewNote(''); //after adding note, clears form
    } catch {
      setError('Failed to Add Note - Please Try Again');
    }
  }

  return (
    <main className="NoteAddForm">
      <h1>Add Note</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit} >
          <label>Note</label>
          <input 
            type="text" 
            name="text" 
            value={newNote} 
            onChange={handleChange} 
            required 
          />

          <button className="submit" type="submit">Add Note</button>
        </form>
      </div>
      <p className="error-message">{error}</p>
    </main>
  );
}