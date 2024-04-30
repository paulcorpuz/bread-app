import ProfileEditForm from '../ProfileEditForm/ProfileEditForm';
import './Profile.css';

// --> takes prop from ProfilePage (user, setUser)
export default function Profile({ user, setUser}) {


  return (
    <main className='Profile'>
      <h1>Profile Component</h1>
      <img src={user.profilePic} alt="Profile Pic" width="20%" height="auto"/>
      <h2>{user.name}</h2>
      <p>email: {user.email}</p>
      <p>bio: {user.bio}</p>
      <ProfileEditForm user={ user } setUser={ setUser } />
    </main>
  );
}