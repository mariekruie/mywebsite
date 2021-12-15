import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './header.css';

class Header extends Component {

   state={
       infoActive: false
   };

   handleClick = () => {
       this.setState({
           infoActive: !this.state.infoActive
       })
    //    window.document.body.style.backgroundColor = "#f0ebdb";
   }

   render(){

    const {infoActive} = this.state;

    return(
        <div className="header container--pdX">
            {!infoActive && <Link to="/info" onClick={this.handleClick}>info</Link>}
            {infoActive && <Link to="/" onClick={this.handleClick}>home</Link>}
        </div>
    )
   }
}

export default Header;
