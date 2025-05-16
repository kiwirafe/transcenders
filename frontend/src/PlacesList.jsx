import React from 'react';
import { List, ListItem, Box, Text } from '@chakra-ui/react';

function PlacesList({ places }) {
  if (!places.length) return <Text>No places to display.</Text>;
  return (
    <List spacing={3}>
      {places.map((place) => (
        <ListItem key={place.place_id}>
          <Box p={3} bg="gray.100" borderWidth="1px" borderRadius="md" _hover={{ shadow: 'md' }}>
            <Text fontWeight="bold">{place.name}</Text>
            <Text>{place.vicinity || place.formatted_address}</Text>
            <Text fontSize="sm" color="gray.600">
              {place.opening_hours?.open_now ? 'Open Now' : 'Closed'}
            </Text>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}

export default PlacesList;