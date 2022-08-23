import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home";
import Details from "./pages/Details";

const App = () => {
  const [code, setCode] = useState("");
  const [certData, setCertData] = useState({});
  const [loaded, setLoaded] = useState(false);

  const navegate = useNavigate();

  useEffect(() => {
    if (loaded) {
      console.log("Se ha recargado");
      //console.log(certData);
      navegate(`details/${code}`);
      setCode("");
      setLoaded(false);
    }
  }, [loaded]);

  const onChange = (e) => {
    setCode(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`https://its-cert-api.herokuapp.com/api/certificado/${code}`)
      .then((response) => {
        setCertData(response.data);
      })
      .then(() => {
        console.log("certdata: ", certData);
      })
      .then(() => {
        setLoaded(true);
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <NavbarComponent onChange={onChange} onSubmit={onSubmit} code={code} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:id" element={<Details props={certData} />} />
      </Routes>
    </>
  );
};

export default App;
