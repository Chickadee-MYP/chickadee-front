/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PostDetails() {
  let { authorId, id } = useParams();
  const [pet, setPet] = useState({});

  async function fetchPostDetails() {
    try {
      const response = await fetch(`/api/v1/authors/${authorId}/posts/${id}`);
      const responseJSON = await response.json();
      setPet(responseJSON);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPostDetails();
  }, [authorId, id]);

  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={'md'}
            alt={'pet image'}
            src={
              pet.animal?.primary_photo_cropped.medium
                ? pet.animal.primary_photo_cropped.medium
                : '/images/dog-placeholder.png'
            }
            fit={'contain'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              {pet.animal?.name}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}
            >
              {pet.animal?.breeds_label}
            </Text>
            <Text
              color={useColorModeValue('gray.500', 'gray.400')}
              fontSize={'2xl'}
              fontWeight={'300'}
            >
              {pet.animal?.age} • {pet.animal?.gender} • {pet.animal?.size}
            </Text>
          </Box>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}></VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
              >
                Facts about me
              </Text>
              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    HOUSE-TRAINED:
                  </Text>{' '}
                  {pet.animal?.attributes.house_trained ? 'Yes' : 'No'}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    VACCINATION UP TO DATE:
                  </Text>{' '}
                  {pet.animal?.attributes.shots_current ? 'Yes' : 'No'}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    SPAYED/NEUTERED:
                  </Text>{' '}
                  {pet.animal?.attributes.spayed_neutered ? 'Yes' : 'No'}
                </ListItem>
              </List>
            </Box>
          </Stack>
          <Text fontSize={'lg'}>{pet.animal?.description}</Text>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

export default PostDetails;
