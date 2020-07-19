import React from 'react';
import CartItem from './cart/CartItem';
import {formatPrice} from '../helper';

export default function CartPos(props){
    return (
        <div className="cart-pos">
            <div className="cart-title">
                <h2>Cart (4)</h2>   
            </div>
            <hr></hr>
            <div className="cart-info">
                <h4 id="order-list">Order List #1</h4>
                <h4 id="date">{new Date().toLocaleString()}</h4>
            </div>
            <hr></hr>
            <div className="cart-container">
                {Object.keys(props.order).map(key=><CartItem key={key} details={props.menus[key]} order={props.order[key]}/>)}
            </div>
            <hr></hr>
            <div className="order-details">
               <div id="subtotal" className="detail">
                    <span>Subtotal</span>
                    <span>{formatPrice(127000)}</span>
               </div>
               <div id="discount" className="detail">
                    <span>Discount (0%)</span>
                    <span>{formatPrice(127000)}</span>
               </div>
               <div id="pajak" className="detail">
                    <span>Pajak (10%)</span>
                    <span>{formatPrice(127000)}</span>
               </div>
               <div id="total" className="detail">
                   <span><h3>Total</h3></span>
                   <span><h3>{formatPrice(1200000)}</h3></span>
               </div>
               <div id="button">
                   <button className="square-button">Save</button>
                   <button className="square-button">Coupon</button>
                   <button className="square-button">Split Bill</button>
                   <button className="pay-button">Bayar</button>
               </div>
            </div>
        </div>
    );
}