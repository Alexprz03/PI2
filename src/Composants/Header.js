import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render(){
        return(
            /*<React.Fragment>
                <nav className = "navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0" >
                <a href="/" className = "navbar-brand"> Accueil </a>
                </nav>
            </React.Fragment>*/
                <nav className= "navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0" >
                    <a href="/" className="navbar-brand">Accueil</a>
                    <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                        <a href="/ListMusic" className="nav-link">Liste des musiques disponibles</a>
                        </li>
                        <li className="navbar-item">
                        <a href="/Inscription" className="nav-link">Inscription</a>
                        </li>
                    </ul>
                    </div>
                </nav>
        )
    }
}