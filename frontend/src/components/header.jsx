import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../store/action/action";
function Header(props) {
    const nav = useNavigate();
    const handleLogout = async () => {
        await props.processLogout();
        nav('/');
        window.location.reload();

    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container >
                <Navbar.Brand href="/">OrderPLS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {props.isLogin ?
                            <NavLink to="/workspace" className='nav-link'>Your WorkSpace</NavLink> :
                            <NavLink to="/" className='nav-link'>Home</NavLink>
                        }
                        <NavLink to="/about" className='nav-link'>About</NavLink>
                    </Nav>
                    <Nav>
                        {props.isLogin ?
                            <div className='nav-link' style={{ cursor: 'pointer' }} onClick={(event) => { handleLogout() }}>Log Out</div> :
                            <Link className='nav-link' to="/login">Login</Link>
                        }
                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

const mapStateToProps = state => {
    return {
        isLogin: state.isLogin,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        processLogout: async () => dispatch(actions.processLogout()),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
// export default Header;
