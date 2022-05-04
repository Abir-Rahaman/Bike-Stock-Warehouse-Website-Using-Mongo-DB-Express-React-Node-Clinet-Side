import React from 'react';
import { Accordion } from 'react-bootstrap';
import superBike from '../../../asset/superbike.jpg'
import './Events.css'

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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className='mb-4 border border-3 border-danger' eventKey="1">
    <Accordion.Header> <h5 className='fw-bolder text-center'>Kawasaki Ninja H2</h5></Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item  className='mb-4 border border-3 border-danger'eventKey="3">
    <Accordion.Header> <h5 className='fw-bolder text-center'>Kawasaki Ninja H2</h5></Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className='mb-4 border border-3 border-danger' eventKey="4">
    <Accordion.Header> <h5 className='fw-bolder text-center'>Kawasaki Ninja H2</h5></Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </div>
</div>

        </div>
    );
};

export default Events;
