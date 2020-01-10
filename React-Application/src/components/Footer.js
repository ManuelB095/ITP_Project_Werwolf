import React, { Component } from "react";
import icon from "../pics/icon2.png";

export default class Footer extends Component {
  render() {
    return (
      <footer id="Footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <img className="icon" src={icon} alt="Werwolf-Icon" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <h4>Soziale Netze</h4>
              <ul className="list-unstyled d-flex flex-wrap flex-xs-row flex-sm-column">
                <li>
                  <a href="https://www.facebook.com"> Facebook</a>
                </li>
                <li>
                  <a href="https://twitter.com/?lang=de">Twitter</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/?hl=de">Instagram</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3 ">
              <h4>Terms of Use</h4>
              <ul className="list-unstyled d-flex flex-wrap flex-xs-row flex-sm-column">
                <li>Copyright</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <h4>About</h4>
              <ul className="list-unstyled d-flex flex-wrap flex-xs-row flex-sm-column">
                <li>FH Technikum Wien</li>
                <li>About Us</li>
                <li>Projekt Werwolf</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
