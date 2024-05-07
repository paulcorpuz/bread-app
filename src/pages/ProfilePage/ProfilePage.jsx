import Profile from "../../components/Profile/Profile";

import { Box, Heading, Text, Center } from '@chakra-ui/react'


// --> takes prop from App Page ()
export default function ProfilePage({ user, setUser }) {
  return (
    <Box>
      <br />
      <Heading fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
        <Text as={'span'} color={'yellow.400'}> profile</Text>
      </Heading>
      <br />
      
        <Profile user={user} setUser={setUser}/>
      </Box>
  );
}


// array sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://owlcation.com/stem/creating-a-sortable-list-in-react-js