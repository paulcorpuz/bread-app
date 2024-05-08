import { useState } from "react";
import * as reviewsAPI from "../../utilities/reviews-api";

import {
  FormControl,
  FormLabel,
  Textarea,
  Select,
  Button,
  Box,
  Flex,
} from '@chakra-ui/react'

export default function ReviewForm({ user, bakeryId, fetchBakery }) {
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(1);
  const [error, setError] = useState('');

  // Handle input change
  function handleChange(evt) {
    const { value } = evt.target;
    setContent(value);
    setError('');
  }

  // Handle form submission
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await reviewsAPI.create(bakeryId, { content, rating });
      await fetchBakery()
      setContent("");
      setRating(1);
    } catch (error) {
      console.error("Failed to create review", error);
      setError('Failed to create review. Please try again.');
    }
  }

  // Don't render the form for logged out users. !user return NULL
  if (!user) {
    return null;
  }


  return (
    <Box 
      // border={'3px solid black'}  
      rounded={'xl'}
      boxShadow={'xl'} 
      bg='gray.300' 
      p={4}>
      <form onSubmit={handleSubmit}>
        {/* Review Textarea */}
        <FormControl isRequired mb='10px'>
          <FormLabel>review</FormLabel>
          <Textarea
            value={content}
            onChange={handleChange}
            placeholder="say something nice.. or not, live your truth sis"
            bg="white"
          />
        </FormControl>

        {/* Rating Select */}
        <FormControl isRequired mb='10px'>
          <FormLabel>rating</FormLabel>
          <Select value={rating} onChange={(evt) => setRating(evt.target.value)} placeholder='Select Rating' bg="white">
            <option value="1">1 star</option>
            <option value="2">2 stars</option>
            <option value="3">3 stars</option>
            <option value="4">4 stars</option>
            <option value="5">5 stars</option>
          </Select>
          <br />
          
          {/* Submit Button */}
          <Flex justify="flex-end">
            <Button type="submit" colorScheme="yellow" rounded={'full'} px={6}>submit</Button>
          </Flex>
        </FormControl>

        {/* Error Message */}
        {error && <p>{error}</p>}
      </form>
    </Box>
  );
}