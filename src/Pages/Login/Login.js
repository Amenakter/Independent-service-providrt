import React from 'react';
import { Button, Form } from 'react-bootstrap';
import SocialBtn from '../SocialBtn/SocialBtn';

const Login = () => {
    return (
        <div className='container mx-auto w-50 mt-5 '>
            <Form>
                <h2>Please Login!!</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
            <SocialBtn></SocialBtn>
        </div>
    );
};

export default Login;