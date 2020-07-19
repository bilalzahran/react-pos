import React from 'react';
import {formatPrice} from '../../helper';

export default function CartItem({details,order}){
    return (
        <div className="cart-item">
            <div className="cart-item-detail">
                <div className="info">
                    <ul>
                        <li><h3>{details.name}</h3></li>
                        <li>{formatPrice(details.price)}</li>
                        <li><input type="text" name="notes" id="notes" placeholder="Notes"></input></li>
                    </ul>
                </div>
                <div className="qty-form">
                    <div className="form">
                        <button type="button">-</button>
                        <input type="number" value={order.qty}></input>
                        <button type="button">+</button>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}