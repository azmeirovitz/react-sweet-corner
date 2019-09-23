import types from '../actions/types'; 
// They show only one level of ../

const DEFULT_STATE = {
    list: [],
    details: null
}
//The reducer function:
export default (state = DEFULT_STATE, action) => {

switch (action.type) {
    case types.GET_ALL_PRODUCTS:
        return {...state, list: action.products
        };
    default:
        return state;

}

}

// The action is any action object that has been dispatched or returned from an action creator.