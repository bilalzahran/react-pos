import React, {useState} from 'react';
import MainPos from './MainPos';
import CartPos from './CartPos';
import BakmiSample from '../bakmi-samples';
import {useOrder, addOrder, removeOrder} from './cart/Order';

function App() {
  const [menu, setMenu] = useState(BakmiSample);
  const [order, setOrder] = useState({});

  return (
      <div className="container">
        <MainPos menus={menu} setOrder={setOrder} order={order}/>
        <CartPos order={order} menus={menu}/>
      </div>
    );
}

export default App;
