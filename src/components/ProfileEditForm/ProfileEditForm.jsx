import { useState } from 'react';
import * as usersApi from "../../utilities/users-api";

import './ProfileEditForm.css';

export default function ProfileEditForm({ user, setUser }) {
  const [editProfile, setEditProfile] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio,
    profilePic: user.profilePic
  });
  const [error, setError] = useState('');


  // Edit Profile
  function handleChangeEdit(evt) {
    const updatedProfileData = {...editProfile, [evt.target.name]: evt.target.value};

    setEditProfile(updatedProfileData);
    setError('');
  }

  async function handleSubmitEdit(evt) {
    evt.preventDefault();
    try {
      const updatedUser = await usersApi.edit(user._id, editProfile);
      setUser(updatedUser); // Update the user state with the updated user data
    } catch (error) {
      setError('Failed to update profile. Please try again.');
    }
  }

  return (
    <main className="ProfileEditForm">
      <h1>ProfileEditForm Component</h1>
      <form onSubmit={handleSubmitEdit}>
        <label>name</label>
        <input
          type="text"
          name="name"
          value={editProfile.name}
          onChange={handleChangeEdit}
        />

        <label>email</label>
        <input
          type="email"
          name="email"
          value={editProfile.email}
          onChange={handleChangeEdit}
        />

        <label>bio</label>
        <input
          name="bio"
          value={editProfile.bio}
          onChange={handleChangeEdit}
        />

        <label>profile pic URL</label>
        <input
          type="text"
          name="profilePic"
          value={editProfile.profilePic}
          onChange={handleChangeEdit}
        />

        <button type="submit">Save Changes</button>
        <p>{error}</p>
      </form>
    </main>
  );
}
