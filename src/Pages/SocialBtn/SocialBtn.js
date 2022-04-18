import React from 'react';
import google from '../../images/icons/google.png'
import github from '../../images/icons/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
const SocialBtn = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    let userError;


    if (error || githubError) {
        userError = <p className='text-danger'>{error?.message}{githubError?.message}</p>
    }
    if (loading || githubLoading) {
        return <Loading></Loading>
    }
    if (user || githubUser) {
        navigate("/home")
    }
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center mt-5'>
                <div style={{ height: '1px' }} className='w-50 bg-secondary '></div>
                <p className='px-2 m-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-secondary '></div>
            </div>
            {userError}
            <div>
                <button onClick={() => signInWithGoogle()}
                    className='btn btn-primary d-block mx-auto mb-2'>
                    <img src={google} alt="" />
                    <span className='px-2'>Login with google</span>
                </button>
                <button onClick={() => signInWithGithub()}
                    className='btn btn-primary d-block mx-auto mb-2'>
                    <img src={github} alt="" />
                    <span className='px-2'>Login with github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialBtn;