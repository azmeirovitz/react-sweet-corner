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

    //console.log("Cart Product name: ", cartItems[1].name);     

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
                        <tr key={cartItems.productId}>
                            <td className="td">
                             <img className="cupcakeImgCart" src={oneItem.thumbnail.url} />
                            </td>

                            <td className="td">{cartItems.map(oneItem => <div>{oneItem.name}</div>)}</td>
                            
                            <td className="td">{cartItems.map(oneItem => <div>${(oneItem.each/100).toFixed(2)}</div>)}</td>                   


                            <td className="td">{cartItems.map(oneItem => <div>{oneItem.quantity}</div>)}</td>

                            <td className="td">{cartItems.map(oneItem => <div>${(oneItem.total/100).toFixed(2)}</div>)}</td>
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


