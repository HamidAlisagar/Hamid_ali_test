import React from 'react';
import {Route , Switch} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DetailCharacter from './components/DetailCharacter';
function App() {
  return (
    <div className="">
      <Navbar/>
      <Switch>
       

        <Route path="/detail/:id" component={DetailCharacter}/>
        <Route path="/detail"  component={Home}/>
        
      </Switch>

    </div>
  );
}

export default App;
