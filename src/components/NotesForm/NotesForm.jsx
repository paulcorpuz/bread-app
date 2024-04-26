import { useState } from "react";
import * as notesAPi from '../../utilities/notes-api';

export default function NoteForm({ user }) {
  const [newNote, setNewNote] = useState(""); // ---------> change name to note? confusing

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const addNote = await notesAPi.addNote(newNote);
    setNewNote(addNote);
  };

  const handleChange = (evt) => {
    setNewNote(evt.target.value);
  };

  return (
    <>
      <h1>New Note</h1>
      <form autoComplete="off" onSubmit={ handleSubmit }>
        <input
          name={newNote}
          value={newNote}
          onChange={ handleChange }
          type="text"
          placeholder="Dear Diary..."
          required
        />
        <button type="submit">Add Note</button>
      </form>
    </>
  );
}
