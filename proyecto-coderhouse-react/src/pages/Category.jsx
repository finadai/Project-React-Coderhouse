import React, {useEffect, useState} from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
import { useAllProductsByFilter } from "../hooks/useProducts";

const Category = () => {
      const { categoryId } = useParams();
      const { products } = useAllProductsByFilter("products", categoryId, "category");

    return <ItemListContainer products={products} />;    
  };

export default Category;