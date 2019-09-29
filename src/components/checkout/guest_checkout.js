import React, {Component} from 'react';
import './checkout.scss';

import {reduxForm, Field} from 'redux-form';



class GuestCheckout extends Component {

handleGuestCheckout = (formValues) => {
    console.log("On submit simple form values: ", formValues);
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

export default reduxForm ({
    form: 'GuestCheckout',  //A unique identifyer
})(GuestCheckout) 







//const GuestCheckout = props => {

    // const handleGuestCheckout = () => {
    // }

    // const handleFormSubmit = (formValues) => {
    //     console.log("On submit simple form values: ", formValues);
    // }

    //const {handleSubmit} = props 

    // return (
    //     <div>

    //         <div className="guest-checkout">
    //             <h1 className="center">Guest checkout</h1>
    //         </div>   


    //         <form onSubmit={handleSubmit(handleGuestCheckout)}>
            
            
    //         <div>
    //             <Field 
    //             className="inputFirstName"
    //             name="firstName" 
    //             component="input" 
    //             type="name" 
    //             placeholder="First Name" 
    //             pattern="[A-Za-z ]"
    //             required
    //             />

    //         </div>
    //         <br></br>

    //         <div>
    //             <Field 
    //             className="inputLastName"
    //             name="lastName" 
    //             component="input" 
    //             type="name" 
    //             placeholder="Last Name" 
    //             pattern="[A-Za-z ]"
    //             required
    //             />

    //         </div>
    //         <br></br>

    //         <div >
                    
    //             <Field 
    //             className="inputEmail"
    //             name="email" 
    //             component="input" 
    //             type="email" 
    //             placeholder="Email" 
    //             autoComplete="email"
    //             pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    //             required 
                    
    //                 />
    //         </div>
    //         <br></br>    
            
                       

    //         <div >
    //             <button className="submitOrder" type="submit">Submit Order</button>                 
    //         </div> 
    //         <br></br>

            


    //         </form>

    //     </div>
    // )















// class GuestCheckout extends Component {

// handleGuestCheckout (form) {

//     let form = {};

//     console.log("Checkout form: ", form);
// }

// render () {
//     return (

//        <div className="guest-checkout">
//            <h1 className="center">Guest checkout</h1>
//        </div>     




//     )
// }


// }

// export default GuestCheckout;