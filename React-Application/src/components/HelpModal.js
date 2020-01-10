import React, { Component } from 'react'

export default class Help_Modal extends Component {
    render() {
        return (
            <div>                          
            {/*Hier wird der Inhalt der "Modal" Buttons im Dropdown Menü Hilfe erstellt */}
            {/*Inhalt von Allgemein */}
            <div className="modal" id="Allg">
            <div className="modal-dialog">
                <div className="modal-content">
                {/*Modal Header */}
                <div className="modal-header">
                    <h4 className="modal-title">Allgemeine Infos</h4>
                    <button type="button" className="close" data-dismiss="modal">×</button>
                </div>
                {/*Modal body */}
                <div className="modal-body">
                    Hier steht ein Text zu den allgemienen Infos über das Spiel
                </div>
                </div>
            </div>
            </div>
            {/*Inhalt von Dorfbewohner */}
            <div className="modal" id="Dorfb">
            <div className="modal-dialog">
                <div className="modal-content">
                {/*Modal Header */}
                <div className="modal-header">
                    <h4 className="modal-title">Dorfbewohner</h4>
                    <button type="button" className="close" data-dismiss="modal">×</button>
                </div>
                {/*Modal body */}
                <div className="modal-body">
                    Hier stehen Infos zum Dorfbewohner
                </div>
                </div>
            </div>
            </div>
            {/*Inhalt von Werwolf */}
            <div className="modal" id="Werwolf">
            <div className="modal-dialog">
                <div className="modal-content">
                {/*Modal Header */}
                <div className="modal-header">
                    <h4 className="modal-title">Werwolf</h4>
                    <button type="button" className="close" data-dismiss="modal">×</button>
                </div>
                {/*Modal body*/} {/* */}
                <div className="modal-body">
                    Hier stehen Infos zum Werwolf
                </div>
                </div>
            </div>
            </div>
        </div>
    );
    }
}

