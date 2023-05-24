import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/home';
import Contact from './Components/contact';
import ReviewPage from './Components/reviews';
// import QB_Logo from './images/QB_Logo.png';
import { Container, Navbar, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';



export default function App() {
  return (
    <Container>
      <Router>
        <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand as={Link} to="/">QB Custom</Navbar.Brand>
          <Nav className="navbar"></Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
        </Navbar>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/reviews">
                <ReviewPage />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
      </Router>
    </Container>
  );
}

// Want to change "QB Custom" on Navbar to logo
// can't seem to reset the phone number on contact form