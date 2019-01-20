import React, { Component } from 'react';
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

    handleTitle(val){
        this.setState({
            title: val
        })
    }

    handleURL(val){
        this.setState({
            image_url: val
        })
    }
    
    handleIng(val){
        this.setState({
            ingredients: val
        })
    }
    
    handleInst(val){
        this.setState({
            instructions: val
        })
    }

    handleEdit(){
        let {editRec, closeModal} = this.props;
        let {title, image_url, ingredients, instructions} = this.state;
        console.log(this.props)
        console.log(this.state)
        editRec({
            title: title,
            image_url: image_url,
            ingredients: ingredients,
            instructions: instructions
        })
        closeModal()
    }
    
    render(){
        const {title, image_url, ingredients, instructions} = this.props.data;
        let modal = (
            <div className="dialogStyles">
                <button className="dialogCloseButtonStyles" onClick={this.props.closeModal}>+</button>
                <div className="add-modal">
                    <h3>TITLE</h3>
                    <input className="modal-input" placeholder={title} onChange = { (e) => {this.handleTitle(e.target.value)}} />
                    <h3>IMAGE URL</h3>
                    <input className="modal-input" placeholder={image_url} onChange = { (e) => {this.handleURL(e.target.value)}} />
                    <h3>INGREDIENTS</h3>
                    <textarea placeholder={ingredients} onChange = { (e) => {this.handleIng(e.target.value)}} />
                    <h3>COOKING INSTRUCTIONS</h3>
                    <textarea className="cooking" placeholder={instructions} onChange = { (e) => {this.handleInst(e.target.value)}} />
                    <button className="add-button" onClick={() => this.handleEdit()}>Add</button>
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

export default Modal;