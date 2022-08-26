import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import certDetailMap from "../utils/listDetailsMap";
import "../assets/css/listDetails.css";

const ListDetails = (props) => {
  //const [info, setInfo] = useState(certData.data);

  const [info, setInfo] = useState({});

  /*
  useEffect(() => {
    setInfo(certData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [certData]);
  */

  const { certData, loaded } = props.props.props;

  useEffect(() => {
    setInfo(certData.data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  const info_obj = {
    Código: info.codigo,
    Titular: info.titular,
    Curso: info.curso,
    Instructor: info.instructor,
    "Número de horas": info.numero_horas,
    "Fecha de emisión": info.fecha_emision,
  };

  const keys = Object.keys(info_obj);

  return (
    <ListGroup>
      {keys.map((x, idx) => (
        <ListGroup.Item key={idx}>
          <Row>
            <Col>
              <span className="clave">{x}</span>:
            </Col>
            <Col>
              <span className="valor">{info_obj[x]}</span>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListDetails;
