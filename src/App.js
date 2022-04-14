import { Route, Routes } from 'react-router-dom';
import { ChakraProvider, theme, Flex } from '@chakra-ui/react';
import Navbar from './shared/layout/Navbar';
import Home from './home/Home';
import Inspiration from './inspiration/Inspiration';
import AboutUs from './home/AboutUs';
// import Posts from './inspiration/Posts';
import Footer from './shared/layout/Footer';
// import PostDetails from './inspiration/PostDetails';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex minH="100vh" flexDirection="column">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inspiration" element={<Inspiration />} />
          {/* <Route path="/posts" element={<Posts />} /> */}
          {/* <Route
            path="/authors/:authorId/posts/:id"
            element={<PostDetails />}
          /> */}
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
