import { useState } from 'react';
import ProfileEditForm from '../ProfileEditForm/ProfileEditForm';

import { Box, Heading, Text, Image, Flex, HStack, Button, } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { CgMail } from 'react-icons/cg'


export default function Profile({ user, setUser }) {
  const [visible, setVisible] = useState(false);
  // const placeholderImageUrl = "https://i.imgur.com/bR1vf6R.png";

  return (
    <Box>
      <Flex align="center" mb={4}>
        <Image src={user.profilePic} alt="Profile Pic" w="50%" h="auto" mr={4} />

        <Box>
          <Heading as="h2" size="2xl" mb={2}>
            {user.name}
          </Heading>

          <HStack>
            <Icon as={CgMail} boxSize={6} />
            <Text fontSize='md' mr={1}>{user.email}</Text>
          </HStack>

          <HStack>

            <Text fontSize='md' mr={1}>{user.bio}</Text>
          </HStack>

          <br />
          {visible ? (
            <ProfileEditForm user={user} setUser={setUser} setVisible={setVisible} />
          ) : (
            <Button onClick={() => setVisible(true)} colorScheme="yellow" rounded={'full'} px={6}>
              edit profile
            </Button>
          )}
        </Box>
      </Flex>
    </Box>
  );
}



// Notes ---

//  <Image src={user.profilePic} alt="Profile Pic" w="50%" h="auto" mr={4} />

// {user.profilePic ? (
//   <Image src={user.profilePic} alt="Profile Pic" w="50%" h="auto" mr={4} />
// ) : (
//   <Image src={placeholderImageUrl} alt='Placeholder Pic' boxSize='40%' />
// )}
