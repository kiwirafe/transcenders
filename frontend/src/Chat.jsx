// frontend/src/App.js
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Input,
    Progress,
    Stack,
    useToast,
    Text,
} from '@chakra-ui/react';
import axios from 'axios';

function Chat() {
    const [query, setQuery] = useState('');
    const [recommendation, setRecommendation] = useState('');
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setRecommendation('');

        try {
            const res = await axios.post('https://transcenders-backend.vercel.app/api/chat', { query });
            setRecommendation(res.data.html);
        } catch (err) {
            console.error(err);
            toast({
                title: 'Error fetching recommendations.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
            setRecommendation('<p style="color: red;">Something went wrong. Please try again.</p>');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box className="App">
            {/* Navbar */}
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                p={2}
                bg="blue.200"
                color="black"
                boxShadow="md"
            >
                <Flex align="center">
                    <Image src="https://raw.githubusercontent.com/kiwirafe/transcenders/refs/heads/main/frontend/src/assets/logo.png" alt="Logo" boxSize="40px" mr={3} />
                    <Heading size="md" fontWeight="semibold">
                        ZenVoyage
                    </Heading>
                </Flex>
                <Flex gap={4}>
                    <Button
                        as={RouterLink}
                        to="/chat"
                        variant="ghost"
                        color="black"
                        _hover={{ bg: 'blue.400' }}
                    >
                        Chat
                    </Button>
                    <Button
                        as={RouterLink}
                        to="/find"
                        variant="ghost"
                        color="black"
                        _hover={{ bg: 'blue.400' }}
                    >
                        Find
                    </Button>
                    <Button
                        as={RouterLink}
                        to="/travel"
                        variant="ghost"
                        color="black"
                        _hover={{ bg: 'blue.400' }}
                    >
                        Travel
                    </Button>
                </Flex>
            </Flex>

            {/* Main Content */}
            <Box p={6} mt={5}>
                <Heading size="lg" textAlign="center" mb={2}>
                    Find Your Next Adventure
                </Heading>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={4} maxW="800px" mx="auto" mt={8}>
                        <Input
                            placeholder="e.g., What should I do for a day in Tokyo?"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            borderRadius="xl"
                            bg="white"
                        />
                        <Button
                            type="submit"
                            colorScheme="blue"
                            borderRadius="xl"
                            isDisabled={!query.trim()}
                        >
                            Get Recommendations
                        </Button>
                        {loading && (
                            <Progress size="xs" isIndeterminate colorScheme="blue" borderRadius="xl" />
                        )}
                        {recommendation && (
                            <Box p={4} bg="gray.200" borderRadius="xl" boxShadow="md">
                                <Box p={8} dangerouslySetInnerHTML={{ __html: recommendation }} />
                            </Box>
                        )}
                    </Stack>
                </form>
            </Box>
        </Box>
    );
}

export default Chat;
