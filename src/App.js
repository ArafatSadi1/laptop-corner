import { useEffect, useState } from 'react';
import './App.css';
import Product from './components/Product/Product';


function App() {
  const [laptops, setLaptops] = useState([]);
  useEffect( () => {
    fetch('laptop.json')
    .then(res => res.json())
    .then(data => setLaptops(data));
  }, []);
  const handleAddToCart = (selectProduct) =>{
    console.log(selectProduct)
  }
  return (
    <div>
      <h2 className='brand-name'>Laptop Corner</h2>
      <div className="product-container">
      {
        laptops.map(laptop => <Product 
          key={laptop.id}
          product={laptop}
          handleAddToCart={handleAddToCart}
          ></Product>)
      }
      </div>
    </div>
  );
}

export default App;
