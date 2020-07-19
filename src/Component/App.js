import React, {useState} from 'react';
import MainPos from './MainPos';
import CartPos from './CartPos';
import BakmiSample from '../bakmi-samples';

function App() {
  const [menu, setMenu] = useState(BakmiSample);
  const [order,setOrder] = useState([]);
  return (
      <div className="container">
        <MainPos menus={menu} setOrder={setOrder} order={order}/>
        <CartPos/>
      </div>
    );
}

export default App;
