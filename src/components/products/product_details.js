import React, { Component } from 'react';
import {connect} from 'react-redux';
import {clearProductDetails, getProductDetails} from '../../actions';
import Money from '../general/money';
import './product-details.scss';


class ProductDetails extends Component {

componentDidMount () {
    
    const {getProductDetails, match: {params}} = this.props;

    getProductDetails(params.product_id);

    // this.props.getProductDetils(this.props.match.params.product_id);

}

//A match object contains information about how a <Route path> matched the URL. It was products/id, and the id is the number that is part of the URL.

componentWillUnmount () {
    console.log("ProductDetails component about to unmount");

    this.props.clearProductDetails();
}


render () {

    const {products} = this.props;

    console.log("product details: ", this.props.products);

    if (products == null)
        return (<h1>Loading Page</h1>)

    return (

        <div className="product-details"> 

            <h1 className="h1">{products.name}</h1> 
            <img className="productImgage" src={products.thumbnail.url} alt="Cupcake" />
            <h3 className="h3">Description:</h3>
            <h4 className="h4">{products.description}</h4>
            <div className="cost">
            <Money cost={products.cost}/>
            </div>
            <br></br>

                       
        </div>

    )
}

}

function mapStateToProps (state) {
    console.log("mapStateToProps state of product details: ", state);
    return {
        products: state.products.details
    };
}

//Connecting Product component and getProductDetails to Redux:
export default connect(mapStateToProps, {
    clearProductDetails: clearProductDetails,
    getProductDetails: getProductDetails
})(ProductDetails);               

