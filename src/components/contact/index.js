import React from 'react';
import "./contact.scss";
import ContactForm from "./contact_form.js";
import Schedule from "../general/schedule/index.js";
import upDots from "../../assets/images/up-dots.png";
import downDots from "../../assets/images/down-dots.png";

 
const Contact = (props) => {
    return (
    <div>
        <div className="container">
        <div className="row">
            <main className=" mainLeft col-sm-6">
            <div className="paragraphs">
                <br></br>
                <h3 className="h3">Contact us today!</h3>
                <p>Talk cupcakes to us! At Sweet Corner's we love hearing from our customers. Send your questions, comments and flavor suggestions to:
                </p>

                <a href="office@sweetcorner.com" className="emailLink">office@sweetcorner.com</a>

                <p>Our expert bakers are waiting to create an unique cupcake bursting with freshness and flavor just for you. Our management team are also waiting for their next event to organize.
                </p>

            </div>

            <img className="upDots" src={upDots} alt="Cupcakes"/>

            <Schedule/>
            <br></br>
            <br></br>

            </main>

            <section className="col-sm-1">

            </section>

            <aside className="asideRight col-sm-5">
                <ContactForm />

                <img className="downDots" src={downDots} alt="Cupcakes"/>

            </aside>
        </div>
        </div>
    </div>
);
}

export default Contact;