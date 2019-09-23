import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.sc.lfzprototypes.com';

export const getAllProducts = () => async dispatch => {
    try {

        const resp = await axios.get(BASE_URL +'/api/products');

        dispatch ({
            type: types.GET_ALL_PRODUCTS,
            products: resp.data.products
        });

        //console.log("Get all products response: ", resp);        
        
    } catch (error) {
        console.log("Error getting all products: ", error);
    }
}

//getAllProducts is the action creator, like we create a function. The dispatch is the action (what the function, or the action creatoe does). What the dispatch does is the reducer, the reducer job, or the reducer function.