import React from 'react';
import './BikeDetails.css'
import { Link, useNavigate } from 'react-router-dom';
const BikeDetails = ({bike}) => {
    const navigate =useNavigate();
    const {_id,name , img , descrioption,SupplierName, quantity , price} = bike;

    
    const navigateToUpdate = id =>{
        navigate(`/inventory/${id}`)
    }
    return (
        <div>
            <div className="bike-card w-75">
                <div className=" mx-auto  card w-75 border-0">
                <img src={img} className=" w-100 pt-5 rounded-3 card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-center fw-bolder"> <span className='banner'> {name} </span></h5>
                        <p className='fw-bolder text-center '> Price ${price} </p>
                        <p className='fw-bolder text-center '> Quantity :{quantity} </p>
                        <p className='fw-bolder text-center '> Supplier Name :{SupplierName} </p>
                        <p className="card-text fw-bolder text-center "><span className='banner '> Information:</span>  <br />{descrioption} </p>
                        <button onClick={()=>navigateToUpdate(_id)} className="btn btn-outline-dark ms-3 mt-4 fw-bolder fs-6 px-5 py-2 rounded-pill m-auto" type="submit"> Update </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BikeDetails;
