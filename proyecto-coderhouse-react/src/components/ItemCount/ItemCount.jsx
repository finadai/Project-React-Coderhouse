import React, { useState } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <Button variant="outline-secondary" onClick={handleDecrement}>
          -
        </Button>
        <FormControl value={count} readOnly />
        <Button variant="outline-secondary" onClick={handleIncrement}>
          +
        </Button>
      </InputGroup>
      <Button variant="primary" onClick={handleAddToCart}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
