import { useState } from 'react';
import * as usersApi from "../../utilities/users-api";

import {
  FormControl,
  FormLabel,
  Button,
  Box,
  Flex,
  Input,
} from '@chakra-ui/react'


export default function ProfileEditForm({ user, setUser }) {
  const [editProfile, setEditProfile] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio,
    profilePic: user.profilePic
  });
  const [error, setError] = useState('');


  // Edit Profile "handle input"
  function handleChangeEdit(evt) {
    const updatedProfileData = { ...editProfile, [evt.target.name]: evt.target.value };

    setEditProfile(updatedProfileData);
    setError('');
  }


  // "save updates" form
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
    <Box
      // border={'3px solid black'}  
      rounded={'xl'}
      boxShadow={'xl'}
      bg='gray.300'
      p={4}
    >
      <form onSubmit={handleSubmitEdit}>
        <FormControl mb='10px'>
          <FormLabel>name</FormLabel>
          <Input
            type="text"
            name="name"
            value={editProfile.name}
            onChange={handleChangeEdit}
            bg="white"
          />
        </FormControl>

        <FormControl mb='10px'>
          <FormLabel>email</FormLabel>
          <Input
            type="email"
            name="email"
            value={editProfile.email}
            onChange={handleChangeEdit}
            bg="white"
          />
        </FormControl>

        <FormControl mb='10px'>
          <FormLabel>bio</FormLabel>
          <Input
            type="text"
            name="bio"
            value={editProfile.bio}
            onChange={handleChangeEdit}
            bg="white"
          />
        </FormControl>

        <FormControl mb='10px'>
          <FormLabel>profile pic url</FormLabel>
          <Input
            type="text"
            name="profilePic"
            value={editProfile.profilePic}
            onChange={handleChangeEdit}
            bg="white"
          />
        </FormControl>

        <Flex justify="flex-end">
            <Button type="submit" colorScheme="yellow" rounded={'full'} px={6} >save changes</Button>
          </Flex>
      </form>
      <p>{error}</p>
    </Box>
  );
}
