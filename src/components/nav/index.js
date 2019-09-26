import React from 'react';
import {Link} from 'react-router-dom';
import './nav.scss';
import CartWidget from './cart_widget';

const Nav = (props) => {
    return (
        <ul className="main-nav">
            <li className="line">
                <Link to="/">Home</Link>
            </li>

            <li className="line">
                <Link to="/about">About Us</Link>
            </li>

            <li className="line">
                <Link to="/services">Services</Link>
            </li>

            <li className="line">
                <Link to="/contact">Contact</Link>
            </li>

            <li className="line">
                <Link to="/products">products</Link>
            </li>

            <CartWidget />

        </ul>
    )
}

export default Nav;