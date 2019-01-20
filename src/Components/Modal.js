import React, { Component } from 'react';
import './Modal.css'

class Modal extends Component {
    
    render(){
        let modal = (
            <div className="dialogStyles">
                <button className="dialogCloseButtonStyles" onClick={this.props.closeModal}>+</button>
                <div>{this.props.children}</div>
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