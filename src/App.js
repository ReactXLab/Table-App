import React, { Component } from 'react';
import Table from './Table';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Table/>
      </div>
    );
  }
}

export default App;
