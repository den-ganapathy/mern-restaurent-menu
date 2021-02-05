import React, { Component } from "react";
import { FaArrowRight } from "react-icons/fa";
var logo = require("../../img/icon.png");

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__details">
          <a className="header__details--logo" href="/">
            <img src={logo.default}></img>
          </a>
          <a className="header__details--info" href="/">
            Go to Menu{" "}
            <p>
              <FaArrowRight />
            </p>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
