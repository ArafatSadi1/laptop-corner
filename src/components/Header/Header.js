import React from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
import './Header.css'

const Header = ({openModal, cart}) => {
    return (
        <nav className='header-container'>
            <h2>Laptop Corner</h2>
            <div className='cart-btn'>
                <span>{cart.length}</span>
                <button onClick={openModal}><BsCartPlusFill size={25}></BsCartPlusFill></button>
            </div>
        </nav>
    );
};

export default Header;