import React from 'react';
import { Container,  Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import useFirebase from '../../../hooks/Firebase/useFirebase';
import './NavBar.css'

const NavBar = () => {
  const {user, logOut} = useAuth();
    return (
        <div id="navbar" className="container bg-light mt-4 rounded">
          <Navbar collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand href="#home"><span className="font-semibold text-green-800 text-3xl">Travel</span><span className="font-semibold text-blue-600 text-3xl">Booking</span></Navbar.Brand>
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
                <NavLink className="no-underline ml-6"
                to="/tours"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                  >All Tours</NavLink>
                {user.email?
                <> 
                <NavLink className="text-decoration-none ms-4"
                to="/bookings"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                  >My Bookings</NavLink>
                <NavLink className="text-decoration-none ms-4"
                to="/manageallbookings"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                  >Manage All Bookings</NavLink>
                <NavLink className="text-decoration-none mx-4"
                to="/addnewplan"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                  >Add New Tour</NavLink>
                  <span>{user.displayName}</span>
                  <button className="btn btn-dark ms-2" onClick={logOut}>Log Out</button>
                  </>
                  :
                <>
                <NavLink className="text-decoration-none ms-4"
                to="/login"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                  >Login</NavLink>
                <NavLink className="text-decoration-none ms-4"
                to="/signup"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                  >Sign Up</NavLink>
                  </>}
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    );
};

export default NavBar;


{/* <NavLink className="text-decoration-none ms-4"
to="/about"
activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
  >About</NavLink> */}