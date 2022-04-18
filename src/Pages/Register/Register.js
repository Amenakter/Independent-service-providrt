import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialBtn from '../SocialBtn/SocialBtn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate()
    let userError;
    if (loading) {
        return <p>loading...</p>
    }
    if (error) {
        userError = <p>{error?.message}</p>
    }



    const goToLogin = () => {
        navigate('/login')
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.username.value;
        const email = event.target.useremail.value;
        const password = event.target.password.value;
        const confirmPass = event.target.ConPassword.value;
        if (password === confirmPass) {
            await createUserWithEmailAndPassword(email, password)
        }
        else {
            toast('Password not match')
        }
        navigate("/home")
        console.log(user);
    }
    return (
        <div className='container mx-auto w-50 mt-5 '>
            <Form onSubmit={handleSubmit}>
                <h2>Please Register!!</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name:</Form.Label>
                    <Form.Control type="text" name='username' placeholder="Enter your name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='useremail' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control type="password" name='ConPassword' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" className='w-50 d-block mx-auto'>
                    Register
                </Button>
                {userError}
                <p className='mt-2'>Already Have an account?<Link to='/login' className='text-danger' onClick={goToLogin} >Please login</Link></p>
            </Form>
            <SocialBtn></SocialBtn>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;