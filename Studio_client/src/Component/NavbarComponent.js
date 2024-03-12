// src/Component/NavbarComponent.js
import React from 'react';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../App.css';

function NavbarComponent() {

    return (
        <div className='sticky-top'>
            <Navbar expand="lg" bg="dark" variant="dark" className="px-5">
                <Container>
                    <Navbar.Brand as={NavLink} to="/" className="text-danger me-4" style={{ fontFamily: 'Alumni Sans Collegiate One', fontSize: '29px' }}>
                        SALON STUDIO
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="me-auto d-flex" style={{ fontFamily: 'Roboto Condensed', fontSize: '20px' }}>
                            <Nav.Link as={NavLink} to="/" className="navlink-wrap me-2">
                                HOME
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/about-us" className="navlink-wrap me-2">
                                ABOUT US
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/contact-us" className="navlink-wrap me-2" >
                                CONTACT US
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/reg" className="navlink-wrap me-2" >
                                BOOK AN APPOINTMENT
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            {/* <Button variant="outline-danger" type="submit">
                                Login/REGISTER
                            </Button> */}
                            <NavLink to="/login" className="btn btn-outline-danger" type="submit">
                                Login
                            </NavLink>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;
