import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import Container from "react-bootstrap/Container";
import ListDetails from "../components/ListDetails";

const Details = () => {
  return (
    <div>
      <NavbarComponent />
      <Container className="py-5">
        <h4 className="mb-4">SISTEMA DE GESTIÓN DE CERTIFICADOS</h4>
        <ListDetails />
      </Container>
    </div>
  );
};

export default Details;
