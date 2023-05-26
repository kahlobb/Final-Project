import React from 'react';
import { Button, ButtonGroup, Card, Container } from 'react-bootstrap';
import EditModal from './edit-modal';
import ReviewForm from './form-group';

// 'state' object defines initial state of 'ReviewPage'
// 'reviews' - array to store review objects
// 'addReview' - string represents content of new input
// 'clientName' - stores name of client
// 'printingMethod' - stores selected printing method
// 'activeReviewId - track currently edited review
class ReviewPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            addReview: '',
            clientName: '',
            printingMethod: 'screen printing',
            activeReviewId: null
        };
    }

    // 'handleInputChange' = event handler
    //  uses destructuring 'name' and 'value' properties are taken from event.target
    // 'setState' is called to update the properties of the object
    // state properties specified by 'name' is updated with the new 'value'
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // method is called when user selects different printing method
    // takes 'selectedMethod' as an argument
    // inside method - updates state using 'setState'
    // sets 'printingMethod' property in state to 'selectedMethod'
    handlePrintingMethodChange = selectedMethod => {
        this.setState({
            printingMethod: selectedMethod
        });
    };

    // 'handleSubmit' = event handler
    //   - called when form is submitted => triggered by form's 'onSubmit' event
    // prevents the default form submission to avoid a page refresh
    // retrieves values of 'addReview', 'clientName', & 'printingMethod' from component's state
    handleSubmit = event => {
        event.preventDefault();
        const { addReview, clientName, printingMethod } = this.state;


        // creates a new 'review' object
        // props = 'id', 'addReview', 'clientName', 'printingMethod','agreeCount', & 'disagree Count
        const review = {
            id: Date.now(),
            clientName,
            printingMethod,
            addReview,
            agreeCount: 0,
            disagreeCount: 0
        };

        // add the new review to the 'reviews' array
        // - using a spread operator for 'prevState.reviews' and appending the new 'review'
        // resets values for 'addReview', 'clientName', & 'printingMethod'
        // resets 'newReview' to ''
        this.setState(prevState => ({
            reviews: [...prevState.reviews, review],
            clientName: '',
            printingMethod: 'screen printing',
            addReview: '',
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

    // 3 parameters - 'id', 'updatedClientName', 'updatedContent'
    // 'setState' function is used to update the state by mapping over the 'reviews' array
    // for each review it checks if the 'id' matches the 'id' parameter
    // if there's a match a new 'review' object is returned with updated values for 'clientName' and ''addReview''
    handleEdit = (id, updatedClientName, updatedContent) => {
        this.setState(prevState => ({
            reviews: prevState.reviews.map(review => {
                if(review.id === id) {
                    return {
                        ...review,
                        clientName: updatedClientName,
                        addReview: updatedContent
                    };
                }
                return review;
            })
        }));
    };

    // called when changes need to be saved
    // retrieves values from the state for 'activeReviewId', 'clientName', 'newReview, and 'reviews'
    // maps over 'reviews' array to find teh review 'id' that matches 'activeReviewId'
    // mapped array is stored in the 'updatedReviews' variable
    // state is updated by setting the 'reviews' property to the 'updatedReviews' array
    // resets properties
    handleUpdate = () => {
        const { activeReviewId, clientName, addReview, reviews } = this.state;
        const updatedReviews = reviews.map(review => {
            if(review.id === activeReviewId) {
                return {
                    ...review,
                    clientName,
                    addReview
                };
            }
            return review;
        });

        this.setState({
            reviews: updatedReviews,
            activeReviewId: null,
            clientName: '',
            addReview: ''
        });
    };


    /* After ReviewForm
        - conditional rendering based on 'length' of the 'reviews'
        - If there are 'reviews' they are mapped over ('map' function) and rendered as <Card>
        - each review has unique 'key' prop = 'review.id'
        
        <Card.Text> = review's content 
        <ButtonGroup> = agree and disagree buttons 
            - Delete Button is separate though 
            - Each button has 'onClick' prop set to corresponding methods 
        
        If there are no reviews <p> = 'No reviews yet'    */
    render() {
        const { reviews, addReview, clientName, printingMethod } = this.state;

        return (
            <Container>
                <h1>Reviews</h1>
                <ReviewForm 
                    clientName={clientName}
                    printingMethod={printingMethod}
                    addReview={addReview}
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
                                <Card.Text>{review.addReview}</Card.Text>
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
                                    addReview={review.addReview}
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