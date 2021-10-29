import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div id="navbar" className="container fixed-top bg-light mt-4 rounded">
          <Navbar collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand href="#home">TravelBooking</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <NavLink className="text-decoration-none"
                to="/home"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                >Home</NavLink>
                <NavLink className="text-decoration-none ms-4 text-dark"
                to="/tours"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                  >All Tours</NavLink>
                <NavLink className="text-decoration-none ms-4"
                to="/bookings"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                  >My Bookings</NavLink>
                <NavLink className="text-decoration-none ms-4"
                to="/about"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                  >About</NavLink>
                <NavLink className="text-decoration-none ms-4"
                to="/login"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                  >Login</NavLink>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    );
};

export default NavBar;