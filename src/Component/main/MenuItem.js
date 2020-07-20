import React from 'react';
import {formatPrice} from '../../helper';

export default function MenuItem(props){
    const {name, price, image} = props.details;
    function handleClick(){
        const index = props.index;
        if([index] in props.order){
            let newOrder = {...props.order};
            newOrder[index].qty += 1; 
            props.setOrder(newOrder);
        }else{
            props.setOrder({...props.order, [index]: {qty: 1, notes: " "}});
        }
    }  

    return (
        <div className="menu-item" onClick={handleClick} index={props.index}>
            <img src={image} alt={name}/>
            <strong>{name}</strong>
            <span>{formatPrice(price)}</span>
        </div>
    );
}
