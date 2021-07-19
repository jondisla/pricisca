/** @format */

import React from "react";

const Searchbar = (props) => {
  return (
    <>
      <input
        type="text"
        name="product-search"
        placeholder="Find Best Products"
      />
      <button>
        <i class="fas fa-search    "></i>
      </button>
    </>
  );
};

export default Searchbar;
