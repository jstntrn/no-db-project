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

    this.filterRecipes = this.filterRecipes.bind(this);
  }

  componentDidMount() {
    axios.get('/api/recipes')
    .then( (res) => {
      this.setState({recipeCards: res.data})
    })
  }

  filterRecipes(str) {
    axios.get(`/api/recipes/filter?text=${str}`)
    .then( (res) => {
      this.setState({recipeCards: res.data});
      console.log("checkfunction")
    })
  }

  render() {
    return (
      <div>
        <div className="modal">
          <div className="model-content">
            <div className="white-box">
              <div className="close-modal">+</div>
              <img className="modal-logo" src={logo} alt='logo'/>
              <form>
                  <input className="title-input" placeholder="Recipe Title" />
                  <input className="image-input" placeholder="Image URL" />
                  <input className="ingredients-input" placeholder="Ingredients" />
                  <input className="instruction-input" placeholder="Cooking Instructions" />
                  <button className="add-button">add recipe</button>
              </form>
            </div>
          </div>
        </div>
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
