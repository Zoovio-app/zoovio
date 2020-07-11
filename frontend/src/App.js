import React from "react";
import { Route, Switch } from 'react-router-dom'
import "./App.css";
import LandingPage from './components/LandingPage'

function App() {
  return(

  <div className="App">
  <Switch>
    <Route exact path={"/"}>
      <LandingPage/>
    </Route>
    
  </Switch>

  </div>
  );
}

export default App;

