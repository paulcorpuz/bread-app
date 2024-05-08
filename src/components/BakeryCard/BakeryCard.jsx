import { Link } from "react-router-dom";

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


export default function BakeryCard({ bakery }) {
  const placeholderImageUrl = "https://i.imgur.com/bR1vf6R.png";

  
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
      {bakery.photoURL ? (
        <Image src={bakery.photoURL} alt='Bakery Pic' objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }} />
      ) : (
        <Image src={placeholderImageUrl} alt='Placeholder Pic' boxSize='40%' />
      )}

      <Stack>
        <Heading size='md'>{bakery.name}</Heading>

        <CardBody>
          <HStack>
            <Icon as={PiStarFill} boxSize={6} />
            <Text fontSize='md' mr={1}>{bakery.googRating}</Text>
            <Text fontSize='md'>({bakery.googUserRatingTotal} reviews)</Text>
            <Spacer />
            <Icon as={PiCurrencyCircleDollarBold} boxSize={6} />
            <Text fontSize='md'>{bakery.priceLevel}</Text>
          </HStack>

          <HStack>
            <Text fontSize='md'><strong>takeout:</strong> {bakery.takeOut ? 'Yes' : 'No'}</Text>
            <Spacer />
            <Text fontSize='md'><strong>dine-in:</strong> {bakery.dineIn ? 'Yes' : 'No'}</Text>
          </HStack>
        </CardBody>

        <CardFooter justify={'center'}>
          <Button as={Link} to={`/bakeries/${bakery._id}`} colorScheme="yellow" rounded={'full'} px={6}>details</Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}