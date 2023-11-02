import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponents/NavBarComponent';
import { useState } from 'react';
import '../src/index.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <NavBarComponent />
       <ItemListContainer greeting="Welcome to the Halloween Site Store"/>
      </div>
      
    </>
  );
}

export default App

