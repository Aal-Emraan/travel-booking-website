import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <NavLink 
            to="/home"
            activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >Home</NavLink>
            <NavLink
            to="/tours"
            activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
              >All Tours</NavLink>
            <NavLink
            to="/bookings"
            activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
              >My Bookings</NavLink>
            <NavLink
            to="/about"
            activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
              >About</NavLink>
            <NavLink
            to="/login"
            activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
              >Login</NavLink>
        </div>
    );
};

export default NavBar;