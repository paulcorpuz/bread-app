import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';


// --> takes prop from App Page (setUser)
export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <h1>AuthPage</h1>
      {showSignUp ?
        <SignUpForm setUser={setUser} />
        :
        <LoginForm setUser={setUser} />
      }
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
    </main>
  );
}

/* === Notes === */
//import LoginForm component
//import SignUpFrom component

// --> takes prop from App Page
// export default function AuthPage (setUser)
  // state of showSignUp, initial state is false

// return statement
//  main element
  // If showSignUp is false, the login form is shown with with setUser fnc passed as a prop
  // If showSignUp is true, the sign-up form is shown with setUser fnc passed as a prop