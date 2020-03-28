import React, { Component } from 'react';
import '../App.css';
import fire from '../config/fire';
import axios from 'axios';


class Paiement extends Component {

    logout= () =>{
        fire.auth().signOut();
    }

    constructor(props){
        super(props);
        this.state={
            test:''
        }
    }
    componentDidMount(){
        axios.get('https://blockchain.info/tobtc?currency=EUR&value=1')
        .then(reponse=>{
            this.setState({
                test:reponse.data
            })
        })
    }

    render(){
        return(
            <React.Fragment>
                 <header className="App-header">
                    <h1> Plateforme de paiement </h1>
                    <br/>
                    <p> Gérer mon portefeuille </p>
                    <h3 color = "rgb(0,255,0)" >1btc({1*this.state.test}€)</h3  >
                    <br/>
                    <button>Ajouter des fonds</button>
                    <br/>
                    <button>Retirer des fonds</button>
                    <br/><br/>
                    <p> Ton adresse </p>
                    <input type ="text" name="musics"   text-align="right"/>
                    <p> Entrez un noeud lightning </p>
                    <input type ="text" name="musics"   text-align="right"/>
                    <p> Adresse de l'artiste </p>
                    <input type ="text" name="musics"/>
                    <br/>
                    <button>Créer un canal de paiement</button>
                    <br/><br/> 
                    
                    
                    <button onClick={this.logout}>Deconnexion</button>
                    <br/>
                </header>
            </React.Fragment>
            
        )
    }
}
 
export default Paiement;