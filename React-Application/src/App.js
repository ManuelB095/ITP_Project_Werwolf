import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import "./css/fonts/stylesheet.css";
import PlayerTable from "./components/PlayerTable.js";
import WerwolfTable from "./components/WerwolfTable.js";
import WerwolfHeader from "./components/WerwolfHeader.js";
import Table from "./components/Table.js";
import Footer from "./components/Footer.js";

class App extends Component {
  state = {};

  render() {
    console.log(this.state.todos);

    return (
      <div className="App">
        <WerwolfHeader />
        <WerwolfTable />
        <PlayerTable />
        <Table />
        <Footer />

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
