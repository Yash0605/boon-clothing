import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItem} from '../../redux/cart/cart.selectors';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropDown = ({item}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {item.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>)}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = state => ({
    item : selectCartItem(state)
});

export default connect(mapStateToProps)(CartDropDown);