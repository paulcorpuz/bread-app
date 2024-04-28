import { useState } from "react";
import * as notesAPI from "../../utilities/notes-api";



export default function Note({ note, notes, setNotes }) {
  const [visible, setVisible] = useState(false)
  const [editNote, setEditNote] = useState(note.text)
  const [error, setError] = useState('')

  const date = new Date(note.createdAt)

  // Edit note
  function handleChange(evt) {
    setEditNote(evt.target.value);
    setError('');
  }
  async function handleSubmitEdit() {
    try {
      const updatedNote = await notesAPI.edit(note._id, editNote);
      const updatedNotes = notes.map(n => (n._id === updatedNote._id ? updatedNote : n)); // Update the notes list with the updated note

      setNotes(updatedNotes);
      setVisible(false); // Hide the input field after saving update
    } catch (error) {
      setError('Failed to save the updated note. Please try again.');
    }
  }


  // Delete note
  async function handleDelete() {
    try {
      await notesAPI.deleteNote(note._id);
      setNotes(notes.filter(function (n) { // Remove the deleted note from the notes array
        return n._id !== note._id;
        })
      );
    } catch (error) {
      setError('Failed to delete the note. Please try again.');
    }
  }


  return (
    <main className="form-container">
      <h2>
        {date.toLocaleString([], {
          // dateStyle: 'medium',
          // timeStyle: 'long',
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZoneName: 'short',
          hour12: true,
        })}
      </h2>
      {visible ? (
        <form onSubmit={handleSubmitEdit}>
          <label>Edit Note</label>
          <input
            value={editNote}
            onChange={handleChange}
          />
          <button className="submit" type="submit">Save Edit</button>
        </form>
      ) : (
        <>
          <p>{note.text}</p>
          <button onClick={() => setVisible(true)}>Edit Note</button>
        </>
      )}
      <button onClick={handleDelete}>Delete Note</button>
      {error && <p>{error}</p>}
    </main>
  );
}


// displaying time without the second
// https://ianio.co.uk/snippets/using-tolocaletimestring-without-displaying-seconds
// https://www.w3schools.com/jsref/jsref_tolocalestring.asp


// visible
// https://dev.to/craicoverflow/controlling-component-visibility-with-react-hooks-32km