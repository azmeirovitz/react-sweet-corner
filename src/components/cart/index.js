import React, {Component} from 'react';
import './cart.scss';
import {getActiveCart} from '../../actions';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


 
class Cart extends Component {

componentDidMount () {
    this.props.getActiveCart();
}



render () {

    console.log("Cart Items: ", this.props.cartItems);

    const {cartItems} = this.props;

    if (cartItems == null)
        return (<h1>Loading Page</h1>)

    return (
        <div>
            <h1 className="center">Cart</h1>

            <div className="container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Each</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>

                    <tbody>
                    {cartItems.map(oneItem => {
                    return (
                        <tr key={oneItem.productId}>
                            <td className="td">
                             <img className="cupcakeImgCart" src={oneItem.thumbnail.url} />
                            </td>

                            <td className="td">
                            {oneItem.name}
                            </td>
                            
                            <td className="td">${(oneItem.each/100).toFixed(2)}</td>                   


                            <td className="td">{oneItem.quantity}</td>

                            <td className="td">${(oneItem.total/100).toFixed(2)}</td>
                    </tr> 
                    )})}
                        
                    </tbody>

                </table>
            </div>
               
         
    
             
        <Link to="/checkout/guest" className="guest-checkout-link">Checkout As Guest</Link>

        </div>
    )
    } 

}

function mapStateToProps (state) {
    
    return {
        cartItems: state.cart.items
    }
}

export default connect(mapStateToProps, {
    getActiveCart: getActiveCart
})(Cart);


