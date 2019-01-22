import React from 'react';
import './Card.css';
import edit from './../images/icons/edit.png';
import trash from './../images/icons/garbage.png';
//put edit and delete icons for two buttons
//on image click show large display with ingredients and instructions

export default function Card(props) {

    let {id, image_url, title, deleteRec, showMod, showEdit} = props;
    
    return(
        <div className="Card">
            <div className="image-container" >
                <img className="Card-image" src={image_url} alt='food' />
                <div className="overlay" onClick={() => showMod(id)}>
                    <div className="card-name">{title}</div>
                </div>
            </div>
            <div className="Card-button-display">
                <img className="card-button" src={edit} alt='edit' onClick={ () => showEdit(id)}/>
                <img className="card-button" src={trash} alt='delete' onClick={ () => deleteRec(id) }/>
            </div>
        </div>
    );
}
 



