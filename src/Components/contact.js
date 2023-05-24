import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(
            formData.firstName && 
            formData.lastName && 
            formData.email && 
            formData.phone
        ) {
            // addNewFormData(formData);
            console.log('Form submitted:', formData);
            
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                preferredComm: '',
            });
        } else {
            console.log('invalid input');
        }
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
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        />
                </Form.Group>
                <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="lastName"
                        placeholder="Smith"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        placeholder="smith@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        />
                </Form.Group>
                <Form.Group controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="text"
                        name="phone"
                        placeholder="123-456-7890"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        />
                </Form.Group>

                <Form.Group controlId="preferredComm">
                    <Form.Label>Preferred Mode of Communication</Form.Label>
                    <Form.Check
                        type="radio"
                        label="Email"
                        name="preferredComm"
                        value="email"
                        checked={formData.preferredComm === 'email'}
                        onChange={handleInputChange}
                    />
                    <Form.Check
                        type="radio"
                        label="Phone"
                        name="preferredComm"
                        value="phone"
                        checked={formData.preferredComm === 'phone'}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Contact;

