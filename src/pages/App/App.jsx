import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import NotesForm from '../../components/NotesForm/NotesForm';
// import NotesPage from '../NotesPage/NotesPage';

// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([
    { text: "Hi Paul"}
  ]);

  function addNote(note) {
    setNotes([...notes, note]);
  }

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            {/* <Route path="/orders/new" element={<NewOrderPage />} /> */}
            {/* <Route path="/orders" element={<OrderHistoryPage />} /> */}
            {/* <Route path="/" element={<NotesPage notes={notes} addNote={addNote} />} /> */}
          </Routes>



          <hr />
          <div>
            <h1>MERN Quick Notes</h1>
            {notes.length ? (
              <h2>No Notes Yet!</h2>
            ) : (
              <ul>
                {notes.map(note => (
                  <li key={note._id}>{note.text}</li>
                ))}
              </ul>
            )}
          </div>



          <hr />
          <div>
            <NotesForm addNote={addNote} />
          </div>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}