import React from 'react';
import Money from '../general/money';


const ProductItem = (props) => {
    

    console.log("ProductItem props: ", props);
    return (
        <div className= "grid product-item" onClick={props.goToDetails}>
            
                <div>{props.name}</div>
                <img src={props.thumbnail.url} alt="Cupcake"/>
                <div>{props.thumbnail.altText}</div>
                                
                <Money cost={props.cost}/>
            
            <br></br>
            
        </div>
    );

    }

export default ProductItem;




            
