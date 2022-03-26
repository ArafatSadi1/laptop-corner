import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Product from './components/Product/Product';
import Modal from 'react-modal';
import {ImCross} from 'react-icons/im'
import Header from './components/Header/Header';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#a9a9a9'
  },
};

Modal.setAppElement('#root');


function App() {
  const [laptops, setLaptops] = useState([]);
  const [cart, setCart] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  useEffect( () => {
    fetch('laptop.json')
    .then(res => res.json())
    .then(data => setLaptops(data));
  }, []);
  const handleAddToCart = (selectProduct) =>{
    let newCart = [...cart, selectProduct];
    if(newCart.length > 4){
      alert("Ooops... You can't select product more then Four")
    }
    else{
      alert('Product Selected')
      setCart(newCart)
    }
  }

  const chooseRandomly = () => {
    const random = cart[Math.floor(Math.random() * cart.length)];
    setCart([random])
  };
  const remove = () => {
    setCart([])
  }
  return (
    <div className='container'>
      <Header openModal={openModal}
              cart={cart}
      ></Header>
      <div className="product-container">
      {
        laptops.map(laptop => <Product 
          key={laptop.id}
          product={laptop}
          handleAddToCart={handleAddToCart}
          ></Product>)
      }
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}><ImCross size={20}></ImCross></button>
        <div>
          <h2>Selected Product</h2>
          {
            cart.map(product => <Cart 
              key={product.id}
              product={product}
            ></Cart>)
          }
        </div>
        <button className='btn' onClick={chooseRandomly}>Choose One For Me</button>
        <button className='btn' onClick={remove}>Choose Again</button>
      </Modal>
    </div>
  );
}

export default App;
