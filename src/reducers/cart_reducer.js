
import types from '../actions/types';

const DEFAULT_STATE = {
    cartId: null,
    items:null,
    total: null
};

export default (state = DEFAULT_STATE, action) => {

    switch (action.type) {

        case types.ADD_ITEM_TO_CART:
            //console.log("Cart Reducer Action: ", action);
            return {...state, total: action.cartTotal};
            break;

        case types.GET_ACTIVE_CART:
            //console.log("Cart Reducer Action: ", action);
            return {
                ...state, 
                cartId: action.cart.cartId, 
                items: action.cart.items, 
                total: action.cart.total
            }


        default:
            return state;
    }

}

