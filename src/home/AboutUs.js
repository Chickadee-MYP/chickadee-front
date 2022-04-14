import { Container, Heading, Stack, Text, Image } from '@chakra-ui/react';

function AboutUs() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'left'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        pb={{ base: 20, md: 28 }}
        pt={{ base: 10, md: 20 }}
      >
        {/* <Image
          boxSize="xl"
          objectFit="cover"
          src="https://www.obol.info/wp-content/uploads/2019/08/OBOL_Puppy_FencedIn-768x788.jpg"
          alt=""
        /> */}
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Micro-journaling{' '}
          <Text as={'span'} color={'orange.400'}>
            made easy
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'} fontSize={'xl'}>
          Chickadee-MYP is the result of a collaborative effort among four
          aspiring developers.
        </Text>
        <Text color={'gray.500'} maxW={'3xl'} fontSize={'xl'}>
          {' '}
          Our initiative “Open minds” seeks to free our thoughts from internal
          cages. To achieve this, we provide a platform that removes barriers to
          new inpiration discovery. A platform in which journal lovers can share
          their next best inspiration, all while in the comfort of their home.
          We don’t stop there. Through inspirational highlights, we break down
          misconceptions of micro-journaling and celebrate the loving bond among
          humans and musings. Through informative guidance to caring humans, we
          keep dialogue healthy and nurtured in loving spaces.
        </Text>
      </Stack>
    </Container>
  );
}

export default AboutUs;
