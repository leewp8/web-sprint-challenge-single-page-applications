import React from "react";
import {Switch, Route, Link} from 'react-router-dom'
import OrderForm from "./Components/OrderForm";

const App = () => {
  return (
    <div className='App'>
      <header>
        <Link id="order-pizza" to="/">Home</Link>
        <Link id="pizza-form" to="/pizza">Order Pizza</Link>
      </header>
      <Switch>
        <Route exact path="/">
          <h1>BloomTech Pizza Shop</h1>
          <p>Programmable Pizza made by you ;)</p>
        </Route>
        <Route exact path="/pizza">
          <OrderForm id="pizza-form"/>
          
        </Route>
      </Switch>
      
    </div>
  );
};
export default App;
