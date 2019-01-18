import React, { Component } from 'react';
import Card from './Components/Card';
import AddRecipe from './Components/AddRecipe';
import logo from './images/chef-hat.png'
import Search from './Components/Search';
import Modal from 'react-modal';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();

    this.state = {
      recipeCards: [],
      showModal: false
    };
    
    this.filterRecipes = this.filterRecipes.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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

  handleOpenModal (val) {
    this.setState({ showModal: val })
    console.log('modal opened');
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
    console.log('modal closed');
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <p>Add Item</p>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>

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
          <AddRecipe 
            openModal = {this.handleOpenModal}
          />
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
