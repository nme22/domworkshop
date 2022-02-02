import { Container, Flex } from '@chakra-ui/react';
import Navbar from '@components/Navbar';

export default function Layout({ children }) {
  return (
    <Flex w="full" h="full" direction="column">
      <Navbar />
      <Container display="flex" justifyContent="center" maxW="2x1">
        {children}
      </Container>
    </Flex>
  );
}
