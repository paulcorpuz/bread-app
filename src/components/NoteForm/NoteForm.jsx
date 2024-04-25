import { useState } from "react";

export default function NoteForm({addNote}) {
  const [newNote, setNewNote] = useState("");

  function handleAddNote(evt) {
    evt.preventDefault();
    addNote(newNote);
    setNewNote("");
  }

  return (
    <>
      <h1>New Note</h1>
      <form onSubmit={handleAddNote}>
        <input
          value={newNote} // corrected
          onChange={(evt) => setNewNote(evt.target.value)}
          placeholder="New Note"
          required
        />
        <button type="submit">Add Note</button>
      </form>
    </>
  );
}