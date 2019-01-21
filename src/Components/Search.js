import React, { Component } from 'react';
import './Search.css'

export default class Search extends Component{

    constructor(props){
        super(props);

        this.filterRec = this.filterRec.bind(this);
    }

    filterRec(val){
        const {filterRec} = this.props;
        filterRec(val);
    }

    render(){
        return(
            <div className="search-content">
                <input className="search-input"
                    placeholder="Search Recipes"
                    onChange={ (e) => this.filterRec(e.target.value) }
/>
            </div>
        )
    }
}