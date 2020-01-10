import React, { Component } from 'react'

export default class Help_Dropdown extends Component {
    render() {
        return (
            <div className="offset-7 col-2 ">
                <div className="dropdown">
                    <button type="button" className="btn btn-dark dropdown-toggle werwolf-font" id="Hilfe-Toggle" data-toggle="dropdown">
                        Hilfe
                    </button>
                    <div className="dropdown-menu dropdown-menu-right"> {/*Damit das menü rechtsbündig droppt nutze "dropdown-menu-right"*/}
                        <button type="button" className="btn btn-secondary dropdown-item" data-toggle="modal" data-target="#Allg">
                        Allgemeine Infos
                        </button>
                        <button type="button" className="btn btn-secondary dropdown-item" data-toggle="modal" data-target="#Dorfb">
                        Dorfbewohner
                        </button>
                        <button type="button" className="btn btn-secondary dropdown-item" data-toggle="modal" data-target="#Werwolf">
                        Werwolf
                        </button>
                    </div>
                </div>                
            </div>
        )
    }
}
