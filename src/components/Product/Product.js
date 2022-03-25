import React from 'react';

const Product = ({product, handleAddToCart}) => {
    // console.log(product)
    const {picture, name, price} = product
    return (
        <div>
            <img width={300} src={picture} alt="" />
            <div className="card-info">
                <h4>Name: {name}</h4>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
        </div>
    );
};

export default Product;