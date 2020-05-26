import React, {useState} from 'react';

const Form = props => {
    const {onSubmitHandler,  initialPrice, initialDescription } = props;
    const{initialTitle}=props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    return(
        <form onSubmit={(e)=> {onSubmitHandler(e, {title,price,description}) }}>
            <p>
                <label>title</label>
                <input type="text" name="title" value={title} onChange={e=>{setTitle(e.target.value)}}/>
            </p>
            <p>
                <label>Price</label>
                <input type="text" name="price" value={price} onChange={e=>{setPrice(e.target.value)}}/>
            </p>
            <p>
                <label>Description</label>
                <input type="text" name="Description" value={description}  onChange={e=>{setDescription(e.target.value)}}/>
            </p>
            <input type="submit" />
        </form>
    )
}

export default Form;