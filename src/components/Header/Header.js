import React from "react";

import Logo from "../../assets/logo.png";
import "./styles.css";

export default class Header extends React.Component {
  render() {
    return (
      <div className="body">
        <img src={Logo} alt="Logo Justa" className="logo" />

        <div className="textMsg">
          <h1>Encontre nossos colaboradores aqui</h1>
        </div>
      </div>
    );
  }
}
