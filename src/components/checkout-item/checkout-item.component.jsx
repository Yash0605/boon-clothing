import React from "react";
import { connect } from "react-redux";

import { clearItemForCart, removeItem, addItem} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckOutItem = ({ cartItem, clearItemFromCart, removeItemProp, addItemProp }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl}></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className='arrow' onClick={() => removeItemProp(cartItem)}>&#60;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItemProp(cartItem)}>&#62;</div>
        </span>
      <span className="price">${price}</span>
      <span className="remove-button" onClick={() => clearItemFromCart(cartItem)}>&#10005;</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemForCart(item)),
  removeItemProp: item => dispatch(removeItem(item)),
  addItemProp : item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
