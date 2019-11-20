import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return(
            <div>
                <nav className = "navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0" >
                 <div className = "container">
                    <a href="/" className = "navbar-brand"> Accueil </a>
                 </div>  
                </nav>
            </div>
        )
    }
}