import React, { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';

function MapComponent({ lat, lng, places }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (lat && lng && window.google) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat, lng },
        zoom: 14,
      });
      new window.google.maps.Marker({ position: { lat, lng }, map, title: 'You' });
      places.forEach((place) => {
        const loc = place.geometry?.location;
        if (loc) {
          new window.google.maps.Marker({
            position: { lat: loc.lat, lng: loc.lng },
            map,
            title: place.name,
          });
        }
      });
    }
  }, [lat, lng, places]);

  return <Box ref={mapRef} w="100%" h="400px" mb={4} />;
}

export default MapComponent;