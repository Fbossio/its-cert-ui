import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox } from "cdbreact";
import "../assets/css/footer.css";

const Footer = () => {
  const bgBlack = { backgroundColor: "#817f7f", color: "#f4f4f4" };

  return (
    <CDBFooter className="shadow" style={bgBlack}>
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-3"
        style={{ width: "90%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Sobre Nosotros
            </p>
            <p className="my-3" style={{ width: "250px" }}>
              ITSYSTEMS PERU es una organización de profesionales, dedicada a
              proveer soluciones de formación, desarrollo e implementación de
              tecnología orientados a la pequeña, mediana y gran empresa.
            </p>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Contactos
            </p>
            <CDBBox
              flex="column"
              display="flex"
              style={{ cursor: "pointer", padding: "0" }}
            >
              <CDBFooterLink to="#">
                <i class="fas fa-envelope"></i>
                <span className="mx-3">info@itsystems.pe</span>
              </CDBFooterLink>
              <CDBFooterLink to="#">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span className="mx-3">(+511) 6575074</span>
              </CDBFooterLink>
              <CDBFooterLink to="#">
                <i class="fa fa-mobile" aria-hidden="true"></i>
                <span className="mx-3">( +51) 954101100</span>
              </CDBFooterLink>
              <CDBFooterLink to="#">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span className="mx-3">Av. Petit Thouars 1775</span>
              </CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Redes Sociales
            </p>
            <CDBBox
              flex="column"
              display="flex"
              style={{ cursor: "pointer", padding: "0" }}
            >
              <CDBFooterLink to="#">
                <i class="fa-brands fa-facebook-f"></i>
                <span className="mx-3">Facebook</span>
              </CDBFooterLink>
              <CDBFooterLink to="#">
                <i class="fab fa-linkedin-in"></i>
                <span className="mx-3">LinkedIn</span>
              </CDBFooterLink>
              <CDBFooterLink>
                <i class="fa-brands fa-instagram"></i>
                <span className="mx-3">Instagram</span>
              </CDBFooterLink>
              <CDBFooterLink to="#">
                <i class="fab fa-youtube"></i>
                <span className="mx-3">YouTube</span>
              </CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;
