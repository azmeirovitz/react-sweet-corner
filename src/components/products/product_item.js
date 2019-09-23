import React from 'react';



const ProductItem = (props) => {
    

    console.log("ProductItem props: ", props);
    return (
        <div className= "grid product-item">
            
                <div>{props.name}</div>
                <img src={props.thumbnail.url} alt="Cupcake"/>
                <div>{props.thumbnail.altText}</div>                

                <div>${props.cost/100}</div>
            
            <br></br>
            
        </div>
    );

    }

export default ProductItem;




            
