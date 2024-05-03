import { Flex, Heading, Spacer, Button, Link as ChakraLink, HStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';


// --> takes prop from App Page (user, setUser)
export default function NavBar({ user, setUser }) {
  function handleSignUp() {
    userService.signUp();
  }

  function handleLogin() {
    userService.login();
  }

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  const NavStyle ={
    textAlign: 'center',
    ':hover': {
      bg: 'yellow.400',
    }
  }


  return (
    <Flex as='Nav' p='10px' alignItems='center' gap='10px'>
        <Heading as='h3'>🍞 Pan de Replay</Heading>
        <ChakraLink as={RouterLink} to="/" sx={NavStyle}>home</ChakraLink>
        <ChakraLink as={RouterLink} to="/bakeries" sx={NavStyle}>bakeries</ChakraLink>
        <ChakraLink as={RouterLink} to="/about" sx={NavStyle}>aboutREMOVE?</ChakraLink>
        <ChakraLink as={RouterLink} to="/notes" sx={NavStyle}>notesREMOVE?</ChakraLink>
      {user && <ChakraLink as={RouterLink} to="/search" sx={NavStyle}>find bakeries</ChakraLink>}
      <Spacer />

      {user ? (
        // Logged-in user
        <HStack spacing='10px'>
          <span>Hi {user.name}!!</span>
          <ChakraLink as={RouterLink} to="/profile" sx={NavStyle}>Profile</ChakraLink>
          <Button as={RouterLink} to="/" colorScheme="yellow" onClick={handleLogOut}>Log out</Button>
        </HStack>
      ) : (
        // Logged-out user
        <HStack spacing='10px'>
          <ChakraLink as={RouterLink} to="/signup" onClick={handleSignUp} sx={NavStyle}>Sign up</ChakraLink>
          <Button as={RouterLink} to="/login" colorScheme="yellow" onClick={handleLogin}>Login</Button>
        </HStack>
      )}

    </Flex>
  );
}


/* === Notes === */
// &nbsp; = non-breaking space. space that will not break into a new line