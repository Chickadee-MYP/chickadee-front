import { Flex, Box, useColorModeValue, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Post({ post }) {
  return (
    <Link as={RouterLink} to={`/inspiration/${post.id}`}>
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {post.content}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Link>
  );
}

export default Post;
