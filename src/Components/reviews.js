import React from 'react';
import { Button, ButtonGroup, Form, Card, Container } from 'react-bootstrap';

class ReviewPage extends React.Component {
    state = {
        reviews: [],
        newReview: ''
    };

    handleInputChange = event => {
        this.setState({
            newReview: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { newReview } = this.state;

        const review = {
            id: Date.now(),
            content: newReview,
            agreeCount: 0,
            disagreeCount: 0
        };

        this.setState(prevState => ({
            reviews: [...prevState.reviews, review],
            newReview: ''
        }));
    };

    handleAgree = id => {
        this.setState(prevState => ({
            reviews: prevState.reviews.map(review => {
            if(review.id === id) {
                return { ...review, agreeCount: review.agreeCount + 1 };
            }
            return review;
            })
        }));
    };

    handleDisagree = id => {
        this.setState(prevState => ({
            reviews: prevState.reviews.map(review => {
                if(review.id === id) {
                    return { ...review, disagreeCount: review.disagreeCount + 1 };
                }
                return review;
            })
        }));
    };

    handleDelete = id => {
        this.setState(prevState => ({
            reviews: prevState.reviews.filter(review => review.id !== id)
        }));
    };

    render() {
        const { reviews, newReview } = this.state;

        return (
            <Container>
                <h1>Reviews</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="reviewForm">
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={newReview}
                            onChange={this.handleInputChange}
                            placeholder="Write your review..."
                            />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit Review
                    </Button>
                </Form>
                {reviews.length > 0 ? (
                    reviews.map(review => (
                        <Card key={review.id} className="my-4">
                            <Card.Body>
                                <Card.Text>{review.content}</Card.Text>
                                <ButtonGroup className="mr-2" aria-label="Review Feedback">
                                    <Button variant="success" onClick={() => this.handleAgree(review.id)}>
                                        Agree <span className="m1-1">{review.agreeCount}</span>
                                    </Button>
                                    <Button variant="danger" onClick={() => this.handleDisagree(review.id)}>
                                        Disagree <span className="m1-1">{review.disagreeCount}</span>
                                    </Button>
                                </ButtonGroup>
                                <Button variant="outline-danger" onClick={() => this.handleDelete(review.id)}>
                                    Delete
                                </Button>
                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <p>No reviews yet.</p>
                )}
            </Container>
        );
    }
}

export default ReviewPage;
