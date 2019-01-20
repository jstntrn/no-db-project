import React, { Component } from 'react';
import './ModalRecipe.css';

class ModalRecipe extends Component {
 
    render(){
        let {closeModal} = this.props;
        let {title, image_url, ingredients, instructions} = this.props.data;      
        
        let modal = (
            <div className="dialogStyles">
                <button className="dialogCloseButtonStyles" onClick={closeModal}>+</button>
                <div className="recipe-modal">
                    <h3>{title}</h3>
                    <img src={image_url} alt='recipe'/>
                    <h3>INGREDIENTS</h3>
                    <p>{ingredients}</p>
                    <h3>COOKING INSTRUCTIONS</h3>
                    <p>{instructions}</p>
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