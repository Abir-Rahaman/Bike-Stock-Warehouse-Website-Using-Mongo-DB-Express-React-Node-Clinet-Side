import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DeliveredItem = () => {
    const {id} = useParams()
    const [ items , setItem] =useState({})
    
    useEffect(()=>{
        fetch(`http://localhost:5000/manageInventory/${id}`,{
            method:"PUT",

        })
    },[])
    return (
        <div>
            <h1>fffffjgzdfikh</h1>
            
        </div>
    );
};

export default DeliveredItem;