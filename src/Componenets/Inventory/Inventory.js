import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {
    const {id} = useParams();
    console.log(id);
    const [bikes , setBikes] = useState({});
    const [isReload,setReload] = useState(false)
    // const {_id,name , img , descrioption,SupplierName, quantity , price} = bike;
    useEffect(()=>{
        const url=`http://localhost:5000/manageInventory/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setBikes(data));
    },[isReload]) 

    const handleSubmit = e =>{
        e.preventDefault();
        const quantity = e.target.quantity.value;
        const newQuantity = parseInt(quantity)+parseInt(bikes?.quantity)
        console.log(newQuantity);
        const updateQuantity= {newQuantity};
        if(!quantity){
            alert("added")
        }
        else{
            const url=`http://localhost:5000/products/${id}`
            fetch(url,{
                method:"PUT",
                headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(updateQuantity),

            })
            .then(response => response.json())
            .then(data => {
                setReload(!isReload);
            console.log('Success:', data);
            })
        }

    }
    const deliverHandle = e =>{
        const quantity = bikes?.quantity;
        const updateDeliver= {quantity};
            const url=`http://localhost:5000/delivery/${id}`
            fetch(url,{
                method:"PUT",
                headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(updateDeliver),

            })
            .then(response => response.json())
            .then(data => {
            setReload(!isReload)
            console.log('Success:', data);
            })
        

    }

    



    return (
        <>
            <div className="d-flex justify-content-center">
             <Link to='/manageInventory'> <button className="btn btn-outline-dark mt-4 fw-bolder fs-6 px-5 py-2 m-auto" type="submit"> Manage Inventory</button>  </Link>
        </div>
        <div className="row container pt-5 mt-5 mb-5 pb-5 mx-auto">
            <div className="col-md-6">
                <img className='w-100 rounded-pill' src={bikes.img} alt="" />
            </div>
            <div className="col-md-4 mt-5 pt-5 ms-5">
            <h2 className="card-title  fw-bolder"> <span className='banner'> {bikes.name} </span></h2>
                         <h5 className='fw-bolder '> Product ID:{bikes._id} </h5>
                        <h5 className='fw-bolder '> Price ${bikes.price} </h5>
                        <h5 className='fw-bolder '> Quantity :{bikes.quantity} </h5>
                        <h5 className='fw-bolder '> Supplier Name :{bikes.SupplierName} </h5>
                        <h5 className="card-text fw-bolder "><span className='banner fs-3'> Information:</span>  <br />{bikes.descrioption} </h5>
                        <div className=" d-flex">
                        <button onClick={()=>deliverHandle(bikes._id)} className="btn btn-outline-dark mt-4 fw-bolder fs-6 px-5 py-2 m-auto" type="submit"> Delivered </button> 
                      
                        <div class="mb-3 ms-5 ps-5 mt-4">
                        
                           <form onSubmit={handleSubmit}>
                           <input type="text" name='quantity' class="form-control" placeholder='Add Quantity' id="exampleInputEmail1" aria-describedby="emailHelp" />
                           <input type="submit" value="submit" />
                           </form>  
                        
                        <button className="btn btn-outline-dark mt-4 fw-bolder px-3 py-1 m-auto" type="submit"> Restock  </button> 
                        </div>
                        </div>

            </div>
        </div>
        </>
    );
};

export default Inventory;