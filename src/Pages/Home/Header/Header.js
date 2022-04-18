import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }
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
                            <Nav.Link as={Link} to="/login" className='fs-5 text-dark'>Register</Nav.Link>
                            {
                                user ?
                                    <Nav.Link as={Link} to="/" onClick={handleSignOut} className='fs-5 text-dark'>
                                        Sign out
                                    </Nav.Link>
                                    :

                                    <Nav.Link as={Link} to="/login" className='fs-5 text-dark'>
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;