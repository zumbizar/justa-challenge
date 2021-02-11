import React from "react";
import Button from "@material-ui/core/Button";

import "./styles.css";
import logoPerfil from "../assets/logo-perfil.jpg";

export default class Pages extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="backHome">
          <Button variant="contained" href="http://localhost:3000/">
            VOLTAR
          </Button>
        </div>
        <div className="Painel">
          <img className="imagemPerfil" src={logoPerfil} alt="Foto Perfil" />
          <h1>Fernando Henrique</h1>
        </div>
      </div>
    );
  }
}
