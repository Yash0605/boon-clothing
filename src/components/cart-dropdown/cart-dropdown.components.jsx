import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItem} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import './cart-dropdown.styles.scss';

const CartDropDown = ({item, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {item.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>)}
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    item : selectCartItem
});

export default withRouter(connect(mapStateToProps)(CartDropDown));