import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='services' className='container mt-5'>
            <div style={{ height: '1px' }} className='w-50 bg-secondary d-block mx-auto'></div>
            <h2 className='text-center text-primary'>Services</h2>
            <p className='text-center'>This services we provide</p>
            <div style={{ height: '1px' }} className='w-50 bg-secondary d-block mx-auto'></div>
            <div className='serviceContainer' >
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }

            </div>
        </div>
    );
};

export default Services;