import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as bakeriesApi from "../../utilities/bakeries-api";

import ReviewForm from "../../components/ReviewForm/ReviewForm";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
// import LocationCard from "../../components/LocationCard/LocationCard";

import {
  Image,
  Link,
  Box,
  Text,
  Heading,
  HStack,
  VStack,
  Flex,
  Spacer,
  SimpleGrid,

} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { PiStarFill , PiCurrencyCircleDollarBold, PiPhoneFill, PiLinkSimpleBold, PiMapTrifoldBold, PiCalendarDotsBold } from 'react-icons/pi'

export default function BakeryShowPage({ user }) {
  const [bakery, setBakery] = useState(null)
  const { id } = useParams()
  const [reviews, setReviews] = useState([])


  //getting Bakery info
  async function fetchBakery() {
    try {
      const bakeryData = await bakeriesApi.show(id);
      setBakery(bakeryData);
      setReviews(bakeryData.reviews);
      console.log(bakeryData.reviews)
    } catch (error) {
      console.error("Failed to fetch bakery details", error);
    }
  }

  // function getBakeryImage() {
  //   if (bakery && bakery.photos[0].photo_reference) {
  //     return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${bakery.photos[0].photo_reference}&key=${process.env.REACT_APP_GOOGLE_PLACES_KEY}`;
  //   }
  //   return "https://i.imgur.com/on1iU8m.png";
  // }

  //getting Bakery info
  useEffect(function () {
    fetchBakery();
  }, [id]);


  const textStyles = {
    fontSize: 'lg',
  }


  return (
    <main>
      {bakery ? (
        <Box>
          <Flex direction={['column', 'row']} align="center" justify="center">
            {/* Bakery Image */}
            <Image src="https://i.imgur.com/on1iU8m.png" alt='Bakery Pic' boxSize='40%' />

            {/* Bakery Info */}
            <Box p={0} m={0}>
              <VStack>
                <Heading size='2xl'>{bakery.name}</Heading>
                <Flex>
                  <HStack>
                    <Icon as={PiStarFill } boxSize={6} />
                    <Text fontSize='md'>{bakery.googRating}</Text>
                    <Text fontSize='md'>({bakery.googUserRatingTotal} reviews)</Text>
                    <Spacer />
                    <Icon as={PiCurrencyCircleDollarBold } boxSize={6} />
                    <Text fontSize='md'>{bakery.priceLevel}</Text>
                    <Spacer />
                    <Text fontSize='md'><strong>Takeout:</strong> {bakery.takeOut ? 'Yes' : 'No'}</Text>
                    <Spacer />
                    <Text fontSize='md'><strong>Dine-in:</strong> {bakery.dineIn ? 'Yes' : 'No'}</Text>
                  </HStack>
                </Flex>
                <Text sx={textStyles}>{bakery.editorialSummary.overview}</Text>
              </VStack>
            </Box>
          </Flex>

          {/* Location */}
          <Box p={0} m={0}>
            <VStack>
              <Heading size='lg'>Location and Hours</Heading>
              <Flex>
                  <HStack>
                  <Icon as={PiMapTrifoldBold } boxSize={6} />
                  <Text sx={textStyles}>{bakery.address ? bakery.address : 'Unavailable'}</Text>
                  </HStack>
              </Flex>
              <Flex>
                  <HStack>
                  <Icon as={PiLinkSimpleBold } boxSize={6} />
                  <Text sx={textStyles}><Link href={bakery.website} isExternal> {bakery.website} </Link></Text>
                  </HStack>
              </Flex>
              <Flex>
                  <HStack>
                  <Icon as={PiPhoneFill } boxSize={6} />
                  <Text sx={textStyles}>{bakery.phoneNumber ? bakery.phoneNumber : 'Unavailable'}</Text>
                  </HStack>
              </Flex>
              {bakery.openingHours && (
                <div>
                  <Flex>
                    <HStack>
                      <Icon as={PiCalendarDotsBold} boxSize={6} />
                      <Heading size='md'>Opening Hours:</Heading>
                    </HStack>
                  </Flex>
                  {bakery.openingHours.weekday_text.map((day, index) => (
                    <p key={index}>{day}</p>
                  ))}
                </div>
              )}
            </VStack>
          </Box>
          <br />

          {/* if the user is logged in */}
          {user ? (
              <ReviewForm user={user} bakeryId={bakery._id} fetchBakery={fetchBakery} />
            ) : (
              <Text>Please log in to leave a review.</Text>
            )}
          <br />

          {/* Review Info */}
          <SimpleGrid columns={2} spacing={2} minChildWidth='400px'>
            {reviews.map((review) => (
              <ReviewCard key={review._id} bakeryId={bakery._id} review={review} user={user} fetchBakery={fetchBakery} />
            ))}
          </SimpleGrid>

        </Box>
      ) : (
        <Text sx={textStyles}>Loading!!</Text>
      )}
    </main>
  );
}









// https://www.guvi.in/blog/how-to-render-an-array-of-objects-in-react/


// https://reactrouter.com/en/main/hooks/use-params

// useEffect = side effects, 2 parameters, function and array of dependencies
// fetches bakery data using BakeriesApi.show (from util) when the component mounts 
// or when the id (use params) changes