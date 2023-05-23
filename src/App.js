// NavBar on here since all pages are using it (?)
// React Routes here

import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/home';
import Contact from './Components/contact';
import NewsFeed from './Components/news-feed';
import { Container, Navbar, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';




/*

export default function App() {
  return (
    <Container>
      <Router>
        <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand as={Link} to="/">QB Custom</Navbar.Brand>
          <Nav className="navbar"></Nav>
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/news-feed">Posts</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
        </Navbar>
            <Switch>
              <Route to="/">
                <Home />
              </Route>
              <Route to="/news-feed">
                <NewsFeed />
              </Route>
              <Route to="/contact">
                <Contact />
              </Route>
            </Switch>
      </Router>
    </Container>
  );
}; */
 

export default function App() {
  return (
    <Container>
      <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news-feed">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route>
          <Home />
        </Route>
        <Route Path="/contact">{ <Contact />}</Route>
      </Switch>
      </Router>
    </Container>
  );
};


/*
<Navbar bg="light" variant="light">
  <Navbar.Brand as={Link} to="/">QB Custom</Navbar.Brand>
  <Nav className="navbar">
    <Nav.Link as={Link}to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/news-feed">Posts</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
    </Nav>
</Navbar>
*/