import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
// import NewOrderPage from '../NewOrderPage/NewOrderPage';
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import NoteForm from '../../components/NoteForm/NoteForm';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // fetch notes from the API
    // set the notes state with the response
  }, []);

  function addNote(text) {
    // create a new note object with the text and the current user's ID
    // send a POST request to the API to create the new note
    // add the new note to the notes state
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
            <NoteForm addNote={addNote} />
          </div>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}