import {Nav, Navbar,NavLink} from 'react-bootstrap';
import React from 'react';
import classNames from 'classnames';
import NavBar from '../Navbar'
import BG from '../../BG.png';
import './index.css';

class Develop extends React.Component{

    componentDidMount(){
        console.log("opopopop")
    }

    render(){
        return(
          <div className="container">
              <img className="bg-Develop" src={BG}></img>
              <div> Heelo DEV</div>
          </div>
        )
    }

}
export default Develop;