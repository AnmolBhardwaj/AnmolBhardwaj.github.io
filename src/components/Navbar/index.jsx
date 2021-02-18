import {Nav, Navbar,NavLink} from 'react-bootstrap';
import React from 'react';
import './index.css';
import classNames from 'classnames';
import { Link } from "react-router-dom";
import Football from '../Football';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isNavExpanded:false};
  }
  navExpanded = React.createRef();
  navTitle = React.createRef();

  showNavExpanded(){
    this.setState({
     isNavExpanded:true
    })
  }

  hideNavExpanded(){
    this.setState({
      isNavExpanded:false
     })
  }

  componentDidMount(){
    this.hideNavExpanded();
  }


render(){
    return(
        <Navbar onMouseEnter={()=>{this.showNavExpanded()}}
        onMouseLeave={()=>{this.hideNavExpanded()}}
         className={classNames("nvbar",{"visible" : (this.state.isNavExpanded) })}   expand="lg">

          <div
            ref = {this.navTitle}
            className="nvbar-content"

            >
          <span> &lt; </span>

          <div className={classNames("nv-expanded",{"shown" : (this.state.isNavExpanded) })}  ref={this.navExpanded}>
          <Nav.Link href="/"><span className="nv-expanded-contents">Home</span></Nav.Link>
            <Nav.Link><Link to="/develop"><span className="nv-expanded-contents">Development</span></Link></Nav.Link>
            <Nav.Link><Link to="/football"><span className="nv-expanded-contents">Football</span></Link></Nav.Link>
            <Nav.Link><span className="nv-expanded-contents">Stories</span></Nav.Link>
          </div>
          <span> /&gt;</span>
          </div>

        </Navbar>

    )
}
}

export default NavBar;
