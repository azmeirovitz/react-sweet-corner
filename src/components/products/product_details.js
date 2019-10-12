import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addItemToCart, clearProductDetails, getProductDetails} from '../../actions';
import Money from '../general/money';
import './product-details.scss';


class ProductDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 1
        };


    }

componentDidMount () {
    
    const {getProductDetails, match: {params}} = this.props;

    getProductDetails(params.product_id);

    // this.props.getProductDetils(this.props.match.params.product_id);

}

//A match object contains information about how a <Route path> matched the URL. It was products/id, and the id is the number that is part of the URL.

componentWillUnmount () {
    
    this.props.clearProductDetails();
}

incrementQuantity () {

    const {quantity} = this.state;

    this.setState({
        quantity: quantity +1
    });

        
}

decrememntQuantity () {
    
    const {quantity} = this.state;

    if (quantity === 1) return;

    this.setState({
        quantity: quantity - 1 
    });

    
}

handleAddToCart = async () => {
    const {id} = this.props.products;
    const {quantity} = this.state;

    //console.log(`Add ${quantity} items to cart, with product ID: ${id}`);

    await this.props.addItemToCart(id, quantity);

    this.props.history.push('/cart');
}


render () {
    
    const {products} = this.props;
    
    //console.log("product details: ", this.props);
    //console.log("product details: ", this.props.products);

    if (products === null)
        return (<h1>Loading Page</h1>)

    return (

        <div className="product-details"> 

            <h1 className="h1">{products.name}</h1> 
            <h4 className="caption">{products.caption}</h4>
            <img className="productImage" src={products.thumbnail.url} alt="Cupcake" />
            <h3 className="h3">Description:</h3>
            <h4 className="description">{products.description}</h4>
            <div className="cost">
            <Money cost={products.cost}/>
            </div>
            <br></br>

            <div className="productQuantity right mb-3">
                <h2 className="quant">Quantity</h2>
                <div className="quantityControl">
                    <button 
                    className="buttonDecrement" onClick={this.decrememntQuantity.bind(this)}>-</button>
                    <div className="quantity">  {this.state.quantity}  </div>
                    <button className="buttonIncrement" onClick={this.incrementQuantity.bind(this)}>+</button>
                </div>

                <br></br>

                <button className="buttonDetails" onClick={this.handleAddToCart.bind(this)}>Add To Cart</button>

            </div>

                       
        </div>

    )
}

}

function mapStateToProps (state) {
    
    return {
        products: state.products.details
    };
}

//Connecting Product component and getProductDetails to Redux:
export default connect(mapStateToProps, {
    addItemToCart: addItemToCart,
    clearProductDetails: clearProductDetails,
    getProductDetails: getProductDetails
})(ProductDetails);               

