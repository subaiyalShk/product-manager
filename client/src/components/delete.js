import React from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';

const DeleteButton = props => {
    const {id} = props;
    const onClickHandler = e => {
        Axios.delete("http://192.168.1.82:8000/api/products/" + id)
        .then(response => {
            console.log(response)
            navigate("/");
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    return (
        <button onClick={onClickHandler}>Delete</button>
    )
}

export default DeleteButton;