import React from 'react';
import {reduxForm} from 'redux-form';
import Input from '../general/form/input.js';
import Textarea from '../general/form/textarea.js';


const Form = props => {

    const handleFormSubmit = (formValues) => {
        console.log("On submit simple form values: ", formValues);
    }

    const {handleSubmit} = props 

    return (
        <div>
            <br></br>
            <h5 className="h5">Contact Form</h5>
            <br></br>

            <form onSubmit={handleSubmit(handleFormSubmit)}>
            
            <Input />
            <Textarea />

            <br></br>              

                <div >
                    <button className="form-actions" type="submit">SEND</button> 
                </div> 


            </form>

        </div>
    )
}

export default reduxForm ({
    form: 'simple-form',  //A unique identifyer
})(Form)                //Can also be simpleForm