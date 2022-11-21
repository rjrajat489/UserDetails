import './App.css';
import GetUser from './GetUser';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from './AddUser';
import ErrorPage from './ErrorPage';
import ReactSwitch from 'react-switch';
import { useState, useEffect } from 'react';

function App() {
  let [theam,setTheam]=useState(JSON.parse(localStorage.getItem('data')) || "dark")

const toggleTheme=()=>{
  setTheam((currentTheam)=>(currentTheam==="light"?"dark":"light"))
 
}

useEffect(() => {
  localStorage.setItem("data", JSON.stringify(theam));
},[theam]);
  return (
    <div className='App'>
    <div  className={theam}>
      <div className="toogle">
      <span>{theam==="light"?"Light":"Dark"} Theam</span><ReactSwitch onChange={toggleTheme} checked={theam==="dark"}/>
      </div>

  <Router >
      <Switch>
        <Route path="/AddUser">
          <AddUser/>
        </Route>
        <Route path="/" exact>
        <GetUser/>
        </Route>
        <Route path="/ErrorPage">
        <ErrorPage/>
        </Route>
      </Switch>
  </Router>
    </div>
    </div>
  );
}

export default App;
