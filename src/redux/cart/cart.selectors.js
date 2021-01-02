import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartHidden = createSelector([selectCart], cartItem => cartItem.hidden);

export const selectCartItem = createSelector([selectCart], (cart) => cart.item);

export const selectCartItemCount = createSelector(
  [selectCartItem],
  (cartItems) =>
    cartItems.reduce(
      (accumulateValue, cartItem) => accumulateValue + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItem],
  (cartItems) =>
    cartItems.reduce(
      (accumulateValue, cartItem) => accumulateValue + cartItem.quantity * cartItem.price,
      0
    )
);
