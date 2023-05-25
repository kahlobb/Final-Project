import React from 'react';
import { Table } from 'react-bootstrap';

const HomeTable = () => {
    return (
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
    );
};

export default HomeTable;