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
                placeholder="First-Name Last-Name" 
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
                placeholder="Email:  example@example.com" 
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
                placeholder="Phone: xxx-xxx-xxxx"
                //pattern=".{10,}"
                pattern="^\d{3}-\d{3}-\d{4}$"
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