// import './ProfilePage.css';

import Profile from "../../components/Profile/Profile";


// --> takes prop from App Page ()
export default function ProfilePage({ user, setUser }) {
  return (
    <main className='ProfilePage'>
      <h1>Profile Page</h1>
      <Profile user={user} setUser={setUser}/>
    </main>
  );
}


// array sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://owlcation.com/stem/creating-a-sortable-list-in-react-js