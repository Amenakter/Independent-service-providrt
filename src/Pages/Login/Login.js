import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialBtn from '../SocialBtn/SocialBtn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef()
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    let userError;

    if (error) {
        userError = <p className='text-danger'>{error?.message} </p>
    }
    if (loading) {
        return <p>loading...</p>
    }

    if (user) {
        navigate(from, { replace: true })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
        console.log(user)

    }
    const goRegister = () => {
        navigate('/register')
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast(' reset Password email sent')
        }
        else {
            toast('Email Address is Missing')
        }
    }
    return (
        <div className='container mx-auto w-50 mt-5 '>
            <Form onSubmit={handleSubmit}>
                <h2>Please Login!!</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef} name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" className='w-50 d-block mx-auto'>
                    Log In
                </Button>
                {userError}
            </Form>
            <ToastContainer />
            <p>Haven't account?<Link to='/register' className='text-danger' onClick={goRegister}>Please Register</Link></p>
            <p>Forgot password?<Link to='/login' className='text-danger' onClick={resetPassword}>Reset password</Link></p>
            <SocialBtn></SocialBtn>
        </div>
    );
};

export default Login;