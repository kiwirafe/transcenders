// frontend/src/Find.jsx
import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  Progress,
  useToast,
  VStack,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
import axios from 'axios';
import FilterInput from './FilterInput.jsx';
import PlacesList from './PlacesList.jsx';
import MapComponent from './MapComponent.jsx';

function Find() {
  const [coords, setCoords] = useState(null);
  const [places, setPlaces] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtering, setFiltering] = useState(false);
  const toast = useToast();

  // Fetch initial places
  useEffect(() => {
    if (!navigator.geolocation) {
      toast({
        title: 'Geolocation not supported.',
        status: 'error',
        duration: 3000,
      });
      return setLoading(false);
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        setCoords({ lat, lng });
        axios
          .get(`https://transcenders-backend.vercel.app/api/places?lat=${lat}&lng=${lng}`)
          .then((res) => {
            const all = [...res.data.restaurants, ...res.data.attractions];
            setPlaces(all);
            setFiltered(all);
          })
          .catch(() => {
            toast({
              title: 'Error fetching places.',
              status: 'error',
              duration: 3000,
            });
          })
          .finally(() => setLoading(false));
      },
      () => {
        toast({
          title: 'Location permission denied.',
          status: 'warning',
          duration: 3000,
        });
        setLoading(false);
      }
    );
  }, [toast]);

  // Handle filter queries
  const handleFilter = async (query) => {
    setFiltering(true);
    try {
      const res = await axios.post('https://transcenders-backend.vercel.app/api/filter', { query });
      const { cuisine, keywords } = res.data;
      let results = [...places];

      if (cuisine) {
        results = results.filter((p) =>
          p.name.toLowerCase().includes(cuisine.toLowerCase())
        );
      }
      if (Array.isArray(keywords)) {
        keywords.forEach((kw) => {
          results = results.filter((p) =>
            p.name.toLowerCase().includes(kw.toLowerCase())
          );
        });
      }

      setFiltered(results);
    } catch {
      // fallback simple filter
      const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
      setFiltered(
        places.filter((p) => {
          const hay = `${p.name} ${(p.types || []).join(' ')} ${p.vicinity || ''}`.toLowerCase();
          return terms.every((t) => hay.includes(t));
        })
      );
    } finally {
      setFiltering(false);
    }
  };

  return (
    <Box minH="100vh" bg="gray.50">
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
      <Flex direction="column" align="center" p={6}>
        <VStack spacing={6} w="100%" maxW="900px">
          <Heading size="lg" textAlign="center">
            Discover Nearby Places
          </Heading>

          {/* Filter input */}
          <Box w="100%">
            <FilterInput onFilter={handleFilter} />
          </Box>

          {/* Progress bar */}
          {(loading || filtering) && (
            <Progress
              size="xs"
              isIndeterminate
              w="100%"
              borderRadius="lg"
              colorScheme="blue"
            />
          )}

          {/* Content */}
          {loading ? (
            <Text pt={10}>Initializing map and fetching your location…</Text>
          ) : (
            <>
              <Box
                w="100%"
                h="400px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
              >
                <MapComponent
                  lat={coords?.lat}
                  lng={coords?.lng}
                  places={filtered}
                />
              </Box>

              <Box
                w="100%"
                bg="gray.200"
                borderRadius="lg"
                p={4}
                boxShadow="sm"
              >
                <PlacesList places={filtered} />
              </Box>
            </>
          )}
        </VStack>
      </Flex>
    </Box>
  );
}

export default Find;
