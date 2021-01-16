import CartActionTypes from './cart.types';
import {addItem, removeItem } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    item:[]
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN :
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM :
            return {
                ...state,
                item: addItem(state.item, action.payload)
            };

        case CartActionTypes.REMOVE_ITEM :
            return {
                ...state,
                item: removeItem(state.item, action.payload)
            };
        case CartActionTypes.CLEAR_ITEM_FOR_CART : 
        return {
            ...state,
            item: state.item.filter(cartItem => cartItem.id !== action.payload.id)
        };
        default : 
            return state;
    }
};

export default cartReducer;