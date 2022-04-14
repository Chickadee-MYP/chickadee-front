import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function Hero() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Share an inspiration <br />
            <Text as={'span'} color={'green.400'}>
              today!
            </Text>
          </Heading>
          <Text color={useColorModeValue('gray.700', 'gray.200')}>
            A random musing can not only be your friend but an inspiration to
            others. Make our society inspired complete with your musing.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Link
              as={RouterLink}
              to={'/inspiration'}
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme={'green'}
                bg={'green.400'}
                rounded={'full'}
                px={6}
                _hover={{
                  bg: 'green.500',
                }}
              >
                Get Started
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default Hero;
