import React, { Component } from 'react';
import './ModalEdit.css'

class Modal extends Component {

    constructor(props){
        super(props)

        this.state = {
            title: '',
            image_url: '',
            ingredients: '',
            instructions: '',
        }

        this.handleEdit = this.handleEdit.bind(this);
        this.handleShowVal = this.handleShowVal.bind(this);
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
        let {editRec, closeModal, id} = this.props;
        let {title, image_url, ingredients, instructions} = this.state;
        editRec(id, {
            title: title,
            image_url: image_url,
            ingredients: ingredients,
            instructions: instructions
        })
        closeModal();
    }

    handleShowVal(){
        let {title, image_url, ingredients, instructions} = this.props.data
        this.setState({
            title: title,
            image_url: image_url,
            ingredients: ingredients,
            instructions: instructions
        })
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
                    <button className="add-button" onClick={() => this.handleEdit()}>Save</button>
                    <button className="refresh-button" onClick={() => this.handleShowVal()}>Refresh</button>
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