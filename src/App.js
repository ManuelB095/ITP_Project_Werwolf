import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import "./css/fonts/stylesheet.css";
import "./css/startseite.css";
import RolleWerwolf from "./components/RolleWerwolf.js"
import PlayerTable from "./components/PlayerTable.js";
import WerwolfTable from "./components/WerwolfTable.js";
import WerwolfHeader from "./components/WerwolfHeader.js";
import RolleDorfbewohner from "./components/RolleDorfbewohner.js";
import TableDorfbewohner from './components/TableDorfbewohner';
import TableWerwoelfe from './components/TableWerwoelfe.js';
import RolleSpielleiter from './components/RolleSpielleiter.js';
import TableSpielleiterWerwolf from './components/TableSpielleiterWerwolf.js';
import TableSpielleiterDorfbewohner from './components/TableSpielleiterDorfbewohner.js'
import SpielErstellenForm from './components/SpielErstellenForm';
import SpielBeitretenForm from './components/SpielErstellenForm';
import Table from "./components/Table.js";
import Footer from "./components/Footer.js";

class App extends Component {
  state = {};

  render() {
    console.log(this.state.todos);

    return (
      <div className="App">

        {/* Rolle:Dorfbewohner Seite 
        <WerwolfHeader />
        <RolleDorfbewohner />
        <TableDorfbewohner />
        <Footer /> */}

        {/* Rolle:Werwolf Seite
        <WerwolfHeader />
        <RolleWerwolf />
        <TableWerwoelfe />
        <TableDorfbewohner />
        <Footer />  */}

        {/* Spielleiter-Seite 
        <WerwolfHeader />
        <RolleSpielleiter />
        <TableSpielleiterWerwolf />
        <TableSpielleiterDorfbewohner />        
        <Footer /> */}

        {/* Werwolf-Startseite */}
        <WerwolfHeader />
        <SpielErstellenForm />
        <SpielBeitretenForm />
        <Footer />
        
        





        {/* Werwolf Seite
        <WerwolfHeader />
        <WerwolfTable />
        <PlayerTable />        
        <Footer /> 
        */}
        

        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    );
  }
}

export default App;
