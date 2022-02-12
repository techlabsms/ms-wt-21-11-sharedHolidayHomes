import React, { Component } from 'react';
import './References';
//import 'tachyons';
import { references } from './References';

// Add some responsiveness with viewport and grid view settings

class Footer extends Component {
    render(){
        return(
            
            <div class="bottom">
                <div class="tc">
                    <hr width="85%" align="center" color='#a3e8d6'></hr>
                    <h5 class="f4 tc light-green ma1 pa2">&copy; 2021 Shared Holiday Homes, Inc. All rights reserved</h5>
                

                    {references.map((item, logo, desc, link) => {
                        return (
                            <a class="dib mr3 pa2">
                                <a href={item.link}>< img src={item.logo} alt={item.desc} height="40px" witdh="40px"/></a>
                            </a>
                        )
                    })}
                </div>

                <div class="Links tc">
                    <ul class="list ph3 ph5-ns pv1 ma0"> 
                        <li class="dib mr2">
                            <a class="f4 fw4 db black link hover-light-green pa3" href="#">So funktionierts</a>
                        </li>
                        <li class="dib mr2">
                            <a class="f4 fw4 db black link hover-light-green pa3" href="#">Über uns</a>
                        </li>
                        <li class="dib mr2">
                            <a class="f4 fw4 db black link hover-light-green pa3" href="#">Kontakt</a>
                        </li>
                        <li class="dib mr2">
                            <a class="f4 fw4 db black link hover-light-green pa3" href='#'>Jobs</a>
                        </li>
                        <li class="dib mr2">
                            <a class="f4 fw4 db black link hover-light-green pa3" href='#'>Impressum</a>
                        </li>
                        <li class="dib mr2">
                            <a class="f4 fw4 db black link hover-light-green pa3" href='#'>Datenschutz</a>
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