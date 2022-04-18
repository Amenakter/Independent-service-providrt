import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services" className='fs-5 text-dark'>Services</Nav.Link>
                            <Nav.Link href="#blog" className='fs-5 text-dark'>Blog</Nav.Link>
                            <Nav.Link href="#about" className='fs-5 text-dark'>About</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/login" className='fs-5 text-dark'>Login</Nav.Link>
                            <Nav.Link eventKey={2} as={Link} to="/register" className='fs-5 text-dark'>
                                Register
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;