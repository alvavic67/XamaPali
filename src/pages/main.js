import React from "react";
import "../css/cssgrid.css";

import Map from "../components/Map";
import Button from "../components/Button";
import List from "../components/List";

const Main = () => {
  return (
    <div className="container">
      <Map className="item-map" />
      <Button
        color="primary"
        value="Generar Reporte"
        className="item-reporte"
      />
      <Button color="secondary" value="Cerrar Sesión" className="item-cerrar" />
      <List title="Usuarios" className="item-lista" />
    </div>
  );
};

export default Main;
