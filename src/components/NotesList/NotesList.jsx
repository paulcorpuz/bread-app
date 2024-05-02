import Note from "../Note/Note";

import './NotesList.css';


// --> takes prop from NotesPage (notes, setNotes)
export default function NotesList({ notes, setNotes }) {
  return (
    <main className="NotesList">
      <h1>Notes List Component</h1>
      {notes.map(note => (
        <Note
          notes={notes}
          setNotes={setNotes}
          note={note}
          key={note._id}
        />
      ))}
    </main>
  );
}