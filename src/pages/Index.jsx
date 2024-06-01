import { Container, Box, VStack, Text, Heading, Flex, Spacer, Button, Input, Textarea, FormControl, FormLabel } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="teal.500" color="white" p={4} mb={8} borderRadius="md">
        <Heading size="md">My Blog</Heading>
        <Spacer />
        <Button as={Link} to="#about" variant="ghost" color="white">About Me</Button>
        <Button as={Link} to="#posts" variant="ghost" color="white">Blog Posts</Button>
        <Button as={Link} to="#contact" variant="ghost" color="white">Contact</Button>
      </Flex>

      <VStack spacing={8} align="stretch">
        <Box id="about" p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">About Me</Heading>
          <Text mt={4}>Hello! I'm a passionate blogger who loves to write about various topics. Welcome to my personal blog where I share my thoughts and experiences.</Text>
        </Box>

        <Box id="posts" p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Blog Posts</Heading>
          <VStack spacing={4} mt={4}>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" w="100%">
              <Heading fontSize="lg">First Blog Post</Heading>
              <Text mt={2}>This is a summary of my first blog post. Click to read more...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" w="100%">
              <Heading fontSize="lg">Second Blog Post</Heading>
              <Text mt={2}>This is a summary of my second blog post. Click to read more...</Text>
            </Box>
          </VStack>
        </Box>

        <Box id="contact" p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Contact Me</Heading>
          <FormControl mt={4}>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Your Name" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Your Email" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Your Message" />
          </FormControl>
          <Button mt={4} colorScheme="teal">Send</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;