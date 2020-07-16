import React from 'react';
import { Navbar } from './main/Navbar';
import { Sidebar } from './main/Sidebar';
import { Main } from './main/Main';

class MainPos extends React.Component {
    render(){
        return (
            <div className="main-pos">
                <Navbar/>
                <Sidebar/>
                <Main/>
            </div>
        );
    }
}

export default MainPos;