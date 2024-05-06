import LoginForm from '../../components/LoginForm/LoginForm';

import {
  Flex,
  Heading,
  Stack,
  Image,
} from '@chakra-ui/react';

export default function LoginPage({ setUser }) {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>welcome back!</Heading>

          {/* LoginForm component */}
          <LoginForm setUser={setUser} />
        </Stack>
      </Flex>
      
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={'https://i.imgur.com/sTJdMtM.jpg'}
        />
      </Flex>
    </Stack>
  );
}
