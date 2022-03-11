import React, { Component } from 'react';
//import { MenuItems} from "./NavbarComponents/MenuItems";
/*import { Button } from '../Button';*/
import Searchbar from './NavbarComponents/Searchbar';
import './Navbar.css';
import HouseData from "./NavbarComponents/mock.json";
import {Link} from 'react-router-dom';



class Navbar extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render () {
        return(
            <nav className="NavbarItems">
                <div className="navbar-logo">
                    <img className="navbarLogoImage" src='/Logo.png' alt='logo'></img> 
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                            <li><Link to="about" className="link"> About Us </Link> </li>
                            <li><Link to="offer" className="link"> Make an Offer</Link></li>
                            <li><Link to="login" className="link">Log In</Link></li>
                </ul>
                <Searchbar placeholder="Search..." data={HouseData}/>
            </nav>
        )
    }
}

export default Navbar