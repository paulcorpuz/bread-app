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


export default function SearchFormNYC() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  //search function searchQuery is set by USER, location and radius are ALWAYS set to Seattle, WA / 50000 m
  const handleSearch = async function () {
    try {
      // const location = 'New York, NY';
      const latitude = 40.7128; // Example latitude for New York City
      const longitude = -74.0060; // Example longitude for New York City
      const radius = 50000; // radius in meters
      // const results = await searchBakeries(searchQuery, location, radius);
      const results = await searchBakeries(searchQuery, latitude, longitude, radius);
      console.log("---> look", results)
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
        <FormLabel>search for your next bagel buddy</FormLabel>
        <Input
          type="text"
          value={searchQuery}
          onChange={(evt) => setSearchQuery(evt.target.value)}
          placeholder="e.g., bagel buddy"
          bg="white"
        />
      </FormControl>
      <Button onClick={handleSearch} colorScheme="yellow" rounded={'full'} px={6}>search</Button>
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