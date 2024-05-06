import SearchFormNYC from '../../components/SearchForm/SearchFormNYC';

import { Heading, Text } from '@chakra-ui/react'

export default function SearchPageNYC() {
  return (
    <div>
      <br />
      <Heading fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
        search <Text as={'span'} color={'yellow.400'}>New York City</Text>
      </Heading>
      <br />
      <SearchFormNYC/>



    </div>
  );
};
