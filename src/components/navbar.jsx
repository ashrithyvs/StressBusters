import React from "react";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavLink from "react-bootstrap/NavLink";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "../css/navbar.css";

function Navigation() {
  return (
    <div class="mb-5 pb-4">
      <Navbar
        fixed="top"
        style={{ background: "rgb(33,37,41)", padding: "1%" }}
        variant="dark"
        expand="lg"
      >
        <NavbarBrand
          className="mr-4 col-3 nav-brand"
          style={{ color: "rgb(254,209,54)" }}
          href="#home"
        >
          StressBuster
        </NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="col-md-12 justify-content-end">
            <NavLink className="mx-1" href="#about">
              <Button className="navbutton" variant="outline-warning">
                ABOUT
              </Button>
            </NavLink>
            <NavLink className="mx-1" href="#services">
              <Button className="navbutton" variant="outline-warning">
                WHAT'S INSIDE
              </Button>
            </NavLink>
            <NavLink className="mx-1" href="#pricing">
              <Button className="navbutton" variant="outline-warning">
                PRICING
              </Button>
            </NavLink>
            <NavLink className="mx-1" href="#reviews">
              <Button className="navbutton" variant="outline-warning">
                TESTIMONIALS
              </Button>
            </NavLink>
            <NavLink className="mx-1" href="#contact">
              <Button className="navbutton" variant="outline-warning">
                CONTACT US
              </Button>
            </NavLink>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
