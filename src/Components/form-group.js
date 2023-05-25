import React from 'react';
import { Form, Button } from 'react-bootstrap';
import ReviewDropdown from './dropdown-button';

const ReviewForm = ({ clientName, printingMethod, content, handleInputChange, handlePrintingMethodChange, handleSubmit }) => {
    return (
        <Form onSubmit={handleSubmit}>
                <Form.Group controlId="clientName">
                    <Form.Label>Client Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="clientName"
                            value={clientName}
                            onChange={handleInputChange}
                            placeholder="Client Name"
                        />
                    </Form.Group>
                    <Form.Group controlId="printingMethod">
                        <Form.Label>Printing Method</Form.Label>
                        <ReviewDropdown 
                            printingMethod={printingMethod}
                            setPrintingMethod={handlePrintingMethodChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="reviewForm">
                        <Form.Label>Review</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={content}
                            onChange={handleInputChange}
                            placeholder="Write your review..."
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit Review
                    </Button>
                </Form>
    );
};

export default ReviewForm;