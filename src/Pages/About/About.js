import React from 'react';
import './About.css'
import img from '../../images/icons/Amena akter.jpg'
const About = () => {
    return (
        <div className='container mt-5'>

            <h2 className='text-secondary text-center mb-2 '>I'm Amena Akter</h2>

            <div className=' aboutcontainer shadow'>
                <img className='imgs' src={img} alt="" />
                <div className='w-50'>
                    <p className='fw-bold fs-5'>Hi,I'm Amena Akter.My aim to be a successeful web developer.
                        By the grace of God and With the help of programming hero team I have come close to my goal.
                        There is still a long way to achive my goal. I work hard and never stop my hard work to achive my goal.
                        I like this profession and in future I want see myself as a successeful professional web developer.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;