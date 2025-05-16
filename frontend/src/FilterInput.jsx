import React, { useState } from 'react';
import { Input, Button, HStack } from '@chakra-ui/react';

function FilterInput({ onFilter }) {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (text.trim()) {
      onFilter(text);
      setText('');
    }
  };

  return (
    <HStack mb={4}>
      <Input
        placeholder="e.g. romantic Italian place open now"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button colorScheme="blue" onClick={handleSubmit}>
        Filter
      </Button>
    </HStack>
  );
}

export default FilterInput;