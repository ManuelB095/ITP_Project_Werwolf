import React, { Component } from 'react'

export default class SpielBeitretenForm extends Component {
    render() {
        return (
                <div className="container spieler">    
                    <form className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal text-center schrift werwolf-font">Spiel beitreten</h1>
                        <div className="leiste">
                            <label htmlFor="inputEmail" className="sr-only">Spielername</label>
                            <input type="email" id="inputEmail" className="form-control" placeholder="Spielername" required autofocus />
                        </div>    
                        <div className="leiste">
                            <label htmlFor="inputPassword" className="sr-only">Token</label>
                            <input type="password" id="inputPassword" className="form-control" placeholder="Token" required />
                        </div>
                            <div className="leiste">
                            <label htmlFor="inputEmail" className="sr-only werwolf-font">Passwort</label>
                            <input type="email" id="inputEmail" className="form-control" placeholder="Passwort" />
                        </div>
                        <div className="text-center button">
                            <button className="btn btn-lg btn-dark text-center werwolf-font" type="submit">beitreten</button>
                        </div>
                    </form>
                </div>
        )
    }
}
