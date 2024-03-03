import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../store/action/action";
import { useSignOut } from 'react-auth-kit';
import { Logout } from "./index";
function Header(props) {
    const nav = useNavigate();
    const signOut = useSignOut();
    const handleLogout = async () => {
        //await props.processLogout();
        // nav('/');
        // window.location.reload();
        signOut();
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
                            <Logout /> :
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

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
// export default Header;
