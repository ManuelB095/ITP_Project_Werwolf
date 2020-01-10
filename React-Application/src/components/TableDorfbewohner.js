import React, { Component } from 'react'

export default class Table_Dorfbewohner extends Component {
    render() {
        return (
            <div className="jumbotron opaque" id="dorfbewohner-list">
            <div className="container" align="center">
              {/*Lister aller Spieler ( Dorfbewohner )*/}
              <table className="text-center center table table-striped table-hover" id="Dorfbewohner-Table">
                {/*                    <tr>
                                                <td><h3>Werwölfe</h3></td>    
                                            </tr>*/}
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
                  <tr>
                    <td>Hannes</td>    
                  </tr>
                  <tr>
                    <td>Maria</td>    
                  </tr>
                  <tr>
                    <td>Sid</td>    
                  </tr>
                </tbody></table>
              <br />
            </div>
            <div className="row text-center">                
              <div className="offset-sm-4 col-sm-4"> <button className="btn btn-dark col werwolf-font">Abstimmung</button></div>
            </div>
          </div>
        )
    }
}
