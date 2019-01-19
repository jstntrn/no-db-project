import React, { Component } from 'react';

let dialogStyles = {
    width: '500px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    height: '700px',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    backgroundColor: '#eee',
    padding: '10px 20px 40px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
};

let dialogCloseButtonStyles = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    background: 'none',
    border: 'none',
    width: '50px',
    height: '50px',
    transform: 'rotate(45deg)',
    fontWeight: 'bold',
    alignSelf: 'flex-end'    
};

class Modal extends Component {
    

    render(){
        let modal = (
            <div style={dialogStyles}>
                <button style={dialogCloseButtonStyles} onClick={this.props.closeModal}>+</button>
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