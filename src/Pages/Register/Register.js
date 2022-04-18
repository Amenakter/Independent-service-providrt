import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialBtn from '../SocialBtn/SocialBtn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Shared/Loading/Loading';


const Register = () => {
    const [acceptTurms, setAcceptTurms] = useState(false)
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    const navigate = useNavigate()
    let userError;
    if (loading || updating) {
        return <Loading></Loading>
    }
    if (error || UpdateError) {
        userError = <p>{error?.message}</p>
    }


    if (user) {
        console.log(user);
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
            await updateProfile({ displayName: name })
            navigate("/home")
        }
        else {
            toast('Password not match')
        }

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
                <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                    <Form.Check type="checkbox" onChange={() => setAcceptTurms(!acceptTurms)} label='Accept the turms and Conditions' />
                </Form.Group>
                <Button disabled={!acceptTurms} variant="primary" type="submit" className='w-50 d-block mx-auto'>
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