import React from "react";
import Container from "react-bootstrap/Container";
import ListDetails from "../components/ListDetails";

const Details = () => {
  return (
    <div>
      <Container className="py-5">
        <h4 className="mb-4">SISTEMA DE GESTIÓN DE CERTIFICADOS</h4>
        <ListDetails />
      </Container>
    </div>
  );
};

export default Details;
