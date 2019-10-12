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

        const cartToken = await localStorage.getItem('sc-cart-token');

        const axiosConfig = {
            headers: {
                "X-Cart-Token": cartToken
            }
        };
 
        const resp = await axios.post(`${BASE_URL}/api/cart/items/${productId}`, {
            quantity: quantity
        }, axiosConfig);

        localStorage.setItem("sc-cart-token", resp.data.cartToken); 
        

        dispatch ({
            type: types.ADD_ITEM_TO_CART,
            cartTotal: resp.data.total
        });

        
    } catch (error) {
        console.log("Add Item To Cart Error: ", error.message);
    }
}

export const getActiveCart = () => async dispatch => {
    try {
        const cartToken = localStorage.getItem('sc-cart-token');

        const axiosConfig = {
            headers: {
                "X-Cart-Token": cartToken
            } 
        }

        const resp = await axios.get(`${BASE_URL}/api/cart`, axiosConfig);

        //console.log("getActiveCart server response", resp);

        dispatch ({
            type: types.GET_ACTIVE_CART,
            cart: resp.data
        })

    } catch (error) {
        console.log("Get active cart error: ", error);
    }
}

export const getCartTotals = () => async dispatch => {    

    try {

        const cartToken = localStorage.getItem('sc-cart-token');

        const axiosConfig = {
            headers: {
            "X-Cart-Token": cartToken
            }
        }

        const resp = await axios.get(`${BASE_URL}/api/cart/totals`, axiosConfig);

        //console.log("Get cart totals response: ", resp);

        dispatch ({
            type: types.GET_CART_TOTALS,
            total: resp.data.total

        });


    } catch (error) {
        console.log("Error getting cart totals", error);
    }
}


export const createGuestOrder = (guest) => async dispatch => {    

     try {

        console.log("Create guest order, guest data: ", guest);

       const cartToken = await localStorage.getItem('sc-cart-token');

       const axiosConfig = {
            headers: {
            "X-Cart-Token": cartToken
            }
        }

        const resp = await axios.post(`${BASE_URL}/api/orders/guest`, guest, axiosConfig);

        console.log("Create Guest Order response: ", resp);   

        localStorage.setItem("sc-cart-token", resp.data.cartToken);
        
        //localStorage.clear();

        localStorage.removeItem('sc-cart-token');    

    
        dispatch ({
            type: types.CREATE_GUEST_ORDER,
            order: {
                id: resp.data.message ,
                orderId: resp.data.id
            }               

        });

        return {
            email: guest.email,
            orderId: resp.data.id
        }


    } catch (error) {
        console.log("Error with guest checkout", error);
    }

}

export const getGuestOrderDetails = (orderId, email) => async dispatch => {
    try {
        
        const resp = await axios.get(`${BASE_URL}/api/orders/guest/${orderId}?email=${email}`);

    //They wrote /:order_id, but we pass orderId

        console.log("Get Guest Order Details response: ", resp); 

        dispatch ({
            type: types.GET_GUEST_ORDER_DETAILS,
            orders: resp.data                    
         

            //orderDetails: resp.data
            //OR
            // orderDetails: {
            //     orderId: orderId, 
            //     email: email 
                
        });  

            

            // order: {
            //     id: resp.data.message ,
            //     orderId: resp.data.id
            // }               

        

    } catch (error) {
        console.log("Error with guest order details", error);
    }



}

