import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import certDetailMap from "../utils/listDetailsMap";
import "../assets/css/listDetails.css";
const data = require("../assets/data.json");

const ListDetails = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    setInfo(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const keys = Object.keys(info);

  return (
    <ListGroup>
      {keys.map((x, idx) => (
        <ListGroup.Item key={idx}>
          <Row>
            <Col>
              <span className="clave">{certDetailMap[x]}</span>:
            </Col>
            <Col>
              <span className="valor">{info[x]}</span>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListDetails;
