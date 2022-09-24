import React from "react";
import {Container, Nav, Navbar, NavItem} from "react-bootstrap";
import logo from "../assets/attributelogo.png";

const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Nav className="navbar-brand">
                    <Nav.Link href="#about" className="text-white text-decoration-none">
                        <img src={logo} alt="..." height={40}/>
                    </Nav.Link>
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavItem> <Nav.Link href="#testimonials" className="text-white text-decoration-none"> Services/Products  </Nav.Link> </NavItem>
                        <NavItem> <Nav.Link href="#contact" className="text-white text-decoration-none"> Contact Us  </Nav.Link> </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;