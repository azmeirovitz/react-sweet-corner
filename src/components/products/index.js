import React, {Component} from 'react';
import './products.scss';
import {connect} from 'react-redux';
import {getAllProducts} from '../../actions';
import ProductItem from './product_item';

class Products extends Component {
    
componentDidMount () {
    this.props.getAllProducts();
}

goToDetails (id) {
    this.props.history.push(`/products/${id}`);

}

render () {

    const {products} = this.props;
    
    const productElements = products.map((product) => {
        return (
        <ProductItem 
        key={product.id} {...product} 
        goToDetails={this.goToDetails.bind(this, product.id)}
        />
        
        );
    });

    
    return (
        <div className="products">
            <h1 className="h1">Products:</h1>
            
                <div className="row">
                    <div>{productElements}</div>
                </div>
            

        </div>
    );
}

}

function mapStateToProps (state) {
    //console.log("mapStateToProps state: ", state);
    return {
        products: state.products.list
    };
}


//Connecting Product component and getAllProducts to Redux:
export default connect(mapStateToProps, {
    getAllProducts: getAllProducts
})(Products);

              
