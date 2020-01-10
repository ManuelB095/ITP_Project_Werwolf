import React, { Component } from 'react'
import HelpDropdown from './HelpDropdown.js'
import HelpModal from './HelpModal.js'

export default class Rolle_Dorfbewohner extends Component {
    render() {
        return (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 " id="Role-Title">
                                <h2 className="text-center schrift werwolf-font werwolf-font">Rolle "Spielleiter"</h2>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-3 ">
                                <ul className="Spieler-Infos">
                                <li>Spielername</li>
                                <li>Token</li>
                                </ul>
                            </div>
                            {/*-------hier steht die Drop Down Box "Hilfe" mit den "Modal" Buttons-------------------------------------*/}
                            <HelpDropdown />
                        </div>
                    </div>                    
                    <HelpModal />            
                </div>
        )
    }
}
