import { useState } from 'react';
import { searchBakeries } from '../../utilities/bakeries-api';

import SearchCard from '../SearchCard/SearchCard';

import {
  FormControl,
  FormLabel,
  Button,
  Box,
  Input,
} from '@chakra-ui/react'


export default function SearchFormSFO() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  //search function searchQuery is set by USER, location and radius are ALWAYS set to Seattle, WA / 50000 m
  const handleSearch = async function () {
    try {
      const location = 'San Francisco, CA';
      const radius = 50000; // radius in meters
      const results = await searchBakeries(searchQuery, location, radius);
      console.log("look", results)
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching bakeries:', error);
    }
  };


  return (
    <>
    <Box
      // border={'3px solid black'}  
      rounded={'xl'}
      boxShadow={'xl'}
      bg='gray.300'
      p={4}
    >
      <FormControl isRequired mb='10px'>
        <FormLabel>find your next pita pal</FormLabel>
        <Input
          type="text"
          value={searchQuery}
          onChange={(evt) => setSearchQuery(evt.target.value)}
          placeholder="e.g., Franz Bakery"
          bg="white"
        />
      </FormControl>
      <Button onClick={handleSearch} colorScheme="yellow" rounded={'full'} px={6}>Search</Button>
      </Box>
      <br/>
      {/* style this */}
      <div>
        {searchResults.map((bakery) => (
          <SearchCard key={bakery.place_id} bakery={bakery} />
        ))}
      </div>



    </>


  );
}