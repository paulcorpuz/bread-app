import { Box, Container, Heading, Text } from '@chakra-ui/react'


// --> takes prop from App Page ()
export default function AboutPage() {

  const boxStyles ={
    p: '10px',
    bg: 'purple.400',
    m: '10px',
    textAlign: 'center',
    filter: 'blur(2px)',
    ':hover': {
      color: 'black',
      bg: 'blue.200',
    }
  }

  return (
    <Container as='section' maxWidth='4xl' py='20px'>
      <Heading my="30px" p="10px">What is this? An about page for ants?</Heading>
      <Text ml="30px">Testing 1 </Text>
      <Text ml="30px" color="blue.300" fontWeight="bold">Testing 2 </Text>
      
      <Box my="30px" p="20px" bg='orange'>
        <Text ml="30px">Testing 3 </Text>
      </Box>


      <Box sx={boxStyles}>
        Hello Paul
      </Box>
    </Container>
  );
}
