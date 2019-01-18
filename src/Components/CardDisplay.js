import React, { Component } from  'react';

export default class CardDisplay extends Component {
    constructor(props) {
        super(props)
    }
}



{
    recipes.map (recipe => (
        <Card 
        key={recipe.id}
        image_url={recipe.image_url}
        title={recipe.title}/>
    ))
}