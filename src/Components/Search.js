import React, { Component } from 'react';
import './Search.css'

export default class Search extends Component{
    constructor(props){
        super(props);

        this.state = {
            text: ''
        }
    }

    filterRec(val){
        const {filterRec} = this.props;
        this.setState({
            text: val
        })
        filterRec(val);
    }

    render(){
        return(
            <div className="search-content">
                <input className="search-input"
                    placeholder="Search Recipes"
                    onChange={ (e) => this.filterRec(e.target.value) }
                    value={this.state.text}/>
            </div>
        )
    }
}