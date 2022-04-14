/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { usePagination } from '@ajna/pagination';
import { Container, SimpleGrid, Skeleton } from '@chakra-ui/react';
import Animal from './Post';
import LocationForm from './LocationForm';
import FindPagination from './FindPagination';

function FindAFriend() {
  const initialAnimalState = Array.from({ length: 12 }, (v, i) => {
    return {};
  });
  const [isLoadedState, setIsLoadedState] = useState(false);
  const [animals, setAnimals] = useState(initialAnimalState);
  const [animalsCount, setAnimalsCount] = useState(0);
  const [zipState, setZipState] = useState('');

  const outerLimit = 1;
  const innerLimit = 2;

  const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
    total: animalsCount,
    limits: {
      outer: outerLimit,
      inner: innerLimit,
    },
    initialState: { currentPage: 1, pageSize: 12 },
  });

  // function to fetch animals and store in state
  async function fetchAnimals() {
    let search = {
      limit: 12,
      location: zipState,
      page: currentPage,
    };
    let searchParams = new URLSearchParams(search);
    try {
      setIsLoadedState(false);
      const response = await fetch(`/api/pets?${searchParams.toString()}`);
      const responseJSON = await response.json();
      setAnimals(responseJSON.animals);
      setIsLoadedState(true);
      setAnimalsCount(responseJSON.pagination.total_count);
    } catch (err) {
      console.log(err);
    }
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  function handleZipChange(zip) {
    setZipState(zip);
  }

  // upon initial render, run the fetchAnimals() function
  useEffect(() => {
    fetchAnimals();
  }, [zipState, currentPage]);

  return (
    <Container maxW="container.xl">
      <LocationForm onZipChange={handleZipChange} />
      <SimpleGrid minChildWidth="350px" spacing="40px">
        {animals.map(pet => {
          return (
            <Skeleton isLoaded={isLoadedState}>
              <Animal key={pet.id} pet={pet} />
            </Skeleton>
          );
        })}
      </SimpleGrid>
      <FindPagination
        currentPage={currentPage}
        pagesCount={pagesCount}
        pages={pages}
        onPageChange={handlePageChange}
      />
    </Container>
  );
}

export default FindAFriend;
