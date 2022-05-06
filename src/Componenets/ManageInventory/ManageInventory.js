import React, { useEffect, useState } from 'react';
import './ManageInventory.css'
import InventoryDetails from './InventoryDetails/InventoryDetails';
import './ManageInventory.css'
import { Link } from 'react-router-dom';

const ManageInventory = () => {
    const[bikes , setBikes] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/manageInventory")
        .then(res => res.json())
        .then(data => setBikes(data));
    },[])

    
    return (
        <div>
  
           <h2 className='banner-title text-center fw-bolder mt-5 pt-5'>  <span className='banner'> Visit Our All Stocks Products : {bikes.length}  
           <Link to="/addItem"><button className="btn btn-outline-success fw-bolder ms-5 rounded-pill px-5 py-2 m-auto" type="submit">Add Item</button></Link>
            </span> </h2>
        <div className="bike-section mt-5 ps-5 ms-5">
           {
               
                bikes.map(bike => <InventoryDetails key={bike._id} bike={bike}>h </InventoryDetails>   )
            }
        </div>
        </div>
    );
    
};

export default ManageInventory;