import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/img/its_logo.png";
import "../assets/css/navbar.css";

const NavbarComponent = () => {
  return (
    <Navbar ccollapseOnSelect expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={logo} alt="its-logo" width="80" height="80"></img>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-evenly">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">
              <i class="fas fa-search"></i>
            </Button>
          </Form>
          <LinkContainer to="/">
            <Nav.Link href="#home">Home</Nav.Link>
          </LinkContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
