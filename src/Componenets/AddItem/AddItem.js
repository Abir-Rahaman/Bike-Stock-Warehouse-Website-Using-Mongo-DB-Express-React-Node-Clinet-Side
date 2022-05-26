import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const AddItem = () => {

    const [user] = useAuthState(auth)
    const handleInsert = event =>{
        event.preventDefault();
        const img = event.target.img.value;
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplierName= event.target.supplierName.value;
        const description = event.target.description.value;

        const products = {img,name,price,quantity,supplierName,description};
        // console.log(products);
        

        fetch("https://tranquil-forest-45892.herokuapp.com/manageInventory",{
            method:"POST",
            headers:{
                "content-type" : "application/json"
            },
            body:JSON.stringify(products)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            event.target.reset();
        })
        const product = {
             displayName : user.displayName,
             email : user.email
          }

        axios.post('https://tranquil-forest-45892.herokuapp.com/order',product)
        .then(response =>{
            console.log(response);
            event.target.reset();
        })


    }
    return (
       <div className="mt-5">
            <h2 className='banner-title text-center fw-bolder mb-3'>  <span className='banner'> Add New Product</span> </h2>
        <form className='w-50 mx-auto' onSubmit={handleInsert}>
        <input className='pb-2' type="text" value={user.displayName} readOnly disabled name="displayName" class="form-control" aria-describedby="emailHelp" /> 
        <input className='pb-2' type="email" value={user.email} readOnly disabled name="email" class="form-control"  aria-describedby="emailHelp" /> 
        <input className='pb-2' type="text" name="img" class="form-control" placeholder='Add img url'  aria-describedby="emailHelp" /> 
        <input className='pb-2' type="text" name="name" class="form-control" placeholder='Add Name'  aria-describedby="emailHelp" /> 
        <input className='pb-2' type="text" name="price" class="form-control" placeholder='Add price'  aria-describedby="emailHelp" /> 
        <input className='pb-2' type="text" name="quantity" class="form-control" placeholder='Add Quantity'  aria-describedby="emailHelp" /> 
        <input className='pb-2' type="text" name="supplierName" class="form-control" placeholder='Add supplierName   '  aria-describedby="emailHelp" /> 
        <textarea className='' type="text" name="description" class="form-control" placeholder='Add description'  aria-describedby="emailHelp" /> 

        <button className="btn btn-outline-dark fw-bolder fs-5 px-5 py-3 mt-5" type="submit"> Add Product</button>
      
    </form>   
    </div>       
    )
    
};

export default AddItem;