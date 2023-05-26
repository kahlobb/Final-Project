import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/home';
import Contact from './Components/contact';
import ReviewPage from './Components/reviews';
import { Container } from 'react-bootstrap';
import NavBar from './Components/nav-bar';
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
        <NavBar />


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