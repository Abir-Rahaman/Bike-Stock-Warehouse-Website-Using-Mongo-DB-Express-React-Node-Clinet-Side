import React, { useEffect, useState } from 'react';
import './ManageInventory.css'
import InventoryDetails from './InventoryDetails/InventoryDetails';
import './ManageInventory.css'

const ManageInventory = () => {
    const[bikes , setBikes] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/manageInventory")
        .then(res => res.json())
        .then(data => setBikes(data));

    },[])
    return (
        <div>
  
           <h2 className='banner-title text-center fw-bolder'>  <span className='banner'> Visit Our All Stocks Products : {bikes.length} </span>  </h2>
        <div className="bike-section mt-5 ps-5 ms-5">
           {
               
                bikes.map(bike => <InventoryDetails key={bike._id} bike={bike}> </InventoryDetails>   )
            }
        </div>
        </div>
    );
    
};

export default ManageInventory;