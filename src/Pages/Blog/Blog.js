import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container mt-5 '>
            <div className='blog-container'>
                <div className='blog shadow'>
                    <h3 className='text-danger'> 1.Different between authorization and authentication.</h3>
                    <p><strong>Authentication : </strong>
                        In authentication process, the identity of users are checked for providing the access to the system.
                        In authentication process, users or persons are verified.It is done before the authorization process.
                        It needs usually user’s login details.Authentication determines whether the person is user or not.
                    </p>

                    <p><strong>Authorization : </strong>
                        While in authorization process, person’s or user’s authorities are checked for accessing the resources.
                        While in this process, users or persons are validated.While this process is done after the authentication process.
                        While it needs user’s privilege or security levels.While it determines What permission do user have?
                    </p>

                </div>
            </div>
            <div className='blog-container'>
                <div className='blog shadow'>
                    <h3 className='text-danger'>2.Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs,
                        and ready-made UI libraries to authenticate users to your app.
                        It supports authentication using passwords, phone numbers,
                        popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                    <p>5 Common Authentication Methods:</p>
                    <ul>
                        <li>Boimetrics</li>
                        <li>Token Authentication</li>
                        <li>Transaction Authentication</li>
                        <li>Multi-Factor Authentication (MFA)</li>
                        <li>Out-of-Band Authentication (OOB)</li>
                    </ul>
                </div>

            </div>
            <div className='blog-container'>
                <div className='blog shadow'>
                    <h3 className='text-danger'>3. What other services does firebase provide other than authentication?</h3>
                    <p>
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.
                        It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                        Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;