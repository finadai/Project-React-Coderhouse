import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import '../src/index.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import axios from 'axios';
import MainRoutes from './routes/MainRoutes';
import { CartProvider } from './context';

function App() {

  
  // useEffect(() => {
  //   axios
  //     .get("https://dummyjson.com/products") //si borro ésto, en el navegador la página no se ve
  //     .then((res) => {
  //       setProducts(res.data.products);
  //     })
  //     .catch((error) => console.log(error));
  // });
  
  
  return (
    <>
      <div>
        <CartProvider>
          <MainRoutes />
        </CartProvider>
      </div>
      
    </>
  );
}

export default App;

