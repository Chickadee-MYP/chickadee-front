import {
  Container,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

function LocationForm(props) {
  //handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    console.log('handleSubmit: ' + e.target.zip.value);
    props.onZipChange(e.target.zip.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction={'row'}>
      <FormControl marginLeft={'4%'} marginTop={'5%'} mb={'15px'}>
        {/* <FormLabel htmlFor="zip">Location</FormLabel> */}
        <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'300px'}>
          <Input
            id={'zip'}
            name={'zip'}
            pattern='^\s*?\d{5}(?:[-\s]\d{4})?\s*?$'
            required
            type={'text'}
            placeholder={'Zip Code'}
            color={useColorModeValue('gray.800', 'gray.200')}
            bg={useColorModeValue('gray.100', 'gray.600')}
            rounded={'md'}
            border={0}
            _focus={{
              bg: useColorModeValue('gray.200', 'gray.800'),
              outline: 'none',
            }}
          />
          <Button
            type={'submit'}
            bg={'blue.400'}
            rounded={'md'}
            color={'white'}
            flex={'1 0 auto'}
            _hover={{ bg: 'blue.500' }}
            _focus={{ bg: 'blue.500' }}>
            Search
          </Button>
        </Stack>
      </FormControl>
      </Stack>
    </form>
  );
}

export default LocationForm;
