import React, { Component } from 'react'

export default class TableSpielleiterDorfbewohner extends Component {
    render() {
        return (
            <div className="jumbotron opaque" id="dorfbewohner-list">
        <div className="container" align="center">
          {/*Lister aller Spieler ( Dorfbewohner )*/}
          <table className="text-center center table table-striped table-hover" id="Dorfbewohner-Table">
            <thead className>
              <tr>
                <th scope="col"><h3 className="werwolf-font">Dorfbewohner</h3></th>                    
              </tr>
            </thead>
            <tbody><tr>
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
            </tbody></table>
          <br />
        </div>
        <div className="row">
          <div className="col-sm-4"> <button className="btn btn-dark col">Kick</button></div>
          <div className="col-sm-4"> <button className="btn btn-dark col">Abstimmung</button></div>
          <div className="col-sm-4"> <button className="btn btn-dark col">Reset</button></div>
        </div>
      </div>
        )
    }
}
