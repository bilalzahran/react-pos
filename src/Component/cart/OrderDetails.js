import React from 'react';
import {formatPrice} from '../../helper';

export default function OrderDetails({subtotal}){
    const tax = 0.1 * subtotal;
    return (
        <div className="order-details">
            <div id="subtotal" className="detail">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
            </div>
            <div id="discount" className="detail">
                <span>Discount (0%)</span>
                <span>{formatPrice(0)}</span>
            </div>
            <div id="pajak" className="detail">
                <span>Pajak (10%)</span>
                <span>{formatPrice(tax)}</span>
            </div>
            <div id="total" className="detail">
                <span><h3>Total</h3></span>
                <span><h3>{formatPrice(subtotal + tax)}</h3></span>
            </div>
            <div id="button">
                <button className="square-button">Save</button>
                <button className="square-button">Coupon</button>
                <button className="square-button">Split Bill</button>
                <button className="pay-button">Bayar</button>
            </div>
        </div>
    );
}