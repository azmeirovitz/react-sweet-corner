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
        
    } catch (error) {
        console.log("Error getting all products: ", error);
    }
}

//getAllProducts is the action creator, like we create a function. The dispatch is the action (what the function, or the action creator does). What the dispatch does is the reducer, the reducer job, or the reducer function.

export const getProductDetails = productId => async dispatch => {
    try {
        
        const resp = await axios.get(`${BASE_URL}/api/products/${productId}`);

        dispatch ({
            type: types.GET_PRODUCT_DETAILS,
            product: resp.data
        });
        
    } catch (error) {
        console.log("Error getting product details: ", error);
    }

}

export const clearProductDetails = () => (
    {    
        type: types.CLEAR_PRODUCT_DETAILS
    }
);

export const addItemToCart = (productId, quantity) => async dispatch => {
    try {

        const cartToken = localStorage.getItem('sc-cart-token');

        const axiosConfig = {
            headers: {
                "X-Cart-Token": cartToken
            }
        };

        //console.log("Cart Tpken: ", cartToken);

        //return;
        
        const resp = await axios.post(`${BASE_URL}/api/cart/items/${productId}`, {
            quantity: quantity
        }, axiosConfig);

        localStorage.setItem("sc-cart-token", resp.data.cartToken); 
        

        //console.log("addItemToCart response: ", resp);

        dispatch ({
            type: types.ADD_ITEM_TO_CART,
            cartTotal: resp.data.total
        });

        //console.log("From Action Creator: quantity: ", quantity, ", productID: ", productId);

    } catch (error) {
        console.log("Add Item To Cart Error: ", error.message);
    }
}

