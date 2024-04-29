// import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';


// --> takes prop from App Page (setUser)
export default function SignUpPage({ setUser }) {
  // const [showSignUp, setShowSignUp] = useState(false);

  return (
    <main>
      <h1>signup form</h1>
        <SignUpForm setUser={setUser} />
    </main>
  );
}
