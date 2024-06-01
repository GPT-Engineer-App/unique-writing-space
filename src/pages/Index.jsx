import { Container, VStack, Box, Heading, Text, Flex, Spacer, Link, Button, Input, Textarea } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Heading as="h1" size="lg">
          My Blog
        </Heading>
        <Spacer />
        <Box>
          <Link as={RouterLink} to="/" p={2}>
            Home
          </Link>
          <Link as={RouterLink} to="#about" p={2}>
            About Me
          </Link>
          <Link as={RouterLink} to="#contact" p={2}>
            Contact
          </Link>
        </Box>
      </Flex>

      <Box as="section" p={4}>
        <Heading as="h2" size="xl" mb={4}>
          Blog Posts
        </Heading>
        <VStack spacing={4} align="stretch">
          <Box p={4} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md">
              Blog Post Title 1
            </Heading>
            <Text mt={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
          <Box p={4} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md">
              Blog Post Title 2
            </Heading>
            <Text mt={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
        </VStack>
      </Box>

      <Box as="section" id="about" p={4} bg="gray.100">
        <Heading as="h2" size="xl" mb={4}>
          About Me
        </Heading>
        <Text>
          Hi, I'm [Your Name], a passionate blogger who loves to write about [topics of interest]. Welcome to my personal blog where I share my thoughts, experiences, and insights.
        </Text>
      </Box>

      <Box as="section" id="contact" p={4}>
        <Heading as="h2" size="xl" mb={4}>
          Contact Me
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <Input
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              placeholder="Your Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Textarea
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button type="submit" colorScheme="blue">
              Send Message
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default Index;