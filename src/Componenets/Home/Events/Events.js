import React from 'react';
import { Accordion } from 'react-bootstrap';
import superBike from '../../../asset/superbike.jpg'
import './Events.css'
import event1 from '../../../asset/event1.png'
import event2 from '../../../asset/event2.png'
import event3 from '../../../asset/event3.png'
import event4 from '../../../asset/event4.png'

const Events = () => {
    return (
        <div className='mt-5 pt-5'>
            <h2 className='banner-title text-center fw-bolder'>  <span className='banner'> Super Bike Stock List 2022 </span>  </h2>

<div className="row w-75 mx-auto mt-5">
    <div className="col-md-6">
        <img className='rounded-3 w-100' src={superBike} alt="" />
    </div>
    <div className="col-md-6">
    <Accordion  defaultActiveKey={['0']} alwaysOpen>
  <Accordion.Item className='mb-4 border border-3 border-danger' eventKey="0">
    <Accordion.Header> <h5 className='fw-bolder text-center'>Kawasaki Ninja H2</h5> </Accordion.Header>
    <Accordion.Body>
     <div className="row">
       <div className="col-md-6 mt-3">
         <img className='w-100 ' src={event1} alt="" />
       </div>
       <div className="col-md-6">
         <p>Engine	: 124.8cc (air-cooled) </p>
         <p> Top Speed	: 110 Kmph (approx)</p>
         <p> Top Speed	: 110 Kmph (approx)</p>
         <p> Mileage	: 50 Kmpl (average)</p>
         <p> Engine Cooling Method:	Air Cooled</p>
         <p> Instrument Console:	Analogue</p>
         <p> Shutter Lock:	Yes</p>
         <p> Odometer Availability:	Analogue</p>
       </div>
     </div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className='mb-4 border border-3 border-danger' eventKey="1">
    <Accordion.Header> <h5 className='fw-bolder text-center'>TVS Apache RTR 160 Yezdi </h5></Accordion.Header>
    <Accordion.Body>
    <div className="row">
       <div className="col-md-6 mt-3">
         <img className='w-100 ' src={event2} alt="" />
       </div>
       <div className="col-md-6">
         <p>Engine	: 124.8cc (air-cooled) </p>
         <p> Top Speed	: 110 Kmph (approx)</p>
         <p> Top Speed	: 110 Kmph (approx)</p>
         <p> Mileage	: 50 Kmpl (average)</p>
         <p> Engine Cooling Method:	Air Cooled</p>
         <p> Instrument Console:	Analogue</p>
         <p> Shutter Lock:	Yes</p>
         <p> Odometer Availability:	Analogue</p>
       </div>
     </div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item  className='mb-4 border border-3 border-danger'eventKey="3">
    <Accordion.Header> <h5 className='fw-bolder text-center'> Harley-Davidson Iron 883 Roadster</h5></Accordion.Header>
    <Accordion.Body>
    <div className="row">
       <div className="col-md-6 mt-3">
         <img className='w-100 ' src={event3} alt="" />
       </div>
       <div className="col-md-6">
         <p>Engine	: 124.8cc (air-cooled) </p>
         <p> Top Speed	: 110 Kmph (approx)</p>
         <p> Top Speed	: 110 Kmph (approx)</p>
         <p> Mileage	: 50 Kmpl (average)</p>
         <p> Engine Cooling Method:	Air Cooled</p>
         <p> Instrument Console:	Analogue</p>
         <p> Shutter Lock:	Yes</p>
         <p> Odometer Availability:	Analogue</p>
       </div>
     </div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className='mb-4 border border-3 border-danger' eventKey="4">
    <Accordion.Header> <h5 className='fw-bolder text-center'> Suzuki Gixxer SF 250</h5></Accordion.Header>
    <Accordion.Body>
    <div className="row">
       <div className="col-md-6 mt-3">
         <img className='w-100 ' src={event4} alt="" />
       </div>
       <div className="col-md-6">
         <p>Engine	: 124.8cc (air-cooled) </p>
         <p> Top Speed	: 110 Kmph (approx)</p>
         <p> Top Speed	: 110 Kmph (approx)</p>
         <p> Mileage	: 50 Kmpl (average)</p>
         <p> Engine Cooling Method:	Air Cooled</p>
         <p> Instrument Console:	Analogue</p>
         <p> Shutter Lock:	Yes</p>
         <p> Odometer Availability:	Analogue</p>
       </div>
     </div>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </div>
</div>

        </div>
    );
};

export default Events;
