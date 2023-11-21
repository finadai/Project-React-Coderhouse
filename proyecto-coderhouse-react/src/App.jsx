import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import '../src/index.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import axios from 'axios';
import MainRoutes from './routes/MainRoutes';

function App() {
  const [count, setCount] = useState(0)

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => console.log(error));
  });
  
  
  return (
    <>
      <div>
        <MainRoutes />
      </div>
      
    </>
  );
}

export default App

