import React, {Component} from 'react';
import './products.scss';
import {connect} from 'react-redux';
import {getAllProducts} from '../../actions';

class Products extends Component {
    // constructor (props) {
    //     super (props)
    // }

componentDidMount () {
    //console.log("products Component Mounted");
    this.props.getAllProducts();
}

render () {

    const {products} = this.props;
    console.log("products from render: ", products);

    return (
        <div className="products">
            <h1 className="h1">Products:</h1>

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



