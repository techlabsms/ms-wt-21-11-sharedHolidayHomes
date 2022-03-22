import React, { Component } from 'react';
import './References';
import 'tachyons';
import { references } from './References';
import "./Footer.css";

// Add some responsiveness with viewport and grid view settings

class Footer extends Component {
    render(){
        return(
            <div class="bottom">
                <div class="tc">
                    <hr color='white'/>
                    <h5 class="f4 tc white ma1 pa2">&copy; 2021 Shared Holiday Homes, Inc. All rights reserved</h5>
                

                    {references.map((item) => {
                        return (
                            <a class="dib mr4 pa2">
                                <a href={item.link}>< img src={item.logo} alt={item.desc} height="40px" witdh="40px"/></a>
                            </a>
                        )
                    })}
                </div>

                <div class="Links tc">
                    <ul class="list"> 
                        <li class="dib">
                            <a class="f4 fw4 db white hover-black link" href="#">How it works</a>
                        </li>
                        <li class="dib mr2">
                            <a class="f4 fw4 db white hover-black link" href="#">Contact</a>
                        </li>
                        <li class="dib mr2">
                            <a class="f4 fw4 db white hover-black link" href='#'>Career</a>
                        </li>
                        <li class="dib mr2">
                            <a class="f4 fw4 db white hover-black link" href='#'>Imprint</a>
                        </li>
                        <li class="dib mr2">
                            <a class="f4 fw4 db white hover-black link" href='#'>Privacy</a>
                        </li>
                    </ul>
                </div>
                
              
        </div>
       
       
        )
        }
}
    

//  class Navbar extends Component {
//     state = { clicked: false}

//     handleClick = () => {
//         this.setState({ clicked: !this.state.clicked})
//     }

//     render () {
//         return(
//             <nav className="NavbarItems">
//                 <h1 className="navbar-logo"><img className="navbarLogoImage" src='/Logo.jpg' alt='logo'></img>Shared Holiday Homes</h1>
//                 <div className="menu-icon" onClick={this.handleClick}>
//                     <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
//                 </div>
//                 <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
//                     {MenuItems.map((item, index) => {
//                         return (
//                             <li key= {index}>
//                                 <a className={item.cName} href={item.url}>
//                                     {item.title}
//                                 </a>
//                             </li>
//                         )
//                     })}
//                 </ul>
//                 <Button>Sign Up</Button>
//             </nav>
//         )
//     }
// }

export default Footer 