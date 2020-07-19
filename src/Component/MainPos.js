import React from 'react';
import { Navbar } from './main/Navbar';
import { Sidebar } from './main/Sidebar';
import Main from './main/Main';

export default function MainPos(props){
    return (
        <div className="main-pos">
            <Navbar/>
            <Sidebar/>
            <Main menus={props.menus} setOrder={props.setOrder} order={props.order}/>
        </div>
    )
}