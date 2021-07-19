/** @format */

import React, { Component } from "react";
import "./navsub.css";

class Navsub extends Component {
  render() {
    return (
      <div id="navsub">
        <ul>
          <li className="categories">
            <button>All Categories</button>
          </li>
          <li className="pages" style={{ margin: "0 auto" }}>
            <a href="#">
              Home <i class="fas fa-angle-down    "></i>
            </a>
            <a href="#">
              Shop <i class="fas fa-angle-down    "></i>
            </a>
            <a href="#">About Us </a>
            <a href="#">Contact Us </a>
          </li>
          <div className="shop-now">
            <li>
              <button>Shop Now</button>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}

export default Navsub;
