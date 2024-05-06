import { useState } from "react";
import * as reviewsAPI from "../../utilities/reviews-api";

import {
  Avatar,
  Box,
  Text,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Flex,
  Heading,
  HStack,
  Spacer,
  IconButton,
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { PiStarFill, PiXCircleFill  } from 'react-icons/pi'


export default function ReviewCard({ user, review, bakeryId, fetchBakery }) {
  const [error, setError] = useState("");
  const date = new Date(review.createdAt)

  async function handleDeleteReview() {
    try {
      await reviewsAPI.deleteReview(bakeryId, review._id);
      await fetchBakery()
    } catch (error) {
      setError("Failed to delete review. Please try again.");
    }
  }

  return (
    <Card borderTop='4px' borderColor='yellow.400' bg='white'>
      <CardHeader>
        <Flex gap={5}>
          <Avatar src={user.profilePic} />
          <Box>
            <Heading as='h3' size='sm'>{user.name}</Heading>
            <Flex>
              <HStack>
                <Icon as={PiStarFill } boxSize={4} />
                <Text> {review.rating}</Text>
                <Spacer />
                <Text>({date.toLocaleString([], { month: 'long', day: 'numeric', year: 'numeric', })})</Text>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </CardHeader>

      <CardBody>
        <Text>{review.content}</Text>
      </CardBody>

      <CardFooter>
        {user && (
          <Flex justify="flex-end">
            <p>bb</p>
          < IconButton
            onClick={handleDeleteReview}
            // isRound={true}
            variant='solid'
            colorScheme='teal'
            aria-label='Delete Review'
            fontSize='20px'
            icon={<PiXCircleFill />}
          />
          </Flex>
        )}
      </CardFooter>

      {error && <p>{error}</p>}
    </Card>
  );
}

// displaying time without the second
// https://ianio.co.uk/snippets/using-tolocaletimestring-without-displaying-seconds
// https://www.w3schools.com/jsref/jsref_tolocalestring.asp


// visible
// https://dev.to/craicoverflow/controlling-component-visibility-with-react-hooks-32km