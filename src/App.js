import React, { Component } from 'react';
import Card from './Components/Card';
import logo from './taco.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <img className="logo" src={logo} alt='logo'/>
          <h2 className="Header-title">Tacosss</h2>
          <div className="Search">
            <input className="Searchbar" defaultValue={"Search"} />
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
