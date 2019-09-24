import React from 'react';
import {getAllProducts} from '../../actions';

//import {price} from 'ProductItem';

const Money = (props) => {

    console.log("Money props: ", props);

    const cupcakeCostPennies = props.cost;

    const cupcakeCostDollars = cupcakeCostPennies/100;

    return (
    
    <div>${cupcakeCostDollars}</div>
    )

}

export default Money;
