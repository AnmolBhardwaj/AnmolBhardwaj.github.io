import './App.css';
import React from "react";
import { Helmet } from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import BG from './BG.png';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Football from './components/Football';
import Develop from "./components/Develop";


function App() {

  return (

    <div className="App">
       <Helmet>
          <title>AnmolBhardwaj</title>
        </Helmet>
        <Router>
        <img id="bg-homepage" src={BG}></img>
        <Navbar/>
        <div className="title-container">
        <div className="title">I.I.W.I.I</div>
        <div className="desc-title">Consider this website as the back-page of my notebook</div>
        </div>
        <Switch>
            <Route path="/football" ><Football/> </Route>
            <Route path="/develop" ><Develop/> </Route>

          </Switch>
          </Router>
          </div>
  );
}

export default App;
