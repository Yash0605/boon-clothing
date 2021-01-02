import React from 'react';

import './checkout-item.styles.scss';

const CheckOutItem = ({cartItem : {imageUrl,name,price,quantity}}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl}></img>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{price}</span>
        <span className='price'>{quantity}</span>
        <span className='remove-item'>&#10005;</span>
    </div>
);

export default CheckOutItem;