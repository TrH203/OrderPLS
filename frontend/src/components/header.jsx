import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container >
                <Navbar.Brand href="/">OrderPLS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/about" className='nav-link'>About</NavLink>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Link className='nav-link' to="/login">Login</Link>
                    </Nav>
                    <Nav>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default Header;