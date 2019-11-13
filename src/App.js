import React, { Component } from 'react';
import './App.css';
import FirstComponent from './Composants/FirstComponent.js';

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
          <h2> eStreaming </h2>
          <FirstComponent names = {this.state.presentation}/>
        </header>
      </div>
    );
  }
} 

export default App;