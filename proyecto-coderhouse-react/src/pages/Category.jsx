import React from "react";
import axios from "axios";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";

const {categoryId}  = useParams();

const Category = () =>  {

    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      axios
        .get("https://dummyjson.com/products/?limit=10")
        .then((res) => {
          setProducts(res.data.products);
        })
        .catch((error) => console.log(error));
    });

   
    // console.log(categoryId);

    return <ItemListContainer products={products} />;    
};

export default Category;