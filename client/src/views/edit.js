import React, {useState, useEffect} from 'react';
import Form from '../components/form';
import DeleteButton from '../components/delete';
import axios from 'axios';
import { navigate } from '@reach/router';


const EditView = props => {
    const { id } = props;
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        axios.get("http://192.168.1.82:8000/api/products/" + id)
        .then(response=>{
            setProduct(response.data);
            setLoaded(true);
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])
    const onSubmitHandler = (e, data) =>{
        e.preventDefault();
        axios.put("http://192.168.1.82:8000/api/products/" + id, data)
        .then(response =>{
            navigate('/');
        })
        .catch(err =>{
            console.log(err);
        })
    }

    return(
        <div>
            <h1>Editing Product: {product.title} </h1>
            {loaded && 
                <Form 
                onSubmitHandler={onSubmitHandler}
                initialTitle={product.title}
                initialPrice={product.price}
                initialDescription={product.description}    
                />
            }
            <DeleteButton id={product._id}/>
        </div>
    )
}

export default EditView;