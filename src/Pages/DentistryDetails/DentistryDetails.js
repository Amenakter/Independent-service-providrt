import React from 'react';
import { Button, Form } from 'react-bootstrap';
import img from '../../images/Banner/images.jpg'


const DentistryDetails = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div>

            <div className='container mt-5 w-75 d-flex align-items-center justify-content-between'>

                <Form className='w-50' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mobile Number:</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <div className='w-50 ms-5'>
                    <img className='px-5 w-75' src={img} alt="" />
                    <p className='text-center fw-bold'>
                        A man without money is like a wolf without teeth. ~ French Proverb
                    </p>
                    <p className='text-center fw-bold'>
                        If you had teeth of steel, you could eat iron coconuts.~ Senegalese Proverb
                    </p>

                </div>
            </div>
        </div>
    );
};

export default DentistryDetails;