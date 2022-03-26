import React from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    const {picture, name, price} = product
    return (
        <div className='product-card'>
            <img width={350} src={picture} alt="" />
            <div className="card-info">
                <h3>Name: {name}</h3>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(product)}><p>Add To Cart <BsCartPlusFill></BsCartPlusFill></p></button>
        </div>
    );
};

export default Product;