import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features" className='fs-5 text-dark'>Services</Nav.Link>
                            <Nav.Link href="#pricing" className='fs-5 text-dark'>Blog</Nav.Link>
                            <Nav.Link href="#pricing" className='fs-5 text-dark'>About</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets" className='fs-5 text-dark'>Login</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes" className='fs-5 text-dark'>
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