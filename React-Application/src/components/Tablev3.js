import React, { Component } from "react";
import name from './name.js';
import namelist from './namelist.js';
// import Button from 'react-bootstrap/Button';
//import logo from './logo.svg';

function createData(name) {
  return { name };
}

const rows = [
  createData("Gunter"),
  createData("Linda"),
  createData("Lukas"),
  createData("Hauke"),
  createData("Wilfred")
];

class WerwolfTable extends Component {
  render() {
    return (
      <div className="jumbotron opaque" id="werwolf-list">
        <div className="container" align="center">
          <table
            className="text-center center table table-striped table-hover Werwolf-Table"
            id="Werwolf-Table"
          >
            <thead className>
              <tr>
                <th scope="col">
                  <h3>Werwölfe</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <namelist names={this.state.names} />
            </tbody>
          </table>
          <br />
        </div>
      </div>
    );
  }
}

export default WerwolfTable;
