import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import './Header.css';
import logoTop from '../../../logos/logo-top.png';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
     const {user, handleLogoutUser} = useAuth()
     return (
          <Navbar collapseOnSelect expand="lg" bg="#FFF" variant="light">
          <Container>
          <Navbar.Brand as={NavLink} to="/home">
          <img
          src={logoTop}
          width="200"
          
          className="d-inline-block align-top"
          alt=""
          />
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={NavLink} className=" link-top" to="/home">Home</Nav.Link>
               <Nav.Link as={NavLink} className=" link-top" to="/donation">Donation</Nav.Link>
               <Nav.Link as={NavLink} className=" link-top" to="/myevent">My Event</Nav.Link>
               {user.email ? <button onClick={handleLogoutUser} className ="logout-style">Logout</button> :<Nav.Link as={NavLink} className=" link-top" to="/login">Login</Nav.Link>}
               <Navbar.Text>
               Signed in as: <a href="#login">{user.displayName}</a>
               </Navbar.Text>
          </Navbar.Collapse>
          
          </Container>
  </Navbar>
     );
};

export default Header;