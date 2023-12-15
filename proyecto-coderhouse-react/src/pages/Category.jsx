import React, {useEffect, useState} from "react";
import axios from "axios";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
import { useAllProductsByFilter } from "../hooks/useProducts";

const Category = () =>  {

    const [products, setProducts] = useState([]);
    const {categoryId}  =   useParams();
  
    const Category = () => {
      const { categoryId } = useParams();
      const { products } = useAllProductsByFilter("products", categoryId, "category");

    return <ItemListContainer products={products} />;    
  };
};
export default Category;