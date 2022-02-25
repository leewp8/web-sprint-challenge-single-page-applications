import React, {useState, useEffect} from "react";
import {Switch, Route, Link} from 'react-router-dom'
import OrderForm from "./Components/OrderForm";

const App = () => {

  const [orders, setOrders] = useState([])

  const orderSubmit = (newOrder) => {
    setOrders([...orders, newOrder])
  }

  useEffect(() => {
    console.log(orders)
  }, [orders])

  return (
    <div className='App'>
      <header>
        <Link to="/">Home</Link>
      </header>
      <Switch>
        <Route exact path="/">
          <h1>BloomTech Pizza Shop</h1>
          <h3>Programmable Pizza made by you ;)</h3>
          <Link id="order-pizza" to="/pizza">Order Pizza</Link>
        </Route>
        <Route exact path="/pizza">
          <OrderForm orderSubmit={orderSubmit}/>
        </Route>
      </Switch>
      
    </div>
  );
};
export default App;
