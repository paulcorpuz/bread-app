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
  Button,
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { PiStarFill } from 'react-icons/pi';

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
    <Card
      // direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      borderTop='8px'
      borderColor='yellow.400'
      bg='white'
      p={0}
      m={0}
    // textAlign='center'
    >
      <CardHeader>
        <Flex gap={5}>
          <Avatar src={review.profilePic} />
          <Box>
            <Heading as='h3' size='md' >{review.userName}</Heading>
            <Flex>
              <HStack>
                <Icon as={PiStarFill} boxSize={4} />
                <Text>{review.rating}</Text>
                <Spacer />
                <Text>reviewed on&nbsp;
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

      <CardFooter justify={'center'}>
        {isCurrentUser && (
          <Button onClick={handleDeleteReview} colorScheme="yellow" rounded={'full'} px={6}>delete</Button>
        )}
      </CardFooter>
      {error && <p>{error}</p>}
    </Card>
  );
}
