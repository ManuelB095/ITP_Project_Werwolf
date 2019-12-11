import React, { Component } from "react";

export default class PlayerTable extends Component {
  render() {
    return (
      <div className="jumbotron opaque" id="dorfbewohner-list">
        <div className="container" align="center">
          <table
            className="text-center center table table-striped table-hover"
            id="Dorfbewohner-Table"
          >
            <thead className>
              <tr>
                <th scope="col">
                  <h3>Dorfbewohner</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gunter</td>
              </tr>
              <tr>
                <td>Linda</td>
              </tr>
              <tr>
                <td>Lukas</td>
              </tr>
              <tr>
                <td>Hauke</td>
              </tr>
              <tr>
                <td>Wilfred</td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>
      </div>
    );
  }
}
