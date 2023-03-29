import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/" className="nav-link">HOME </NavLink>
            <NavLink to="/blog" className="nav-link">BLOG </NavLink>
            <NavLink to="/service" className="nav-link">SERVICE </NavLink>
            <NavLink to="/contact" className="nav-link">CONTACT </NavLink>
        </nav>
    );
};

export default Navbar;