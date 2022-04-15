/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
// import { usePagination } from '@ajna/pagination';
import { Container, SimpleGrid, Skeleton } from '@chakra-ui/react';
import Post from './Post';
// import LocationForm from './LocationForm';
// import FindPagination from './FindPagination';

function Inspiration() {
  const initialPostState = Array.from({ length: 12 }, (v, i) => {
    return {};
  });
  const [isLoadedState, setIsLoadedState] = useState(false);
  const [posts, setPosts] = useState(initialPostState);
  // const [postsCount, setPostsCount] = useState(0);
  // const [zipState, setZipState] = useState('');

  // const outerLimit = 1;
  // const innerLimit = 2;

  // const { currentPage, setCurrentPage, pagesCount, pages } = usePagination({
  //   total: postsCount,
  //   limits: {
  //     outer: outerLimit,
  //     inner: innerLimit,
  //   },
  //   initialState: { currentPage: 1, pageSize: 12 },
  // });

  // function to fetch posts and store in state
  async function fetchPosts() {
    // let search = {
    //   limit: 12,
    //   location: zipState,
    //   page: currentPage,
    // };
    // let searchParams = new URLSearchParams(search);
    try {
      setIsLoadedState(false);
      // const response = await fetch(`/api/v1/posts?${searchParams.toString()}`);
      const response = await fetch(`/api/v1/posts`);
      const responseJSON = await response.json();
      setPosts(responseJSON.posts);
      setIsLoadedState(true);
      // setPostsCount(responseJSON.pagination.total_count);
    } catch (err) {
      console.log(err);
    }
  }

  // function handlePageChange(page) {
  //   setCurrentPage(page);
  // }

  // function handleZipChange(zip) {
  //   setZipState(zip);
  // }

  // upon initial render, run the fetchPosts() function
  useEffect(() => {
    fetchPosts();
  }, []);
  // }, [zipState, currentPage]);

  return (
    <Container maxW="container.xl">
      {/* <LocationForm onZipChange={handleZipChange} /> */}
      <SimpleGrid minChildWidth="350px" spacing="40px">
        {posts.map(post => {
          return (
            <Skeleton isLoaded={isLoadedState}>
              <Post key={post.id} post={post} />
            </Skeleton>
          );
        })}
      </SimpleGrid>
      {/* <FindPagination
        currentPage={currentPage}
        pagesCount={pagesCount}
        pages={pages}
        onPageChange={handlePageChange}
      /> */}
    </Container>
  );
}

export default Inspiration;
