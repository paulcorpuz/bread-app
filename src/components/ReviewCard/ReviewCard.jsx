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
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { PiStarFill, PiXCircleFill } from 'react-icons/pi';

export default function ReviewCard({ user, review, bakeryId, fetchBakery }) {
  const [error, setError] = useState("");
  const date = new Date(review.createdAt);

  const isCurrentUser = user && user._id === review.user;

  async function handleDeleteReview() {
    try {
      await reviewsAPI.deleteReview(bakeryId, review._id);
      await fetchBakery();
    } catch (error) {
      setError("Failed to delete review. Please try again.");
    }
  }

  return (
    <Card borderTop='4px' borderColor='yellow.400' bg='white'>
      <CardHeader>
        <Flex gap={5}>
          <Avatar src={review.profilePic} />
          <Box>
            <Heading as='h3' size='sm'>{review.userName}</Heading>
            <Flex>
              <HStack>
                <Icon as={PiStarFill} boxSize={4} />
                <Text>{review.rating}</Text>
                <Spacer />
                <Text>
                  {date.toLocaleString([], {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </Text>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{review.content}</Text>
      </CardBody>
      <CardFooter>
        {isCurrentUser && (
          <Flex justify="flex-end">
            <IconButton
              onClick={handleDeleteReview}
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