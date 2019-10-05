import types from '../actions/types';

const DEFAULT_STATE = {
    details: null,
};

export default (state = DEFAULT_STATE, action) => {

    switch (action.type) {

        case types.GET_GUEST_ORDER_DETAILS:
            
            return {...state, 
                details: action.orders} 
        
                //Not sure about action.email so OR orderDetails
    
            break;

            default: 
            return state;

    }

}