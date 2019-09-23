import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import productReducer from './products_reducer';



const rootReducer = combineReducers({
    form: formReducer,
    products: productReducer
    //This object is like a blueprint for Redux state
});

export default rootReducer;