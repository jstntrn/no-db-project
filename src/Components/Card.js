import React, { Component } from 'react';

export default class Card extends Component {
    render(){
        return(
            <div className="Card">
                <div className="image-container">
                    <img className="Card-image" src={"https://images.unsplash.com/photo-1516822854725-44c5e7833c3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"} alt='taco'/>
                    <div className="overlay">
                        <div className="card-name">Tacos</div>
                    </div>
                </div>
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


