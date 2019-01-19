import React, { Component } from 'react';
import Card from './Components/Card';
import AddRecipe from './Components/AddRecipe';
import logo from './images/chef-hat.png'
import Search from './Components/Search';
import Modal from './Components/Modal'
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
    this.addRecipe = this.addRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
  }

  componentDidMount() {
    axios.get('/api/recipes')
    .then( (res) => {
      this.setState({recipeCards: res.data})
    })
  }

  addRecipe(obj) {
    axios.post('/api/recipes', obj)
    .then( (res) => {
      this.setState({recipeCards: res.data})
    })
  }

  deleteRecipe(id) {
    axios.delete(`/api/recipes/${id}`)
    .then( (res) => {
      console.log("deleted")
      this.setState({recipeCards: res.data})
    })
  }

  editRecipe(id) {
    axios.delete(`/api/recipes/${id}`)
    .then( (res) => {
      console.log("edited")
      this.setState({recipeCards: res.data})
    })
  }

  filterRecipes(str) {
    axios.get(`/api/recipes/${str}`)
    .then( (res) => {
      this.setState({recipeCards: res.data});
      console.log("checkfunction")
    })
  }

  handleOpenModal () {
    this.setState({ showModal: true })
    console.log(this.state.showModal);
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
    console.log(this.state.showModal);
  }

  render() {
    return (
      <div>
        <Modal showModal={this.state.showModal} closeModal = {this.handleCloseModal}>
          <div className="recipe-modal">
            <img src={logo} alt="logo"/>
          </div>
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
              id={card.id}
              image_url={card.image_url}
              title={card.title}
              deleteRec = {this.deleteRecipe}/>
            ))
          }
        </div>
        
      </div>
    );
  }
}

export default App;
