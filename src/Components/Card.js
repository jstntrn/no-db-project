import React, { Component } from 'react';
import './Card.css';
//put edit and delete icons for two buttons
//on image click show large display with ingredients and instructions

export default class Card extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {image_url, title} = this.props;

        return(
            <div className="Card">
                <div className="image-container">
                    <img className="Card-image" src={image_url} alt='taco'/>
                    <div className="overlay">
                        <div className="card-name">{title}</div>
                    </div>
                </div>
                <div className="Card-button-display">
                    <button className="Card-button">1</button>
                    <button className="Card-button">2</button>
                </div>
            </div>
        );
    }
}


