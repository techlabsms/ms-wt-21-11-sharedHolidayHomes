import React, { Component } from 'react';
import { MenuItems} from "./NavbarComponents/MenuItems";
/*import { Button } from '../Button';*/
import Searchbar from './NavbarComponents/Searchbar';
import './Navbar.css';
import HouseData from "./NavbarComponents/mock.json";
import { Link } from "react-router-dom";



class Navbar extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render () {
        return(
            <nav className="NavbarItems">
                <div className="navbar-logo">
                    {/* <img className="navbarLogoImage" src='/Logo.jpg' alt='logo'></img>  */}
                    <Link to="/"><img src='/Logo.jpg' alt='logo' height="70px" width="70px" className='ma2'/></Link>
                </div>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key= {index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Searchbar placeholder="Search..." data={HouseData}/>
            </nav>
        )
    }
}

export default Navbar