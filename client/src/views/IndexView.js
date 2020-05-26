import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import DeleteButton from '../components/delete';
import axios from 'axios';


const IndexView = props => {
    const[products, setProduct]=useState([]);
    useEffect(()=>{
        axios.get('http://192.168.1.82:8000/api/products')
        .then((response)=>{
            setProduct(response.data)
        })
        .catch(err=>{
            console.log(err);
        })
    }, [])
    return(
        <div>
            <h1>Products</h1>
            <Link to={"/create"}>Add a new product </Link>
            <ul>    
                {products.map((product, index)=>{
                    return(
                        <li key={index}> <Link to={"/"+product._id}>{product.title}</Link> | <Link to={"/" + product._id + "/edit"}>Edit</Link> | <DeleteButton id={product._id}/> </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default IndexView;