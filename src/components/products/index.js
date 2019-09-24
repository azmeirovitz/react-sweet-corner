import React, {Component} from 'react';
import './products.scss';
import {connect} from 'react-redux';
import {getAllProducts} from '../../actions';
import ProductItem from './product_item';

class Products extends Component {
    
componentDidMount () {
    this.props.getAllProducts();
}

render () {

    const {products} = this.props;
    console.log("products from render: ", products);

    const productElements = products.map((product) => {
        return <ProductItem key={product.id} {...product} />
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

              
