
import types from '../actions/types';

const DEFAULT_STATE = {
    cartId: null,
    items:null,
    total: null
};

export default (state = DEFAULT_STATE, action) => {

    switch (action.type) {

        case types.ADD_ITEM_TO_CART:
            
            return {...state, total: action.cartTotal};
            break;

        case types.GET_ACTIVE_CART:
            
            return {
                ...state, 
                cartId: action.cart.cartId, 
                items: action.cart.items, 
                total: action.cart.total
            };
            break;

        case types.GET_CART_TOTALS:
            
            return {
                ...state,
                total: action.total //From the resp.data.total in the actions
            };

        case types.CREATE_GUEST_ORDER:

             return DEFAULT_STATE
        /// OR
        //     return {
        //         ...state,
        //          cartId: null,
        //          items: null,
        //          total: null
        //     }



        default:
            return state;
    }

}

