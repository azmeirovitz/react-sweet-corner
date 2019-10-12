import React, {Component} from 'react';
import './checkout.scss';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {createGuestOrder} from '../../actions';
import ErrorHandlingForm from'./error_handling_form';



class GuestCheckout extends Component {

handleGuestCheckout = async (formValues) => {
    
    const orderInfo =  await this.props.createGuestOrder(formValues);

    //console.log("orderInfo: ", orderInfo); 

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

            <form onSubmit={handleSubmit(this.handleGuestCheckout)}>
            
            
            <div>
                <Field 
                className="inputFirstName"
                name="firstName" 
                component={ErrorHandlingForm} 
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
                component={ErrorHandlingForm} 
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
                component={ErrorHandlingForm} 
                type="email" 
                placeholder="Email" 
                autoComplete="email"
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

function validate (formValues) {

    const {firstName, lastName, email} = formValues;

    const emailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const errors = {};


    if (!firstName) {
        errors.firstName = 'Please enter your name';
    } else if (firstName.length < 2) {
        errors.firstName = 'Name must be at least 2 characters long'
    }

    if (!lastName) {
        errors.lastName = 'Please enter your name';
    } else if (lastName.length < 2) {
        errors.lastName = 'Name must be at least 2 characters long'
    }

    if (!email) {
        errors.email = 'Please enter your email';
    } else if (!emailRegEx.test(email)){
        errors.email = 'Please enter a valid email address. Example: me@example.com';
    }

    return errors;

}


GuestCheckout = reduxForm ({
    form: 'GuestCheckout',   //A unique identifyer
    validate: validate
})(GuestCheckout) 


export default connect(null, {    
    createGuestOrder: createGuestOrder
})(GuestCheckout);



    

