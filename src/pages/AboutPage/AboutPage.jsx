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
    <>
      <br />
      <Heading fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
        nobody likes a <Text as={'span'} color={'yellow.400'}>soggy bottom</Text>
      </Heading>
      <Container maxW="container.lg" mt={8}>
        <Stack spacing={8} textAlign="center">

          <Text fontSize="xl">
          nothing is worse than under baked bread, and pan de city was created to help you find that perfect bake.
          </Text>

          <Text>
          pan de city is a platform that helps users discover and review local bakeries. Users are able to search for businesses 
          based in the Seattle, San Francisco, and New York City areas, where they can read reviews from other users, 
          and find contact business information to help find the best bake in town.
          <br />
          <br />
          pan de city is brought to you by Paul Corpuz, developed using Mongo DB, Express, React, and Node featuring:
          </Text>

          <UnorderedList textAlign="left" ml={8} listStyleType="none">
            <ListItem><strong>CRUD Operations:</strong> for managing bakery listings profile, and user reviews.</ListItem>
            <ListItem><strong>RESTful Routing:</strong> for efficient API design.</ListItem>
            <ListItem><strong>Authentication:</strong> to ensure user account and review integrity.</ListItem>
            <ListItem><strong>Google Places API Integration:</strong> to provide accurate information on local bakeries.</ListItem>
            <ListItem><strong>Chakra UI:</strong> to enhance the overall user experience.</ListItem>
          </UnorderedList>

          {/* Socials */}
          <HStack spacing={4} justifyContent="center">
            <Link href='https://www.linkedin.com/in/paul-corpuz/' isExternal>
              <IconButton aria-label='LinkedIn' colorScheme='blue' size='lg' fontSize='30px' icon={<FaLinkedin />} />
            </Link>

            <Link href='https://github.com/paulcorpuz/' isExternal>
              <IconButton aria-label='GitHub' size='lg' fontSize='30px' icon={<FaGithub />} />
            </Link>
          </HStack>
        </Stack>
      </Container>
    </>
  );
}