import React from 'react'
import footer from "../../assets/images/dots-footer.png";
import "./footer.scss";

const Footer = (props) => {
    const year = new Date().getFullYear();

    return (
    <div id="footer">

        <div className="phoneNumber"> 800 264 2099</div>        
              
        <img className="dotsImg" src={footer} alt="dots"/>

        <p className="copyright">Copyright &#169;  {year} Sweet Corner. All rights reserved.</p>

    </div>
); 
}  

export default Footer;