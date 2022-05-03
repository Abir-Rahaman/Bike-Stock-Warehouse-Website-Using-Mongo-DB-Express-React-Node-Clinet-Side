import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import offer1 from '../../../asset/offer1.png'
import offer2 from '../../../asset/offer2.png'
import offer3 from '../../../asset/offer3.png'

const Offer = () => {
    return (
        <div className='container mt-5'>
            <h1 className='banner-title text-center fw-bolder'> <span className='banner-text'>  First Time Here ?</span></h1>
          <h1 className='banner-title  text-center m-auto '> Try our special services </h1>

          <CardGroup className='mt-5 w-75 mx-auto'>
            <Card className='border-0'>
            <Card.Body >
                <Card.Img className='w-75' variant="top" src={offer2} />
                
                <Card.Title> <h2 className='ms-3'> Special Offer</h2></Card.Title>
                <Card.Text>
               <h6> Most of the time we search for special offers and discounts to bring in our desired. </h6> 
                <button className="btn btn-outline-dark fw-bolder rounded-pill fs-6 px-5 py-2  m-3 " type="submit"> Choose</button>
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className=' border-0'>
            <Card.Body>
            <Card.Img className='w-75' variant="top" src={offer1} />
                
                <Card.Title><h2 className='ms-3'> 0EMI Exchange</h2></Card.Title>
                <Card.Text>
                <h6>motorcycle home, but we remain confused because of different information and various.</h6>
                <button className="btn btn-outline-dark fw-bolder rounded-pill fs-6 px-5 py-2  m-4 " type="submit"> Choose</button>
                </Card.Text>
                </Card.Body>
                
            </Card >
            <Card className=' border-0'>
            <Card.Body>
                <Card.Img className='w-75' variant="top" src={offer3} />
                
                <Card.Title><h2 className='ms-3'>Biggest Sale</h2></Card.Title>
                <Card.Text>
               <h6> At this page we try to cover up most of the motorcycle market related Discounts and offer news.</h6>
               <button className="btn btn-outline-dark fw-bolder rounded-pill fs-6 px-5 py-2  m-3 " type="submit"> Choose</button>
                </Card.Text>
                
                </Card.Body>
            </Card>
      </CardGroup>
        </div>
    );
};

export default Offer;