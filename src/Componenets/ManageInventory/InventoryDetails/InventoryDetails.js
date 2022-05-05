import React from 'react';

const InventoryDetails = ({bike}) => {
    const {_id,name,img,descrioption,SupplierName,quantity,price} = bike;

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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetails;