import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import QB_Logo from '../images/QB_Logo.png';

const NavBar = () => {
    return (
        <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          <img src={QB_Logo} style={{ width: '50px' }}></img>
        </Navbar.Brand>
          <Nav className="navbar"></Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
        </Navbar>
    );
};

export default NavBar;