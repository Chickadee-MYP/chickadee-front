import { Flex, Box, Image, useColorModeValue, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Animal({ pet }) {
  return (
    <Link as={RouterLink} to={`/findafriend/${pet.id}`}>
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Image
            src={
              pet.primary_photo_cropped?.medium
                ? pet.primary_photo_cropped.medium
                : '/images/dog-placeholder.png'
            }
            boxSize="350px"
            objectFit="contain"
            alt={`Picture of ${pet.name}`}
            roundedTop="lg"
          />
          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {pet.name}
              </Box>
            </Flex>
            <Box
              fontSize="sm"
              fontWeight="normal"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {`${pet.breeds?.primary}`}
            </Box>
          </Box>
        </Box>
      </Flex>
    </Link>
  );
}

export default Animal;
