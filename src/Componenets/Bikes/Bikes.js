import BikeDetails from '../BikeDetails/BikeDetails';
import './Bikes.css'
import useBikes from './../hooks/useBikes';

const Bikes = () => {
    const {bikes} = useBikes()
    return (
        <div>
        <h1 className='text-center  fw-bolder mt-5 pt-5' > <span className='banner'>Some Products From Our Warehouse  </span> </h1>
        <div className="bike-section mt-5 ps-5 ms-5   ">
     
          {
               bikes.map( bike => <BikeDetails key={bike._id} bike={bike} > </BikeDetails>  )
         }      

        </div>
    </div>
    );
};

export default Bikes;