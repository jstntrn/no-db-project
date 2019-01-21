import React, { Component } from 'react';
import axios from 'axios'
import './ModalEdit.css'

class Modal extends Component {

    constructor(props){
        super(props)

        this.state = {
            title: '',
            image_url: '',
            ingredients: '',
            instructions: ''
        }

        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        axios.get(`/api/recipe/${this.props.id}`)
        .then( (res) => {
          this.setState({
              title: res.data[0].title,
              image_url: res.data[0].image_url,
              ingredients: res.data[0].ingredients,
              instructions: res.data[0].instructions
            })
        })
    }

    handleTitle(val){
        this.setState({
            title: val
        })
        console.log(this.state)
    }

    handleURL(val){
        this.setState({
            image_url: val
        })
        console.log(val, this.state)
    }
    
    handleIng(val){
        this.setState({
            ingredients: val
        })
        console.log(val, this.state)
    }
    
    handleInst(val){
        this.setState({
            instructions: val
        })
        console.log(val, this.state)
    }

    handleEdit(){
        let {editRec, closeModal, id} = this.props;
        let {title, image_url, ingredients, instructions} = this.state;
        console.log(id, this.state)
        editRec(id, {
            title: title,
            image_url: image_url,
            ingredients: ingredients,
            instructions: instructions
        })
        closeModal();
    }
    handleCancel(){
        //let {titleOld, image_urlOld, ingredientsOld, instructionsOld} = this.state
        let {closeModal} = this.props;
        // this.setState({
        //     title: title,
        //     image_url: image_url,
        //     ingredients: ingredients,
        //     instructions: instructions
        // })
        // console.log(this.state)
        closeModal();
    }
    
    render(){

        let {title, image_url, ingredients, instructions} = this.state;
        
        let modal = (
            <div className="dialogStyles">
                <button className="dialogCloseButtonStyles" onClick={this.props.closeModal}>+</button>
                <div className="add-modal">
                    <h3>TITLE</h3>
                    <input className="modal-input" value={title} onChange = { (e) => {this.handleTitle(e.target.value)}} />
                    <h3>IMAGE URL</h3>
                    <input className="modal-input" value={image_url} onChange = { (e) => {this.handleURL(e.target.value)}} />
                    <h3>INGREDIENTS</h3>
                    <textarea value={ingredients} onChange = { (e) => {this.handleIng(e.target.value)}} />
                    <h3>COOKING INSTRUCTIONS</h3>
                    <textarea className="cooking" value={instructions} onChange = { (e) => {this.handleInst(e.target.value)}} />
                    <button className="add-button" onClick={() => this.handleEdit()}>Edit</button>
                </div>
            </div>

        );
        
        if (!this.props.showEdit) {
            modal = null;
        };

        return(
            <div>
                {modal}
            </div>
        );
    }
}

export default Modal;