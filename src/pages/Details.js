import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListDetails from "../components/ListDetails";
import Download from "../components/Download";
import Preview from "../components/Preview";
import badge from "../assets/img/SAP_badge.svg";

const Details = (props) => {
  return (
    <div>
      <Container className="py-5">
        <h4 className="mb-4">SISTEMA DE GESTIÓN DE CERTIFICADOS</h4>
        <Row>
          <Col s={12}>
            <ListDetails props={props} />
          </Col>
          <Col s={12}>
            <img src={badge} className="mx-auto d-block py-4" />
          </Col>
        </Row>
        <Preview props={props} />
        <Download props={props} />
      </Container>
    </div>
  );
};

export default Details;
