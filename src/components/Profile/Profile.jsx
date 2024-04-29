// --> takes prop from NotesPage (notes, setNotes)
export default function Profile({ user }) {
  return (
    <div className='Profile'>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
      <img src={user.profilePic} alt="Profile Picture" />
    </div>
  );
}