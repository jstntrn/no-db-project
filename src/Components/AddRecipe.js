import React, { Component } from 'react';
import plus from './../images/icons/plus.png';
import './CardAdd.css';
//put edit and delete icons for two buttons
//on image click show large display with ingredients and instructions

export default class AddRecipe extends Component {


    render(){
        const {openModal} = this.props;
        return(
            <div className="AddCard" onClick={() => openModal()}>
                <img className="AddIcon" src={plus} alt='add recipe'/>
                <p>Add Recipe</p>
            </div>
        );
    }
}
