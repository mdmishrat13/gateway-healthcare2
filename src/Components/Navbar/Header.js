import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css";
import Button from 'react-bootstrap/Button';
import useAuth from './../../hooks/useAuth'

const Header = () => {
    const { user } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                <Container>
                    <Navbar.Brand className="nav-logo-style"><Link to="/home">Getway HealthCare</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav-items-style">
                            <Nav.Link> <Link to="/home">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/specialists">Specialists</Link></Nav.Link>
                            <Nav.Link><Link to="/about">About</Link></Nav.Link>
                            {user.displayName ? <div> <span>{user.displayName}</span>
                                <Button variant="primary" size="sm"> Logout </Button> </div>
                                : <div className="login-register-btn" >
                                    <Link to="/login"> Login</Link>
                                    <Link to="/register"> Register </Link></div>}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;