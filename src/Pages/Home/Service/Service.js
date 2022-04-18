import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Service = ({ service }) => {
    const { id, img, name, price, description } = service;
    const navigate = useNavigate();

    const navigateToDetails = (id) => {
        navigate(`/service/${id}`)
    }

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
                    <Button onClick={() => navigateToDetails(id)} variant="primary">Check out</Button>
                </Card.Body>
            </Card >
        </div >
    );
};

export default Service;