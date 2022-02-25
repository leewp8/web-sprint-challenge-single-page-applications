import React from "react";
import {Switch, Route, Link} from 'react-router-dom'
import OrderForm from "./Components/OrderForm";

const App = () => {
  return (
    <div className='App'>
      <header>
        <Link to="/">Home</Link>
        
      </header>
      <Switch>
        <Route exact path="/">
          <h1>BloomTech Pizza Shop</h1>
          <p>Programmable Pizza made by you ;)</p>
          <Link id="order-pizza" to="/pizza">Order Pizza</Link>
        </Route>
        <Route exact path="/pizza">
          <OrderForm/>
          
        </Route>
      </Switch>
      
    </div>
  );
};
export default App;
