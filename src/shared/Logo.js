import {
  Flex,
  Image,
  Text,
  useColorModeValue,
  useBreakpointValue,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Logo() {
  return (
    <Link
      as={RouterLink}
      to={'/'}
      _hover={{
        textDecoration: 'none',
      }}
    >
      <Flex minWidth={'175px'}>
        <Image boxSize="45px" objectFit="cover" src="/images/logo.png" alt="" />
        <Text
          textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
          mt={'15px'}
          fontFamily={'heading'}
          fontWeight={'800'}
          color={useColorModeValue('#2F190D', 'white')}
        >
          Chickadee-MYP
        </Text>
      </Flex>
    </Link>
  );
}

export default Logo;
