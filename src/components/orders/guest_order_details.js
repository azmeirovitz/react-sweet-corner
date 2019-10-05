import React, {Component} from 'react';
import {getGuestOrderDetails} from '../../actions';
import {connect} from 'react-redux';
import {queryToObject} from '../../helpers';
import {dateAndTime} from './date_and_time';
import './orders.scss'; 


class GuestOrderDetails extends Component {


componentDidMount () {

    const {match, location} = this.props;

    const query = queryToObject(location.search);

    console.log("Query Object: ", query);

    

    console.log("getGuestOrderDetails this.props: ", this.props)

    const orderId = this.props.match.params.order_id;

    console.log("orderId from guest_order_details: ", orderId);

    console.log("this.props.match.params.order_id from guest_order_details: ", this.props.match.params.order_id);

    this.props.getGuestOrderDetails(orderId, query.email);


}

render () {

    console.log ("Order Details::: ", this.props); 

    const cartItems = this.props.orders ? this.props.orders.items : [];

    let trial = this.props.orders && this.props.orders.createdAt;

    console.log("Day and Time: ", 
    trial);

    const objectTime = dateAndTime(trial);

    console.log("Query Object: ", objectTime);

    var objectTime2 = objectTime && objectTime[1].split(":");

    console.log("objectTime2:: ", objectTime2);

    var hourNumber = parseInt(objectTime2 && objectTime2[0]);
    console.log("hourNumber: ", hourNumber, objectTime2 && objectTime2[0]);



    if (hourNumber > 12) {
        var hourNumber1 = hourNumber - 12;

        objectTime2[0] = hourNumber1;
        var res = "";
        res = objectTime2[2].replace(".000Z", "PM");        
        
    } else {
        var res1 = ""
        res1 = objectTime2 && objectTime2[2].replace(".000Z", "AM");
    }

    
    return (
        <div>
            <h1 className="center">Guest Order Details</h1>
            <h2 className="cartStatus">Status: {this.props.orders &&this.props.orders.status}</h2>

            <h4>Order #: {this.props.orders &&this.props.orders.id}</h4>

            <h6>"Save order number to check order status in the future"</h6>

            <h5>Order Placed: {objectTime && objectTime[0]}, {objectTime2 && objectTime2[0]}:{objectTime2 && objectTime2[1]}:{res1}{res}</h5>

            <h5>Order Total Items: {this.props.orders &&this.props.orders.itemCount}</h5>

            <h5>Order Total Cost: ${this.props.orders &&(this.props.orders.total/100).toFixed(2)}</h5>
            <h5>Order Items:</h5>

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
                        <tr key={oneItem.product.productId}>
                            <td className="td">
                             <img className="cupcakeImgCart" src={oneItem.product.thumbnail.url} />
                            </td>

                            <td className="td">                           
                           {oneItem.product.name}                         
                           </td>
                            
                            <td className="td">${(oneItem.each/100).toFixed(2)}</td>                   


                            <td className="td">{oneItem.quantity}</td>

                            <td className="td">${(oneItem.total/100).toFixed(2)}</td>
                    </tr> 
                    )})}

                    
                        
                    </tbody>

                </table>
            </div>

            <h3 className="orderTotals">Order Totals: {this.props.orders &&this.props.orders.itemCount} <span className="span">${this.props.orders &&(this.props.orders.total/100).toFixed(2)}</span></h3>

            
        </div>


    )
}


}

function mapStateToProps (state) {
    
    return {
        orders: state.orders.details

    }
}


export default connect(mapStateToProps, {    
    getGuestOrderDetails: getGuestOrderDetails
})(GuestOrderDetails);

