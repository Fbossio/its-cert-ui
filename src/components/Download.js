import React from "react";
import Button from "react-bootstrap/Button";

const Download = (props) => {
  const { cert_url } = props.props.props.certData.data;

  return (
    <>
      <a href={cert_url}>
        <Button variant="success" className="my-3">
          Descarga
        </Button>
      </a>
    </>
  );
};

export default Download;
