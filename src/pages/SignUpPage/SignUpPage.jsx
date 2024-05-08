import { Link as RouterLink } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

import {
  Flex,
  Heading,
  Stack,
  Image,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';


export default function SignUpPage({ setUser }) {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'3xl'}>sign up for an account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all our cool <ChakraLink as={RouterLink} to='/about' color={'blue.500'}>features</ChakraLink> ✌️
          </Text>
          
          {/* signUpForm component */}
          <SignUpForm setUser={setUser} />
        </Stack>
      </Flex>
      
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={'https://i.imgur.com/LJukNyW.jpg'}
        />
      </Flex>
    </Stack>
  );
}
