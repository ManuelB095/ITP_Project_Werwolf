import React, { Component } from "react";
import icon from '../pics/icon2.png';

export default class WerwolfHeader extends Component {
  render() {
    return (
      <header>
        <div className="jumbotron text-center site-header">
          <h1 className="Werwolf-Title">Werwolf</h1>
          <img className="icon" src={icon} alt="Werwolf-Icon" />
        </div>
      </header>
    );
  }
}
