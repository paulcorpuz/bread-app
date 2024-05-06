import {
  Container,
  Stack,
  Heading,
  Text,
  Box,
  Flex,
  HStack,
  Link,
  UnorderedList,
  ListItem
} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function AboutPage() {
  return (
    <Container maxW={'3xl'}>
      {/* TODO: Text */}
      <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
        <Heading fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
          nobody likes a
          <br />
          <Text as={'span'} color={'yellow.400'}>
            soggy bottom.
          </Text>
        </Heading>

        <Text color={'gray.500'}>


          pan de city was developed by Paul Corpuz, developed using Mongo DB, Express, React, and Node
          featuring:
          <UnorderedList listStyleType="none">
            <ListItem><strong>CRUD Operations</strong> for managing bakery listings profile, and user reviews.</ListItem>
            <ListItem><strong>RESTful Routing</strong> for efficient API design.</ListItem>
            <ListItem><strong>Authentication</strong> to ensure user account and review integrity.</ListItem>
            <ListItem><strong>Google Places API</strong> integration to provide accurate information on local bakeries.</ListItem>
            <ListItem><strong>Chakra UI</strong> to enhance the overall user experience.</ListItem>
          </UnorderedList>
        </Text>

        {/* Socials */}
        <Flex justifyContent="center">
          <HStack>
            <Link href='https://www.linkedin.com/in/paul-corpuz/' isExternal>
              <IconButton aria-label='LinkedIn' colorScheme='blue' size='lg' fontSize='30px' icon={<FaLinkedin />} />
            </Link>

            <Link href='https://github.com/paulcorpuz/' isExternal>
              <IconButton aria-label='GitHub' size='lg' fontSize='30px' icon={<FaGithub />} />
            </Link>
          </HStack>
        </Flex>
      </Stack>


    </Container>
  );
}