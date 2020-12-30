import React from 'react'
import Globals from '../config/config'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function Header() {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper grey lighten-5">
                    <div className="container">
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons-round">menu</i></a>
                        <a href="#" className="brand-logo"><img className="logo-img" src={Globals['cdn-image']+'1eqcnTgEAClIQfQIQnHz45hmSzcsP6LUW'} alt="logo-july"/></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down navbar-ul">
                            <li><Link to="/" className="" href="sass.html"><i className="material-icons-round left">house</i>Inicio</Link></li>
                            <li><Link to="/portafolio" className="" href="badges.html"><i className="material-icons-round left">folder_special</i>Portafolio</Link></li>
                            <li><Link to="/experiencia" className="" href="collapsible.html"><i className="material-icons-round left">emoji_events</i>Experiencia</Link></li>
                            <li><Link to="/blog" className="" href="collapsible.html"><i className="material-icons-round left">rss_feed</i>Blog</Link></li>
                            <li><Link to="/contacto" className="" href="collapsible.html"><i className="material-icons-round left">contact_mail</i>Contacto</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header
