import { Link as RouterLink } from 'react-router-dom';

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';

export default function HomePage() {


  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>

        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'yellow.400',
              zIndex: -1,
            }}>
            get that bread,
          </Text>
          <br />
          <Text as={'span'} color={'yellow.400'}>
            literally.
          </Text>
        </Heading>

        <Text maxW={'3xl'}>
          Satisfy your cravings and support local businesses. pan de city is your go-to source for finding the the best bakeries in town.
          Share your experiences, and help others find their slice, tart, or loaf of happiness.
        </Text>
        <Stack spacing={6} direction={'row'}>
          {/* <Button as={RouterLink} to="/signup" rounded={'full'} px={6} colorScheme={'yellow'}
          >
            get started
          </Button> */}
          <Button as={RouterLink} to="/about" rounded={'full'} px={6}>
            learn more
          </Button>
        </Stack>

        <Flex w={'full'} justify='center'>
          <Image
            src='https://i.imgur.com/bR1vf6R.png' alt='Hero Big Bread'
            height={{ sm: '24rem', lg: '28rem' }}
            // mt={{ base: 12, sm: 16 }}
          />
        </Flex>

      </Stack>
    </Container>
  );
}