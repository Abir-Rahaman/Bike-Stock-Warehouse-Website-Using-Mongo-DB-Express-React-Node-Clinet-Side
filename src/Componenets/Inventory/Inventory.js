import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {
    const {id} = useParams();
    console.log(id);
    const [bikes , setBikes] = useState({});
    
    useEffect(()=>{
        const url=`http://localhost:5000/bikes/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setBikes(data));
    },[id]) 
    return (
        <div>
            <h1> got it:{bikes.name}</h1>
           
        </div>
    );
};

export default Inventory;