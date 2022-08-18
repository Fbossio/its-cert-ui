import React from "react";

import Container from "react-bootstrap/Container";

import Footer from "../components/Footer";

import "../assets/css/home.css";

const Home = () => {
  return (
    <div>
      <Container className="main-content py-5">
        <h2 className="mail-title">ITS CERTIFICADOS</h2>
        <h4 className="main-subtitle my-4">
          Base de datos de certificados de ITSYSTEMS
        </h4>
        <p className="main-description">
          En este sitio web encontrará información sobre los certificados
          emitidos por ITSYSTEMS. Ingresa el ID del certificado en el formulario
          ubicado en la parte superior.
        </p>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
