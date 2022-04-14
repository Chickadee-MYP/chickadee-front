import {
  Pagination,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
  PaginationContainer,
  PaginationPageGroup,
} from '@ajna/pagination';
import { useColorModeValue } from '@chakra-ui/react';

const FindPagination = ({ currentPage, onPageChange, pagesCount, pages }) => {
  function handlePageChange(page) {
    onPageChange(page);
  }

  const paginationBG = useColorModeValue('gray.200', 'gray.700');
  const paginationColor = useColorModeValue('gray.800', 'gray.200');
  return (
    <Pagination
      pagesCount={pagesCount}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    >
      <PaginationContainer
        align="center"
        justify="space-between"
        p={4}
        w="full"
      >
        <PaginationPrevious>Previous</PaginationPrevious>
        <PaginationPageGroup isInline align="center">
          {pages.map(page => (
            <PaginationPage
              w={9}
              bg={paginationBG}
              color={paginationColor}
              key={`pagination_page_${page}`}
              page={page}
              fontSize="sm"
              _hover={{
                bg: 'green.300',
              }}
              _current={{
                bg: 'green.300',
                fontSize: 'sm',
                w: 9,
              }}
            />
          ))}
        </PaginationPageGroup>
        <PaginationNext>Next</PaginationNext>
      </PaginationContainer>
    </Pagination>
  );
};

export default FindPagination;
