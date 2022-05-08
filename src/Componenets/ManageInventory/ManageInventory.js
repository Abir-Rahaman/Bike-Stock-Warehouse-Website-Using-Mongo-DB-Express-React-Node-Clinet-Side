import React, { useEffect, useState } from 'react';
import './ManageInventory.css'
import InventoryDetails from './InventoryDetails/InventoryDetails';
import './ManageInventory.css'
import { Link } from 'react-router-dom';

const ManageInventory = () => {
    const[bikes , setBikes] = useState([]);
    const [rests , setRests] = useState({});
    useEffect(()=>{
        fetch("https://tranquil-forest-45892.herokuapp.com/manageInventory")
        .then(res => res.json())
        .then(data => setBikes(data));
    },[rests])
    const handleUserDelete = id =>{
        // console.log("delete" , id);
        const procced = window.confirm("Are You Sure")
        if(procced){
            const url =`https://tranquil-forest-45892.herokuapp.com/manageInventory/${id}`
            fetch(url,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                  const remain = rests.filter(rest => rest._id !== id)
                //   window.location.reload(false);
                  setRests(remain);
                }
            })
        }
    }

    
    return (
        <div>
              <p className='text-center fw-bolder mt-4'><small>  Delete Any Item please Refresh The Page</small></p>
  
           <h2 className='banner-title text-center fw-bolder mt-5 pt-5'>  <span className='banner'> Visit Our All Stocks Products : {bikes.length}  
         
           <Link to="/addItem"><button className="btn btn-outline-success fw-bolder ms-5 rounded-pill px-5 py-2 m-auto" type="submit">Add Item</button></Link>
            </span> </h2>
        <div className="bike-section mt-5 ps-5 ms-5">
           {
               
                bikes.map(bike => <InventoryDetails key={bike._id} handleUserDelete={handleUserDelete} bike={bike}></InventoryDetails>   )
            }
        </div>
        </div>
    );
    
};

export default ManageInventory;