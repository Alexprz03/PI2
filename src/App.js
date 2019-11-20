import React, { Component } from 'react';
import './App.css';
import FirstComponent from './Composants/FirstComponent.js';
import  'bootstrap/dist/css/bootstrap.min.css';
import Header from './Composants/Header';

class App extends Component {

  state = {
    presentation : [
      {
        id : 1, 
        name : 'Perez',
        firstname : 'Alexandre'
      },
      {
        id : 2, 
        name : 'Pauty',
        firstname : 'Camille'
      },
      {
        id : 3, 
        name : 'Engel',
        firstname : 'Matthieu'
      },
      {
        id : 4, 
        name : 'Guessous',
        firstname : 'Alec'
      },
    ]
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
        <Header />
          <h2> BTC Radio Stream </h2>
          <FirstComponent names = {this.state.presentation}/>
        </header>
      </div>
    );
  }
} 

export default App; 