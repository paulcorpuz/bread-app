import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';

import {
  FormControl,
  FormLabel,
  Button,
  Box,
  Flex,
  Input,
  Link as ChakraLink,
  Text,
  Stack,
  Checkbox,
  Link,
} from '@chakra-ui/react'


// --> takes prop from App Page (setUser)
export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');


  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }


  async function handleSubmit(evt) {
    evt.preventDefault(); // Prevent form from being submitted to the server
    try {
      // The promise returned by the signUp service method will resolve to the user object 
      // included in the payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }


  return (
    <>
      <Box
        // border={'3px solid black'}  
        rounded={'xl'}
        boxShadow={'xl'}
        bg='gray.300'
        p={4}
      >
        <form autoComplete="off" onSubmit={handleSubmit}>
          <FormControl isRequired mb='10px'>
            <FormLabel>email</FormLabel>
            <Input
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              bg="white"
            />
          </FormControl>

          <FormControl isRequired mb='10px'>
            <FormLabel>password</FormLabel>
            <Input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              bg="white"
            />
          </FormControl>

          <Stack spacing={6} mb='10px'>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox colorScheme='yellow'>remember me</Checkbox>
              <Link color={'blue.500'}>forgot password?</Link>
            </Stack>
          </Stack>




          <Flex justify="flex-end">
            <Button type="submit" colorScheme="yellow" rounded={'full'} px={6}>
              log in
            </Button>
          </Flex>
        </form>
        {error && <p>{error}</p>}
      </Box>

      <br />
      <Text>new to pan de replay? <ChakraLink as={RouterLink} to={`/signup`}><strong>sign up</strong></ChakraLink></Text>

    </>
  );
}
