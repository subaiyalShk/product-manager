import React, {useState, useEffect} from 'react';
import DeleteButton from '../components/delete'
import axios from 'axios';


const DetailView = props => {
    const {id} =props;
    const [product, setProduct]=useState({});
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
        .then(response=>{
            setProduct(response.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }, [])
    return(
        <div>
            <h1>{product.title} </h1>
            <h3>{product.price}</h3>
            <h3>{product.description}</h3>
            <DeleteButton id={product._id}/>
        </div>
    )
}

export default DetailView;