import React, { Component } from 'react'

export default class TableSpielleiterWerwolf extends Component {
    render() {
        return (
            <div className="jumbotron opaque" id="werwolf-list">
        <div className="container" align="center">
          {/*Lister der anderen Werwölft*/}
          <table className="text-center center table table-striped table-hover" id="Werwolf-Table">
            <thead className>
              <tr>
                <th scope="col"><h3 className="werwolf-font">Werwölfe</h3></th>                    
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
