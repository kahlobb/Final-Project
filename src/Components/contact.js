// Contact Form
// Submit Button
// Card with business operations hours and location
// image? 
import React, { useState } from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
//  import { Form, Button } from 'react-bootstrap';


const Contact = () => {
    console.log('test');
    return <h1>Contact Us</h1>
    
}

export default Contact;

/*
const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value });
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        />
                </Form.Group>
                <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        />
                </Form.Group>
                <Form.Group controlId="phoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="text"
                        name="phoneNumber"
                        placeholder="(000)123-4567"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        />
                </Form.Group>

                <Form.Group controlId="preferredComm">
                    <Form.Label>Preferred Mode of Communication</Form.Label>
                    <Form.Check
                        type="radio"
                        label="email"
                        name="preferredComm"
                        value="email"
                        onChange={handleInputChange}
                    />
                    <Form.Check
                        type="radio"
                        label="email"
                        name="preferredComm"
                        value="email"
                        onChange={handleInputChange}
                    />
                </Form.Group>
            </Form>
        </div>
    )
}
*/


