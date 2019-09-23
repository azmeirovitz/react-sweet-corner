import types from './types';
import axios from 'axios';

const BASE_URL = "http://api.sc.lfzprototypes.com";


//Export a function named getAllProducts that has no parameters 
//getAllProducts should return an async function that has a single parameter named dispatch

export const getAllProducts = () => async dispatch => {
    
    
    try {

        const resp = await axios.get(BASE_URL + '/api/products');
        //console.log("response: ", resp);

    //This is the action in the action creator (the getAllproducts method)
    //sending the action to the reducres using th edispatch method 

    dispatch({
        type: types.GET_ALL_PRODUCTS, 
        products: resp.data.products
    });

    //Inside the dispatch, is what we send to the reducers. This will update the Redux state in the reducer. 

        
    } catch (error) {
        console.log("Error when getting the products", error);
    }

    


}

