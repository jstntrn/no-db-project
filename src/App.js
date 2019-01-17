import React, { Component } from 'react';
import Card from './Components/Card';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <h2 className="Header-title">Header</h2>
          <div className="Search">
            <input className="Searchbar"/>
          </div>
        </div>
        <div className="Header-fill"></div>
        <div className="Card-display">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        
      </div>
    );
  }
}

export default App;
