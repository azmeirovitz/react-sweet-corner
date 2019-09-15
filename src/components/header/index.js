import React from 'react';
import Nav from "../nav/index.js";
import header from "../../assets/images/header.png";
import "./header.scss";


const Header = (props) => (
    
    <div>
        <link href="https://fonts.googleapis.com/css?family=Allura&display=swap" rel="stylesheet"></link>
        
        <img className="headerImg" src={header} alt="Banner"/>
        <Nav/>
        <div className="headerBackgroudImg"></div>
        <p className="headerBottomLine">We deliver cupcakes for the important events in your life!</p>
        <div className="brownLine"></div>

    </div>
);

export default Header;