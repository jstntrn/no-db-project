import React, { Component } from 'react';
import './Card.css';
import edit from './../images/icons/edit.png';
import trash from './../images/icons/garbage.png';
//put edit and delete icons for two buttons
//on image click show large display with ingredients and instructions

export default class Card extends Component {

    render(){
        const {id, image_url, title, deleteRec, showMod} = this.props;
        
        return(
            <div className="Card">
                <div className="image-container" >
                    <img className="Card-image" src={image_url} alt='food' />
                    <div className="overlay" onClick={() => showMod(2)}>
                        <div className="card-name">{title}</div>
                    </div>
                </div>
                <div className="Card-button-display">
                    <img className="card-button" src={edit} alt='edit'/>
                    <img className="card-button" src={trash} alt='delete' onClick={ () => deleteRec(id) }/>
                </div>
            </div>
        );
    }
}


