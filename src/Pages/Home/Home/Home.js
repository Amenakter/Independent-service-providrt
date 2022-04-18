import React from 'react';
import Banner from '../Banner/Banner';
import DentistDetail from '../DentistDetail/DentistDetail';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Services></Services>
            <DentistDetail></DentistDetail>
        </div>
    );
};

export default Home;