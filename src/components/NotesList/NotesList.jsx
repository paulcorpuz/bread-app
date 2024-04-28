import Note from "../Note/Note";

import './NotesList.css';


// --> takes prop from NotesPage (notes, setNotes)
export default function NotesList({ notes, setNotes }) {
  const note = notes.map(n =>
    <Note
      notes={notes}
      setNotes={setNotes}
      note={n}
      key={n._id}
    />
  );

  return (
    <main className="NotesList">
      {note}
    </main>
  );
}