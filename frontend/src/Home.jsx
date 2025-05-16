import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Image,
  Stack,
} from '@chakra-ui/react';

function Find() {
  return (
    <Box minH="100vh" bg="gray.50">
      {/* Navbar */}
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        p={4}
        bg="blue.200"
        color="black"
        boxShadow="md"
      >
        <Flex align="center">
          <Image
            src="https://raw.githubusercontent.com/kiwirafe/transcenders/refs/heads/main/frontend/src/assets/logo.png"
            alt="Logo"
            boxSize="40px"
            mr={3}
          />
          <Heading size="md" fontWeight="semibold">
            ZenVoyage
          </Heading>
        </Flex>
        <Flex gap={4}>
          <Button as={RouterLink} to="/chat" variant="ghost" color="black" _hover={{ bg: 'blue.400' }}>
            Chat
          </Button>
          <Button as={RouterLink} to="/find" variant="ghost" color="black" _hover={{ bg: 'blue.400' }}>
            Find
          </Button>
          <Button as={RouterLink} to="/travel" variant="ghost" color="black" _hover={{ bg: 'blue.400' }}>
            Travel
          </Button>
        </Flex>
      </Flex>

      {/* Main Content */}
      <Flex direction="column" align="center" p={6}>
        <Heading size="lg" textAlign="center" mt={4} mb={6}>
          ZenVoyage: Your AI Travel Companion
        </Heading>

        {/* Large Buttons Section */}
        <Stack spacing={6} mt={8}>
          <Button
            as={RouterLink}
            to="/chat"
            size="lg"
            colorScheme="blue"
            width="300px"
            height="60px"
          >
            Chat with Our Companion
          </Button>

          <Button
            as={RouterLink}
            to="/find"
            size="lg"
            colorScheme="blue"
            width="300px"
            height="60px"
          >
            Find Your Next Adventure
          </Button>

          <Button
            as={RouterLink}
            to="/travel"
            size="lg"
            colorScheme="blue"
            width="300px"
            height="60px"
          >
            Amazing Travel Places
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Find;