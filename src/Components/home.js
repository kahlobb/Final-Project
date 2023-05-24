import React from 'react';
import { Carousel, Table, Image } from 'react-bootstrap';
import Aisle4_2 from '../images/Aisle4_2.jpg';
import BPKG_1 from '../images/BPKG_1.jpg';
import BPKG_2 from '../images/BPKG_2.jpg';
import DCF_1 from '../images/DCF_1.jpg';

const Home = () => {
    return (
        <div>
            <h1 style={{display: 'flex', justifyContent:'center'}}>Our Services</h1>
            <div>
            <Carousel>
                <Carousel.Item>
                   <Image
                    className="d-block w-100"
                    src={Aisle4_2}
                    alt="First slide"
                    style={{ height: '300px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={BPKG_1}
                        alt="Second slide"
                        style={{ height: '300px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={DCF_1}
                        alt="Third slide"
                        style={{ height: '300px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={BPKG_2}
                        alt="Fourth slide"
                        style={{ height: '300px', objectFit: 'cover' }}
                    />
                </Carousel.Item>
            </Carousel>
            </div>
            <br></br>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Services</th>
                            <th>Price Range</th>
                            <th>Minimum Order</th>
                            <th>Best Suited For</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Screen Printing</td>
                            <td>$8-12 per garment</td>
                            <td>50 pieces</td>
                            <td>School events, camps, concerts, or other high attendance events</td>
                        </tr>
                        <tr>
                            <td>Direct-to-Film</td>
                            <td>$12-15 per garment + one-time digitizing fee per graphic</td>
                            <td>20 pieces</td>
                            <td>Small businesses or other promotional events</td>
                        </tr>
                        <tr>
                            <td>Direct-to-Garment</td>
                            <td>$15-20 per garment + one-time digitizing fee per graphic</td>
                            <td>No minimum</td>
                            <td>Bachelorette parties, family reunions, or individual items that require customization</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Home;