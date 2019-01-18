import React, { Component } from 'react';

//put edit and delete icons for two buttons
//on image click show large display with ingredients and instructions

export default class Card extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="Card">
                <img />
                <p className="Card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id erat at quam vestibulum convallis a facilisis velit.
                </p>
                <div className="Card-button-display">
                    <button className="Card-button">1</button>
                    <button className="Card-button">2</button>
                </div>
            </div>
        );
    }
}
