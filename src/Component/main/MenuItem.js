import React from 'react';
import {formatPrice} from '../../helper';


export default function MenuItem(props){
    const {name, price, image} = props.details;

    function handleClick(){
        props.setOrder([...props.order,]);
    }  

    return (
        <div className="menu-item" onClick={handleClick} index={props.index}>
            <img src={image} alt={name}/>
            <strong>{name}</strong>
            <span>{formatPrice(price)}</span>
        </div>
    );
}
