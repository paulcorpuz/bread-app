import { Card, CardHeader, CardBody, CardFooter, Button, Divider, Image, Stack, Heading, Text} from '@chakra-ui/react'
import { useState } from "react";
import * as bakeriesAPI from "../../utilities/bakeries-api";


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
    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
      {bakery.photos && bakery.photos.length > 0 && (
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${bakery.photos[0].photo_reference}&key=${process.env.REACT_APP_GOOGLE_PLACES_KEY}`}
          alt={bakery.name}
          className="Bakery Photo"
        />
      )}

      <Stack>
        <CardBody>
          <Heading size='md'>{bakery.name}</Heading>
          {bakery.formatted_address && <Text py='2'>{bakery.formatted_address}</Text>}
          {bakery.price_level && <Text py='2'>Price Level: {bakery.price_level}</Text>}
          {bakery.rating && <Text py='2'>Rating: {bakery.rating}</Text>}
          {bakery.formatted_phone_number && <Text py='2'>Phone: {bakery.formatted_phone_number}</Text>}
          {bakery.delivery && <Text py='2'>Delivery: {bakery.delivery}</Text>}
          {/* TODO: check out basic info, cannot use formatted_phone_number */}
        </CardBody>

        {/* <Divider /> */}
        <CardFooter>
          <Button onClick={handleSubmitBakery} variant='solid' colorScheme='yellow'>
            Save Bakery
          </Button>
        </CardFooter>
        {error && <Text py='2'>{error}</Text>}
      </Stack>




    </Card>
  );
}






// {bakery.formatted_address && <p>Address: {bakery.formatted_address}</p>} 
// react conditional rendering renders the address 
// only if bakery.formatted_address exists and is truthy. Otherwise, it doesn't render anything.