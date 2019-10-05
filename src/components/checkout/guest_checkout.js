import React, {Component} from 'react';
import './checkout.scss';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {createGuestOrder} from '../../actions';



class GuestCheckout extends Component {

handleGuestCheckout = async (formValues) => {
    
    const orderInfo =  await this.props.createGuestOrder(formValues);

    console.log("orderInfo: ", orderInfo); 

    const redirectUrl = `/orders/guest/${orderInfo.orderId}?email=${orderInfo.email}`;

    this.props.history.push(redirectUrl);

    }


render () {

    const {handleSubmit} = this.props

    return (

        <div>

            <div className="guest-checkout">
                <h1 className="center">Guest checkout</h1>
            </div>   

            {/* <form onSubmit={handleSubmit}> */}


            <form onSubmit={handleSubmit(this.handleGuestCheckout)}>
            
            
            <div>
                <Field 
                className="inputFirstName"
                name="firstName" 
                component="input" 
                type="text" 
                placeholder="First Name" 
                
                required
                />

            </div>
            <br></br>

            <div>
                <Field 
                className="inputLastName"
                name="lastName" 
                component="input" 
                type="text" 
                placeholder="Last Name" 
                
                required
                />

            </div>
            <br></br>

            <div >
                    
                <Field 
                className="inputEmail"
                name="email" 
                component="input" 
                type="email" 
                placeholder="Email" 
                autoComplete="email"
                pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required 
                    
                    />
            </div>
            <br></br>    

                       

            <div >
                <button className="submitOrder" type="submit">Submit Order</button>                 
            </div> 
            <br></br>    


            </form>

        </div>
    )

}

}

//mapStateToProps


GuestCheckout = reduxForm ({
    form: 'GuestCheckout' //A unique identifyer
})(GuestCheckout) 


export default connect(null, {    
    createGuestOrder: createGuestOrder
})(GuestCheckout);



    

