import React from 'react';
import { Button, Card } from 'react-bootstrap';


const Service = ({ service }) => {
    const { img, name, price, description } = service

    return (
        <div className='g-5 col-12 col-md-6 col-lg-4 mt-5 mb-5'>
            <Card style={{ width: '18rem' }}>
                < Card.Img variant="top" className='w-100' src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        Price:{price}
                    </Card.Text>
                    <Button variant="primary">Check out</Button>
                </Card.Body>
            </Card >
        </div >
    );
};

export default Service;