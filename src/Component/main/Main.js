import React from 'react';
import MenuItem from './MenuItem';

export default function Main(props){
    return (
        <div className="main">
            {Object.keys(props.menus).map(key => 
                 <MenuItem key={key} details={props.menus[key]} index={key} setOrder={props.setOrder} order={props.order}/>
            )}
        </div>
    );
}
