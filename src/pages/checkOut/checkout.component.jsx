import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItem, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckOut = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(item => <CheckOutItem key={item.id} cartItem={item}></CheckOutItem>)
        }
        <div className='total'>Total ${total}</div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem,
    total : selectCartTotal
});

export default connect(mapStateToProps)(CheckOut);