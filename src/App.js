import React, { Component } from 'react';
import Card from './Components/Card';
import AddRecipe from './Components/AddRecipe';
import logo from './images/chef-hat.png'
import Search from './Components/Search';
import Modal from './Components/Modal'
import ModalRecipe from './Components/ModalRecipe';
import ModalEdit from './Components/ModalEdit';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();

    this.state = {
      recipeCards: [],
      showModal: false,
      showModalRecipe: false,
      showEdit: false,
      cardData: {},
      showID: 0
    };
    
    this.filterRecipes = this.filterRecipes.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenRecipe = this.handleOpenRecipe.bind(this);
    this.handleCloseRecipe = this.handleCloseRecipe.bind(this);
    this.handleOpenEdit = this.handleOpenEdit.bind(this);
    this.handleCloseEdit = this.handleCloseEdit.bind(this);
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
      this.setState({ recipeCards: res.data })
    })
  }

  editRecipe(id, change) {
    axios.put(`/api/recipes/${id}`, change)
    .then( (res) => {
      console.log("edited")
      this.setState({recipeCards: res.data})
      console.log(res.data)
    })
  }

  filterRecipes(str) {
    axios.get(`/api/recipes/filter?title=${str}`)
    .then( (res) => {
      this.setState({recipeCards: res.data});
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
  
  handleOpenRecipe (id) {
    axios.get(`/api/recipe/${id}`)
    .then( (res) => {
      this.setState({
        cardData: res.data[0],
        showModalRecipe: true});
        console.log(this.state.recipeCards)
    })
  }

  handleCloseRecipe () {
    this.setState({ showModalRecipe: false });
  }

  handleOpenEdit (id) {
    this.setState({
      showID: id,
      showEdit: true});
  }

  handleCloseEdit () {
    this.setState({ showEdit: false });
  }
  
  render() {
    return (
      <div>
        <Modal 
          showModal={this.state.showModal} 
          closeModal = {this.handleCloseModal} 
          addRec = {this.addRecipe}/>

        <ModalRecipe 
          showModal = {this.state.showModalRecipe}
          closeModal = {this.handleCloseRecipe}
          id = {this.state.showID}
          data = {this.state.cardData}/>

        <ModalEdit 
          showEdit = {this.state.showEdit}
          closeModal = {this.handleCloseEdit}
          editRec = {this.editRecipe}
          id = {this.state.showID}
          data = {this.state.cardData}/>

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
              deleteRec = {this.deleteRecipe}
              showMod = {this.handleOpenRecipe}
              showEdit = {this.handleOpenEdit}/>
            ))
          }
        </div>
        
      </div>
    );
  }
}

export default App;
