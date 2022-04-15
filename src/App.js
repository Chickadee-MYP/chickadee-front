import { Route, Routes } from 'react-router-dom';
import { ChakraProvider, theme, Flex } from '@chakra-ui/react';
import { AuthProvider, useAuthState } from './services/auth.service';
import Navbar from './shared/layout/Navbar';
import ProtectedRoute from './shared/auth/ProtectedRoute';
import Home from './home/Home';
import Inspiration from './inspiration/Inspiration';
import Documentation from './home/Documentation';
import AboutUs from './home/AboutUs';
import Footer from './shared/layout/Footer';
// import PostDetails from './inspiration/PostDetails';
import Register from './shared/auth/Register';
import Login from './shared/auth/Login';

function App() {
  // const userDetails = useAuthState();

  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Flex minH="100vh" flexDirection="column">
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            {/* <Route element={<ProtectedRoute isAllowed={!!userDetails} />}> */}
            <Route path="/inspiration" element={<Inspiration />} />
            {/* </Route> */}
            <Route path="/documentation" element={<Documentation />} />
            {/* <Route path="/posts" element={<Posts />} /> */}
            {/* <Route
            path="/authors/:authorId/posts/:id"
            element={<PostDetails />}
          /> */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<p>Unable to find that page: 404!</p>} />
          </Routes>
          <Footer />
        </Flex>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
