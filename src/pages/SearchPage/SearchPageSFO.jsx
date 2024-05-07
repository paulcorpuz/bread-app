import SearchFormSFO from '../../components/SearchForm/SearchFormSFO';

import { Heading, Text, Box } from '@chakra-ui/react'

export default function SearchPageSFO() {
  return (
    <Box>
      <br />
      <Heading fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
        search <Text as={'span'} color={'yellow.400'}>San Francisco</Text>
      </Heading>
      <br />

      <SearchFormSFO />

    </Box>
  );
};
