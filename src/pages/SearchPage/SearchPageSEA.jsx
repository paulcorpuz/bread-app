import SearchFormSEA from '../../components/SearchForm/SearchFormSEA';

import { Heading, Text, } from '@chakra-ui/react'

export default function SearchPageSEA() {
  return (
    <div>
      <br />
      <Heading fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
      search <Text as={'span'} color={'yellow.400'}>Seattle</Text>
      </Heading>
      <br />
      <SearchFormSEA />



    </div>
  );
};
