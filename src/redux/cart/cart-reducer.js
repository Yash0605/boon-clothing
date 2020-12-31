import CartActionTypes from './cart.types';
import {addItem} from './cart.utils';

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
            }
        default : 
            return state;
    }
};

export default cartReducer;