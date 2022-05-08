import React from 'react';
import './MyItems.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const MyItems = () => {
    const [orders , setOrders] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() =>{
        const getProducts = async() =>{
            const email = user.email;
            const url = `https://tranquil-forest-45892.herokuapp.com/order?email=${email}`
            const {data} = await axios.get(url);
            setOrders(data)
        }
        getProducts()
        
    },[user])
    return (
        <div>
            <h2 className='banner-title text-center fw-bolder'>  <span className='banner'> Your items : {orders.length} </span>  </h2>
        </div>
    );
};

export default MyItems;