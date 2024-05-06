import { Link as RouterLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

import {
  Flex,
  Heading,
  Spacer,
  Button,
  Link as ChakraLink,
  HStack,
  Avatar,
  AvatarBadge,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react'


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

  const NavStyle = {
    textAlign: 'center',
    ':hover': {
      bg: 'yellow.400',
    }
  }


  return (
    <Flex as='Nav' p='10px' alignItems='center' gap='10px'>
      <ChakraLink as={RouterLink} to="/" sx={NavStyle}>
        <Heading as='h1' fontSize='2xl'>🍞 pan de replay</Heading>
      </ChakraLink>
      <ChakraLink as={RouterLink} to="/bakeries" sx={NavStyle}>bakeries</ChakraLink>
      {user && <ChakraLink as={RouterLink} to="/search" sx={NavStyle}>find bakeries</ChakraLink>}
      <ChakraLink as={RouterLink} to="/about" sx={NavStyle}>about</ChakraLink>
      <Spacer />

      {user ? (
        // * Logged-in user
        <HStack spacing='15px'>
          <span><strong>looking fresh, {user.name}!</strong></span>
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}>
              <Avatar src={user.profilePic}>
                <AvatarBadge width='1.3em' bg='teal.400'>
                  <Text fontSize='xs' color='white'>3</Text>
                </AvatarBadge>
              </Avatar>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <ChakraLink as={RouterLink} to="/profile">Profile</ChakraLink>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <ChakraLink as={RouterLink} to="/" onClick={handleLogOut}>Log out</ChakraLink>
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>

      ) : (
        // * Logged-out user
        <HStack spacing='15px'>
          <ChakraLink as={RouterLink} to="/login" onClick={handleLogin} sx={NavStyle}>log in</ChakraLink>
          <Button as={RouterLink} to="/signup" colorScheme="yellow" onClick={handleSignUp}>sign up</Button>
        </HStack>
      )}

    </Flex>
  );
}




/* === Notes === */
// &nbsp; = non-breaking space. space that will not break into a new line