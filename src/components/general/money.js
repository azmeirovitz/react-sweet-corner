import React from 'react';

const Money = (props) => {

    console.log("Money props: ", props);

    const cupcakeCostPennies = props.cost;

    const cupcakeCostDollars = cupcakeCostPennies/100;

    return (
    
    <div>${(cupcakeCostDollars).toFixed(2)}</div>
    )

}

export default Money;
