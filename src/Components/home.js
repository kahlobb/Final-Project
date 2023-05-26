import React from 'react';
import HomeCarousel from './home-carousel';
import HomeTable from './home-table';

const Home = () => {
    return (
        <div>
            <h1 style={{display: 'flex', justifyContent:'center'}}>Our Services</h1>
            <div>
            <HomeCarousel />
            </div>
            <br></br>
            <h3 style={{display: 'flex', justifyContent:'center'}}>Find A Printing Method Best Suited For You</h3>
            <HomeTable />
        </div>
    );
};

export default Home;