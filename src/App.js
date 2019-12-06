import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import  'bootstrap/dist/css/bootstrap.min.css';

import ListMusic from './Composants/MusicList'
import Header from './Composants/Header'
import Menu from './Menu'
import Inscription from './Composants/Inscription'


class App extends Component {


  render(){
    return (
        <Router>
          <Header/>
           <Route path ="/" exact component = {Menu} />
           <Route path="/ListMusic" component={ListMusic} />
           <Route path="/Inscription" component={Inscription} />
        </Router>
    );
  }
} 

export default App; 