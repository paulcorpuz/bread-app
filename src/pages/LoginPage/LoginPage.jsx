// import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';


// --> takes prop from App Page (setUser)
export default function LoginPage({ setUser }) {
  // const [showSignUp, setShowSignUp] = useState(false);

  return (
    <main>
      <h1>login form</h1>
        <LoginForm setUser={setUser} />
    </main>
  );
}
