import React from 'react';
import CartItem from './cart/CartItem';
import OrderDetails from './cart/OrderDetails';

export default function CartPos(props){
    const order = Object.keys(props.order);
    const subtotal = order.reduce((prevTotal, key) => {
        const menu = props.menus[key];
        const count = props.order[key].qty;
        return prevTotal + count * menu.price;
    },0)
    return (
        <div className="cart-pos">
            <div className="cart-title">
                <h2>Cart ({Object.keys(props.order).length})</h2>   
            </div>
            <hr></hr>
            <div className="cart-info">
                <h4 id="order-list">Order List #1</h4>
                <h4 id="date">{new Date().toLocaleString()}</h4>
            </div>
            <hr></hr>
            <div className="cart-container">
                {Object.keys(props.order).map(key=><CartItem key={key} index={key} 
                details={props.menus[key]} orderdetail={props.order[key]} order={props.order} setOrder={props.setOrder}/>)}
            </div>
            <hr></hr>
            <OrderDetails subtotal={subtotal}/>
        </div>
    );
}