import { Box, SimpleGrid } from '@chakra-ui/react'


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
    <SimpleGrid p='10px' columns={4} spacing={10} minChildWidth='250px'>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>

      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>

      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>
      <Box bg='white' h='200px' border='1px solid'></Box>

    </SimpleGrid>









  );
}

