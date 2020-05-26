import React, {useState} from 'react';
import Form from '../components/form'
import axios from 'axios';
import { navigate } from '@reach/router';

const CreateView = props => {
    const [errors, setErrors] = useState([]);
    const onSubmitHandler = (e, data)=>{
        e.preventDefault();
        axios.post("http://192.168.1.82:8000/api/products", data)
        .then(response=>{
            navigate('/');
            console.log(response.data)
        })
        .catch(err =>{
            console.log(err);
            const errorResponse= err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }
    return(
        <div>
            <h1>Create new Product</h1>
            {errors.map((error, index)=>{
                return(
                    <p key={index}>{error}
                    </p>
                )
            })}
            <Form
                onSubmitHandler={onSubmitHandler}
                initialTitle=""
                initialPrice=""
                initialDescription=""
            />
        </div>
    )
}

export default CreateView;