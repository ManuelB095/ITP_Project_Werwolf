import React, { Component } from 'react'

export default class SpielErstellenForm extends Component {
    render() {
        return (
                <div className="container spielleiter">    
                    <form className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal text-center schrift werwolf-font">Spiel erstellen</h1>
                        <div className="leiste">
                            <label htmlFor="inputEmail" className="sr-only">Spieleranzahl</label>
                            <input type="email" id="inputEmail" className="form-control" placeholder="Spieleranzahl" required autofocus />
                        </div>    
                        <div className="leiste">
                            <label htmlFor="inputPassword" className="sr-only">Anzahl der Werwöfe</label>
                            <input type="password" id="inputPassword" className="form-control" placeholder="Anzahl der Werwölfe" required />
                        </div>
                        <div className="leiste">
                            <label htmlFor="inputEmail" className="sr-only">Passwort erstellen</label>
                            <input type="email" id="inputEmail" className="form-control" placeholder="Passwort" />
                        </div>
                        <div className="text-center button">
                            <button className="btn btn-lg btn-dark text-center werwolf-font" type="submit">erstellen</button>
                        </div>
                    </form>
                </div>
        )
    }
}
