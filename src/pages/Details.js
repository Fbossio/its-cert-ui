import React from "react";
import Container from "react-bootstrap/Container";
import ListDetails from "../components/ListDetails";

const Details = (props) => {
  return (
    <div>
      <Container className="py-5">
        <h4 className="mb-4">SISTEMA DE GESTIÓN DE CERTIFICADOS</h4>
        <ListDetails props={props.props} />
      </Container>
    </div>
  );
};

export default Details;
