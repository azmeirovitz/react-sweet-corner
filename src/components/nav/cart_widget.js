import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './nav.scss';
import {getCartTotals} from '../../actions';
import {connect} from 'react-redux';

class CartWidget extends Component {

    componentDidMount () {
        this.props.getCartTotals();
    }

    render () {
        console.log("Cart widget props; ", this.props.total);

        const {total} = this.props;
        let itemsAmount = 0;

        if (total) {
            itemsAmount = total.items
        }

        return (
            <li className="line cart-widget">

                <Link to="/cart">

                    <i className="material-icons">shopping_cart</i>

                    <span className="cart-item-count">{itemsAmount}</span>

                </Link>

            </li>
        )
    }

}

function mapStateToProps (state) {
    console.log("cart_widget state: ", state);
    return {
        total: state.cart.total
    }
}

export default connect(mapStateToProps, {
    getCartTotals: getCartTotals
})(CartWidget);


