import React from 'react';
import { Button, ButtonGroup, Card, Container } from 'react-bootstrap';
import EditModal from './edit-modal';
import ReviewForm from './form-group';

// 'state' object defines initial state of 'ReviewPage'
// 2 properties = 'reviews' & 'newReview'
// 'reviews' - array to store review objects
// 'newReview' - string represents content of new input
class ReviewPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            newReview: '',
            clientName: '',
            printingMethod: 'screen printing',
            activeReviewId: null
        };
    }

    // 'handleInputChange' = event handler
    //   - updates 'newReview' property in state whenever review input changes
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handlePrintingMethodChange = selectedMethod => {
        this.setState({
            printingMethod: selectedMethod
        });
    };

    // 'handleSubmit' = event handler
    //   - called when form is submitted
    handleSubmit = event => {
        event.preventDefault();
        const { newReview, clientName, printingMethod } = this.state;


        //   - creates a new 'review' object based on 'newReview' content
        // default properties set for 'agreeCount' & 'disagreeCount'
        const review = {
            id: Date.now(),
            content: newReview,
            clientName,
            printingMethod,
            agreeCount: 0,
            disagreeCount: 0
        };

        // add the new review to the 'reviews' array
        // resets 'newReview' to ''
        this.setState(prevState => ({
            reviews: [...prevState.reviews, review],
            newReview: '',
            clientName: '',
            printingMethod: 'screen printing'
        }));
    };

    // 'handleAgree' = event handler
    // called when Agree button is clicked for specific review
    // finds review with the matching 'id'
    // increments 'agreeCount' property
    // updates
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

    // // 'handleDisagree' = event handler
    // called when Disagree button is clicked for specific review
    // finds review with the matching 'id'
    // increments 'disagreeCount' property
    // updates
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

    // 'handleDelete' method = event handler
    // called when Delete button is clicked for specific review
    // filters out the 'review' with matching 'id' from the 'reviews' array
    // updates the state
    handleDelete = id => {
        this.setState(prevState => ({
            reviews: prevState.reviews.filter(review => review.id !== id)
        }));
    };

    handleEdit = (id, updatedClientName, updatedContent) => {
        this.setState(prevState => ({
            reviews: prevState.reviews.map(review => {
                if(review.id === id) {
                    return {
                        ...review,
                        clientName: updatedClientName,
                        content: updatedContent
                    };
                }
                return review;
            })
        }));
    };

    handleUpdate = () => {
        const { activeReviewId, clientName, newReview, reviews } = this.state;
        const updatedReviews = reviews.map(review => {
            if(review.id === activeReviewId) {
                return {
                    ...review,
                    clientName,
                    content: newReview
                };
            }
            return review;
        });

        this.setState({
            reviews: updatedReviews,
            activeReviewId: null,
            clientName: '',
            newReview: ''
        });
    };


    // destructures the 'reviews' and 'newReview' properties from state
    // 'onSubmit' prop is set to 'handleSubmit' method - called when form is submitted
    // <Form.Control> is 'textarea' for review input
    // 'value' is bound to 'newReview' prop in state
    // 'onChange' prop set to 'handleInputChange' method
    
    /* After Form
        - conditional rendering based on 'length' of the 'reviews'
        - If there are 'reviews' they are mapped over ('map' function) and rendered as <Card>
        - each review has unique 'key' prop = 'review.id'
        
        <Card.Text> = review's content 
        <ButtonGroup> = agree and disagree buttons 
            - Delete Button is separate though 
            - Each button has 'onClick' prop set to corresponding methods 
        
        If there are no reviews <p> = 'No reviews yet'    */
    render() {
        const { reviews, content, clientName, printingMethod } = this.state;

        return (
            <Container>
                <h1>Reviews</h1>
                <ReviewForm 
                    clientName={clientName}
                    printingMethod={printingMethod}
                    newReview={content}
                    handleInputChange={this.handleInputChange}
                    handlePrintingMethodChange={this.handlePrintingMethodChange}
                    handleSubmit={this.handleSubmit}
                />
                {reviews.length > 0 ? (
                    reviews.map(review => (
                        <Card key={review.id} className="my-4">
                            <Card.Body>
                                <Card.Title>{review.clientName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{review.printingMethod}</Card.Subtitle>
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
                                <EditModal
                                    reviewId={review.id}
                                    clientName={review.clientName}
                                    content={review.content}
                                    handleEdit={this.handleEdit}
                                />
                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <p>No reviews yet</p>
                )}
            </Container>
        );
    }
}

export default ReviewPage;


// For my 'reviews.js' page...
// I'm happy with my code and it's all working exactly as it should. However, I would like to add a couple things... I want to add an updateChange() method in order to fulfill all the CRUD operations requirement for the project. 

// Need to figure out why initial comment won't stick