import React from 'react';
import {formatPrice} from '../../helper';

export default function CartItem({details,orderdetail,order,index,setOrder}){
    function addQty(e) {
        let newOrder = {...order};
        newOrder[index].qty += 1;
        setOrder(newOrder);
        console.log(e.currentTarget);
    }

    function reduceQty(){
        let newOrder = {...order};
        if(newOrder[index].qty === 1){
            delete newOrder[index];
            setOrder(newOrder);
        }else{
            newOrder[index].qty -= 1;
            setOrder(newOrder);
        }
    }

    function handleQtyChange(e){
        let newOrder = {...order};
        newOrder[index].qty = parseInt(e.currentTarget.value);
        setOrder(newOrder);
    }

    function handleNotes(e){
        let newOrder = {...order};
        newOrder[index].notes = e.currentTarget.value;
        setOrder(newOrder);
    }
    return (
        <div className="cart-item">
            <div className="cart-item-detail">
                <div className="info">
                    <ul>
                        <li><h3>{details.name}</h3></li>
                        <li>{formatPrice(details.price)}</li>
                        <li><input type="text" name="notes" id="notes" placeholder="Notes" onChange={handleNotes}></input></li>
                    </ul>
                </div>
                <div className="qty-form">
                    <div className="form">
                        <button type="button" onClick={reduceQty}>-</button>
                        <input type="number" value={order[index].qty} onChange={handleQtyChange}></input>
                        <button type="button" onClick={addQty}>+</button>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}