import React, {useState} from "react";
import OrderDeli from '../../components/OrderDelivery'

const OrderDelivery = ({ route, navigation }, ...props) => {
    return (
       <OrderDeli navigation={navigation} route={route} {...props}></OrderDeli>
    )
}


export default OrderDelivery;