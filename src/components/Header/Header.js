import React from "react";
import Button from "@material-ui/core/Button";

import Logo from "../../assets/logo.png";
import "./styles.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      "Fernando Henrique",
      "Raí Siqueira",
      "Arthur Andrade",
      "Hugo Barbosa",
      "Marília Rijo",
    ];

    this.state = {
      suggestions: [],
      text: "",
    };
  }

  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`${value}`, "i");
      suggestions = this.items.sort().filter((v) => regex.test(v));
    }

    this.setState(() => ({ suggestions, text: value }));
  };

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }));
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item) => (
          <li onClick={() => this.suggestionSelected(item)}>{item}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { text } = this.state;

    return (
      <div>
        <img src={Logo} alt="Logo Justa" className="logo" />

        <div className="textMsg">
          <h1>Encontre nossos colaboradores aqui</h1>

          <div className="SearchBarCss">
            <input value={text} onChange={this.onTextChanged} type="text" />
            {this.renderSuggestions()}
          </div>
          <Button className="Button" variant="contained" href="/pages">
            Pesquisar
          </Button>
        </div>
      </div>
    );
  }
}
