/** @format */

import React, { Component } from "react";
import Searchbar from "./Searchbar";

import "./nav.css";
import logo from "../../assets/img/logo_single.png";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="logo">
            <img src={logo} alt="pricisca" />
          </li>
          <li className="search-bar" style={{ margin: "0 auto" }}>
            <Searchbar />
          </li>
          <div className="shop-icons">
            <li>
              <i class="far fa-heart"></i>
            </li>
            <li>
              <i class="fas fa-shopping-bag    "></i>
            </li>
          </div>
        </ul>
      </nav>
    );
  }
}

export default Nav;
