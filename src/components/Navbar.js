import React from "react";
import { Container, Nav, Navbar, NavItem, Form, Button } from "react-bootstrap";
import logo from "../assets/attributelogo.png";
import mainLogo from "../assets/PNG.png";

const NavBar = () => {
  return (
    <Navbar bg="white" expand="lg" fixed="top">
      <Container>
        <Nav className="navbar-brand">
          <Nav.Link href="/" className="text-white text-decoration-none">
            <img src={mainLogo} alt="..." height={30} />
          </Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <div style={{ border: "2px solid red", borderRadius: "10px" }}>
              <NavItem>
                {" "}
                <Nav.Link
                  href="#products"
                  className="text-black text-decoration-none"
                >
                  {" "}
                  Services/Products{" "}
                </Nav.Link>{" "}
              </NavItem>
            </div>
            <div style={{ paddingRight: "20px" }}></div>
            <div style={{ border: "2px solid red", borderRadius: "10px" }}>
              <NavItem>
                {" "}
                <Nav.Link
                  href="#contact"
                  className="text-black text-decoration-none"
                >
                  {" "}
                  Contact Us{" "}
                </Nav.Link>{" "}
              </NavItem>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
