import React, { Component } from 'react';
import './ModalRecipe.css';
import axios from 'axios';

class ModalRecipe extends Component {

    constructor(props){
        super(props)

        this.state = {
            modalCard: {}
        }
    }

    componentDidMount(){
        let {id} = this.props;
        axios.get(`/api/recipes/${id}`)
        .then( (res) => {
            this.setState({modalCard: res.data})
        })
    }
  
    render(){
        let {closeModal} = this.props;
        let {title, image_url, ingredients, instructions} = this.state.modalCard;
        let modal = (
            <div className="dialogStyles">
                <button className="dialogCloseButtonStyles" onClick={closeModal}>+</button>
                <div className="recipe-modal">
                    <h3>{title}</h3>
                    <img src={image_url} alt='recipe'/>
                    <h3>INGREDIENTS</h3>
                    <p>{ingredients}</p>
                    <h3>COOKING INSTRUCTIONS</h3>
                    <p>{instructions}</p> />
                </div>
            </div>

        );

        
        if (!this.props.showModal) {
            modal = null;
        };

        return(
            <div>
                {modal}
            </div>
        );
    }
}

export default ModalRecipe;