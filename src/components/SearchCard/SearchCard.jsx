import { useState } from "react";
import * as bakeriesAPI from "../../utilities/bakeries-api";

import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
  Stack,
  Heading,
  Text,
  HStack,
  Spacer,
}
  from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { PiStarFill, PiCurrencyCircleDollarBold } from 'react-icons/pi'

export default function SearchCard({ bakery }) {
  const [error, setError] = useState('');

  // "save bakery"
  async function handleSubmitBakery() {
    try {
      await bakeriesAPI.create(bakery);
      console.log('Bakery saved successfully');
    } catch {
      setError('Failed to Save Bakery - Please Try Again');
    }
  }


  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      borderTop='8px'
      borderColor='yellow.400'
      bg='white'
      p={0}
      m={0}
      textAlign='center'
    >
      {bakery.photos && bakery.photos.length > 0 && (
        // bakery photo
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${bakery.photos[0].photo_reference}&key=${process.env.REACT_APP_GOOGLE_PLACES_KEY}`}
          alt={bakery.name}
        />
      )}

      <Stack>
        <Heading size='md'>{bakery.name}</Heading>

        {/* bakery info */}
        <CardBody>
        <HStack>
            <Icon as={PiStarFill} boxSize={6} />
            <Text fontSize='md' mr={1}>{bakery.rating}</Text>
            <Text fontSize='md'>({bakery.user_ratings_total} reviews)</Text>
            <Spacer />
            <Icon as={PiCurrencyCircleDollarBold} boxSize={6} />
            <Text fontSize='md'>{bakery.price_level}</Text>
          </HStack>
          <Spacer />
            {bakery.formatted_address && <Text>{bakery.formatted_address}</Text>}
            {bakery.formatted_phone_number && <Text>{bakery.formatted_phone_number}</Text>}

          <CardFooter justify={'center'}>
            <Button onClick={handleSubmitBakery} colorScheme="yellow" rounded={'full'} px={6}>
              save bakery
            </Button>
          </CardFooter>

          {error && <Text>{error}</Text>}
        </CardBody>
      </Stack>

    </Card>
  );
}






// {bakery.formatted_address && <p>Address: {bakery.formatted_address}</p>} 
// react conditional rendering renders the address 
// only if bakery.formatted_address exists and is truthy. Otherwise, it doesn't render anything.