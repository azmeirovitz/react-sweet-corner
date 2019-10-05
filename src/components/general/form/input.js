import React from 'react';
import '../../contact/contact.scss';
import { Field } from 'redux-form';

       
const Input = (props) => {
    return (
        <div>
            <div>
                <Field 
                className="input-field-name"
                name="name" 
                component="input" 
                type="name" 
                placeholder="Name" 
                pattern="([A-Za-z ]+) ([A-Za-z ]+)"
                required
                />

            </div>
            <br></br>

            <div >
                    
                <Field 
                className="input-field-email"
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
                    
                <Field 
                className="input-field-phone"
                name="phone" 
                component="input" 
                type="text" 
                placeholder="Phone"
                pattern=".{10,}"
                //pattern="^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$"
                //pattern="^[2-9]\d{2}-\d{3}-\d{4}$"
                //pattern="^[0-9]{3}-[0-9]{3}-[0-9]{4}$"
                //pattern="^\([0-9]){3}-([0-9]){3}-([0-9]){4}/"
                required 
                    />
            </div>
            <br></br>

            <div >
                    
                <Field 
                className="input-field-subject"
                name="subject" 
                component="input" 
                type="text" 
                placeholder="Subject"
                pattern="[A-Za-z]{2,}"
                required
                    />
            </div>
            <br></br>
        </div>
    );

    }

    export default Input;