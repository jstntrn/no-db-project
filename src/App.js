import React, { Component } from 'react';
import Card from './Components/Card';
import AddRecipe from './Components/AddRecipe';
import logo from './images/chef-hat.png'
import Search from './Components/Search';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      recipeCards: []
    }
  }

  componentDidMount() {
    axios.get('/api/recipes')
    .then( (res) => {
      this.setState({recipeCards: res.data})
    })
  }

  filterRecipes(text) {
    axios.get(`/api/recipes/filter?title=${text}`)
    .then( (res) => {
      this.setState({recipeCards: res.data});
    })
  }

  render() {
    return (
      <div>
        <div className="App-header">
          <img className="logo" src={logo} alt='logo'/>
          <h2 className="Header-title">Golden Recipes</h2>
          <div className="Search">
            <Search 
              filterRec = {this.filterRecipes}
            />
          </div>
        </div>
        <div className="Header-fill"></div>
        <div className="Card-display">
          <AddRecipe />
          {
            this.state.recipeCards.map (card => (
              <Card 
              key={card.id}
              image_url={card.image_url}
              title={card.title}/>
            ))
          }

        </div>
        
      </div>
    );
  }
}

export default App;
