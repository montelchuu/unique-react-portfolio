import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faFile, faLink, faUsersRectangle, faM, faD } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
    return (
      <Navbar expand ="md" fixed="top" className="sticky">
        <Container>
            <Navbar.Brand className="d-flex">
                <FontAwesomeIcon style={{ marginRight: "3px" }} icon= { faM }/><FontAwesomeIcon icon= { faD }/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span></span>
                <span></span>
                <span></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto mx-5">
                    <NavLink to="/" className="nav" style={({ isActive }) => ({ 
                        color: isActive ? 'orange' : 'gray', textDecoration: 'none' })}>
                        <FontAwesomeIcon style={{ marginTop: "3px", marginRight: "7px" }} icon={ faHouse } />Home
                    </NavLink>
                    <NavLink to="/about" className="nav" style={({ isActive }) => ({ 
                        color: isActive ? 'orange' : 'gray', textDecoration: 'none' })}>
                         <FontAwesomeIcon style={{ marginTop: "3px", marginRight: "7px" }} icon={ faUser } />About
                    </NavLink>
                    <NavLink to="/resume" className="nav" style={({ isActive }) => ({ 
                        color: isActive ? 'orange' : 'gray', textDecoration: 'none' })}>
                        <FontAwesomeIcon style={{ marginTop: "3px", marginRight: "7px" }} icon={ faFile } />Resume
                    </NavLink>
                    <NavLink to="/contact" className="nav" style={({ isActive }) => ({ 
                        color: isActive ? 'orange' : 'gray', textDecoration: 'none' })}>
                        <FontAwesomeIcon style={{ marginTop: "3px", marginRight: "7px" }} icon={ faLink } />Contact
                    </NavLink>
                    <NavLink to="/portfolio" className="nav" style={({ isActive }) => ({ 
                        color: isActive ? 'orange' : 'gray', textDecoration: 'none' })}>
                        <FontAwesomeIcon style={{ marginTop: "3px", marginRight: "7px" }} icon={ faUsersRectangle } />Portfolio
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Navigation;
  