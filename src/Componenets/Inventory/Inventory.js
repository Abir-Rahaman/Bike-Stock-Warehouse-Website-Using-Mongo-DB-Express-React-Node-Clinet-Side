import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Inventory.css'

const Inventory = () => {
    const {id} = useParams();
    console.log(id);
    const [bikes , setBikes] = useState({});
    // const {_id,name , img , descrioption,SupplierName, quantity , price} = bike;
    useEffect(()=>{
        const url=`http://localhost:5000/bikes/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setBikes(data));
    },[id]) 

    



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
                        <button className="btn btn-outline-dark mt-4 fw-bolder fs-6 px-5 py-2 m-auto" type="submit"> Delivered </button> 
                      
                        <div class="mb-3 ms-5 ps-5 mt-4">
                        
                            <input type="email" class="form-control" placeholder='Add Quantity' id="exampleInputEmail1" aria-describedby="emailHelp" />  
                        
                        <button className="btn btn-outline-dark mt-4 fw-bolder px-3 py-1 m-auto" type="submit"> Restock  </button> 
                        </div>
                        </div>

            </div>
        </div>
        </>
    );
};

export default Inventory;