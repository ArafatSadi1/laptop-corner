import React, { useState } from 'react';
import './Cart.css'
const Cart = ({product}) => {
    return (
        <div className='cart-container'>
            <img src={product.picture} alt="" />
            <h4>{product.name}</h4>
        </div>
    );    
};

export default Cart;