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


                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <div >
                    <img className='w-100' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default DentistryDetails;