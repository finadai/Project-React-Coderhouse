import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { ItemQuantitySelector } from "../ItemQuantitySelector";
import { useSingleProduct } from "../../hooks/useProducts";
import { collection, getFirestore, getDoc, doc } from "firebase/firestore";
// import { AddItemButton } from "../AddItemButton";

export const ItemDetailContainer = () => {
  const { productId } = useParams();

  const { product, error } = useSingleProduct(productId);
  
      return (
        <Card 
        key={product.id} 
        style={{ width: "18rem", margin: 20, height: '500px' }}>
          <Card.Img variant="top" src={product.thumbnail} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
          </Card.Body>
          <ItemQuantitySelector />
        </Card>
      );
    };

export default ItemDetailContainer;